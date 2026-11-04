import React, {  useState } from 'react'

interface StudentFormProps{
    onAddStudent: (name: string, email: string, course: string) => void;
}

function StudentForm({onAddStudent}: StudentFormProps) {

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [course, setCourse] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (!name || !email || !course) {
            alert("Please fill all fields");
            return;
        }

        onAddStudent(name, email, course);

        setName("");
        setEmail("");
        setCourse("");
    };
  return (
     <form onSubmit={handleSubmit} className="bg-white p-5 rounded-xl shadow">

            <h2 className="text-xl font-bold mb-4">Add Student</h2>

            <input
                className="border p-2 w-full mb-3 rounded"
                placeholder="Student Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-3 rounded"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <input
                className="border p-2 w-full mb-3 rounded"
                placeholder="Course"
                value={course}
                onChange={(e) => setCourse(e.target.value)}
            />

            <button className="bg-blue-600 text-white p-2 rounded w-full">
                Add Student
            </button>

        </form>
  )
}

export default StudentForm
