"use client";

import { useState } from "react";

import type { Task } from "../types/tasks.types";

import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

export default function Home() {

    const [tasks, setTasks] = useState<Task[]>([]);

    const addTask = (title: string) => {

        const newTask: Task = {
            id: Date.now(),
            title: title,
            completed: false
        };

        setTasks([...tasks, newTask]);
    };

    const deleteTask = (id: number) => {

        setTasks(
            tasks.filter((task) => task.id !== id)
        );
    };

    const toggleTask = (id: number) => {

        setTasks(
            tasks.map((task) =>
                task.id === id
                    ? { ...task, completed: !task.completed }
                    : task
            )
        );
    };

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    return (
        <div className="min-h-screen bg-gray-100 p-6">

            <div className="max-w-2xl mx-auto">

                <h1 className="text-3xl font-bold text-center mb-6">
                    My Task Manager
                </h1>

                <div className="grid grid-cols-2 gap-4 mb-6">

                    <div className="bg-blue-100 p-4 rounded-lg">
                        <h2>Total Tasks</h2>
                        <p className="text-2xl font-bold">
                            {tasks.length}
                        </p>
                    </div>

                    <div className="bg-green-100 p-4 rounded-lg">
                        <h2>Completed Tasks</h2>
                        <p className="text-2xl font-bold">
                            {completedTasks}
                        </p>
                    </div>

                </div>

                <TaskForm onAddTask={addTask} />

                <TaskList
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleTask}
                />

            </div>

        </div>
    );
}