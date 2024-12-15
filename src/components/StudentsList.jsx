"use client";

import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableHeader,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Loader2, Trash2, Edit } from "lucide-react";
import StudentForm from "@/components/StudentForm";

export default function StudentsList() {
  const [students, setStudents] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch students
  const fetchStudents = async () => {
    try {
      const response = await fetch("/api/students");

      if (!response.ok) {
        throw new Error("Failed to fetch students");
      }

      const data = await response.json();
      setStudents(data.students);
      setIsLoading(false);
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  // Handle adding a new student
  const handleAddStudent = (newStudent) => {
    setStudents((prevStudents) => [...prevStudents, newStudent]);
  };

  // Handle deleting a student
  const handleDelete = async (studentId) => {
    if (!window.confirm("Are you sure you want to delete this student?"))
      return;

    try {
      const response = await fetch(`/api/students?id=${studentId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete student");
      }

      // Remove the deleted student from the list
      setStudents(students.filter((student) => student._id !== studentId));
    } catch (err) {
      alert(`Error: ${err.message}`);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-full">
        <Loader2 className="animate-spin" size={48} />
      </div>
    );
  }

  if (error) {
    return (
      <Card className="border-red-500 bg-red-50">
        <CardHeader>
          <CardTitle className="text-red-700">Error Loading Students</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-red-600">{error}</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      <StudentForm onStudentAdded={handleAddStudent} />

      <Card className="w-full max-w-6xl mx-auto h-[25rem] overflow-auto relative ">
        <CardHeader style={{position:"sticky" , top:"0" , zIndex:"5", background:"white"}}>
          <CardTitle className="text-2xl font-bold">معلومات الطلاب</CardTitle>
        </CardHeader>
        <CardContent>
          <Table >
            <TableHeader >
              <TableRow >
                <TableHead>الاسم الاول</TableHead>
                <TableHead>اسم العائلة</TableHead>
                <TableHead>البريد الالكتروني</TableHead>
                <TableHead>العمر</TableHead>
                <TableHead>تاريخ الاضافة</TableHead>
                <TableHead className="text-right">الاجراء</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody className=" overflow-auto  ">
              {students.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center text-gray-500">
                    No students found
                  </TableCell>
                </TableRow>
              ) : (
                students.map((student) => (
                  <TableRow key={student._id}>
                    <TableCell>{student.firstName}</TableCell>
                    <TableCell>{student.lastName}</TableCell>
                    <TableCell>{student.email}</TableCell>
                    <TableCell>{student.age || "N/A"}</TableCell>
                    <TableCell>
                      {new Date(student.enrollmentDate).toLocaleDateString()}
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="icon"
                          onClick={() => {
                            /* Implement edit functionality */
                          }}
                        >
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="icon"
                          onClick={() => handleDelete(student._id)}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
