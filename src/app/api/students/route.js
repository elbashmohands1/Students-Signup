import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';
import Student from '@/models/Student';

export async function GET(request) {
  try {
    await connectToDatabase();
    
    // Check if request is for a specific student or all students
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (id) {
      // Retrieve specific student
      const student = await Student.findById(id);
      
      if (!student) {
        return NextResponse.json(
          { message: 'Student not found' }, 
          { status: 404 }
        );
      }
      
      return NextResponse.json(student, { status: 200 });
    }

    // Retrieve all students
    const students = await Student.find({});
    
    return NextResponse.json(
      { 
        count: students.length, 
        students 
      }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error retrieving students', 
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}

export async function POST(request) {
  try {
    await connectToDatabase();
    
    // Parse request body
    const body = await request.json();
    
    // Validate input
    if (!body.firstName || !body.lastName || !body.email) {
      return NextResponse.json(
        { message: 'Missing required fields' }, 
        { status: 400 }
      );
    }

    // Create new student
    const newStudent = await Student.create(body);
    
    return NextResponse.json(
      { 
        message: 'Student created successfully', 
        student: newStudent 
      }, 
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error creating student', 
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}

export async function PUT(request) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { message: 'Student ID is required' }, 
        { status: 400 }
      );
    }

    // Parse request body
    const body = await request.json();

    // Update student
    const updatedStudent = await Student.findByIdAndUpdate(
      id, 
      body, 
      { 
        new: true,  // Return updated document
        runValidators: true  // Run model validation
      }
    );

    if (!updatedStudent) {
      return NextResponse.json(
        { message: 'Student not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Student updated successfully', 
        student: updatedStudent 
      }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error updating student', 
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}

export async function DELETE(request) {
  try {
    await connectToDatabase();
    
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    
    if (!id) {
      return NextResponse.json(
        { message: 'Student ID is required' }, 
        { status: 400 }
      );
    }

    // Delete student
    const deletedStudent = await Student.findByIdAndDelete(id);

    if (!deletedStudent) {
      return NextResponse.json(
        { message: 'Student not found' }, 
        { status: 404 }
      );
    }

    return NextResponse.json(
      { 
        message: 'Student deleted successfully', 
        student: deletedStudent 
      }, 
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { 
        message: 'Error deleting student', 
        error: error.message 
      }, 
      { status: 500 }
    );
  }
}