"use client";

import type { Task } from "../types/tasks.types";

interface TaskListProps {
    tasks: Task[];
    onDelete: (id: number) => void;
    onToggle: (id: number) => void;
}

function TaskList({
    tasks,
    onDelete,
    onToggle
}: TaskListProps) {

    return (
        <div className="space-y-3">

            {tasks.map((task) => (

                <div
                    key={task.id}
                    className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
                >

                    <div className="flex gap-3 items-center">

                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => onToggle(task.id)}
                        />

                        <span className={
                            task.completed
                                ? "line-through text-gray-400"
                                : "text-gray-800"
                        }>
                            {task.title}
                        </span>

                    </div>

                    <button
                        onClick={() => onDelete(task.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded"
                    >
                        Delete
                    </button>

                </div>

            ))}

        </div>
    );
}

export default TaskList;