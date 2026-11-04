import type { Student } from "../types/student.types";

interface StudentCardProps {
    student: Student;
    onDelete: (id: number) => void;
}

function StudentCard({ student, onDelete }: StudentCardProps) {

    return (
        <div className="bg-white p-4 rounded-lg shadow mb-3">

            <h2 className="font-bold text-lg">
                {student.name}
            </h2>

            <p className="text-gray-600">{student.email}</p>

            <p className="text-blue-600">{student.course}</p>

            <button
                onClick={() => onDelete(student.id)}
                className="bg-red-500 text-white px-3 py-1 rounded mt-3"
            >
                Delete
            </button>

        </div>
    );
}

export default StudentCard;