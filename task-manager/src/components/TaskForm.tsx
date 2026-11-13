"use client";

import { useState } from "react";

interface TaskFormProps {
    onAddTask: (title: string) => void;
    
  
  
  
}

function TaskForm({ onAddTask }: TaskFormProps) {
    
    const [title, setTitle] = useState<string>("");

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {

        e.preventDefault();

        if (!title.trim()) {
            alert("Enter a task");
            return;
        }

        onAddTask(title);

        setTitle("");
    };

    return (
        <form onSubmit={handleSubmit} className="flex gap-2 mb-6">

            <input
                type="text"
                placeholder="Enter your task"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="border p-3 rounded w-full"
            />

            <button className="bg-blue-600 text-white px-5 rounded">
                Add
            </button>

        </form>
    );
}

export default TaskForm;