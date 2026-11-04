import type { Student } from "../types/student.types";
import StudentCard from "./StudentCard";

interface StudentListProps {
    students: Student[];
    onDelete: (id: number) => void;
}

function StudentList({ students, onDelete }: StudentListProps) {

    return (
        <div>

            <h2 className="text-xl font-bold mb-4">
                Student List
            </h2>

            {students.length === 0 ? (
                <p>No students available</p>
            ) : (
                students.map((student) => (
                    <StudentCard
                        key={student.id}
                        student={student}
                        onDelete={onDelete}
                    />
                ))
            )}

        </div>
    );
}

export default StudentList;