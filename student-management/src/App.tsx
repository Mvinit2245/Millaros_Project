import { useState } from "react";

import type { Student } from "./types/student.types";

import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

    const [students, setStudents] = useState<Student[]>([]);

    const addStudent = (
        name: string,
        email: string,
        course: string
    ) => {

        const newStudent: Student = {
            id: Date.now(),
            name,
            email,
            course
        };

        setStudents([...students, newStudent]);
    };

    const deleteStudent = (id: number) => {

        const updatedStudents = students.filter(
            (student) => student.id !== id
        );

        setStudents(updatedStudents);
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <h1 className="text-3xl font-bold text-center mb-8">
                Student Management App
            </h1>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-6">

                <StudentForm onAddStudent={addStudent} />

                <StudentList
                    students={students}
                    onDelete={deleteStudent}
                />

            </div>

        </div>
    );
}

export default App;