import StudentsList from "@/components/StudentsList";
import StudentForm from "@/components/StudentForm";

export default function Page() {
  return (
    <div className="flex  h-screen justify-center items-center bg-slate-400  p-20">
        <StudentsList />
    </div>
  );
}
