"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AddTask() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const router = useRouter();

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!title || !description) {
            alert("Please fill all the fields");
            return;
        }

        try {
            // Log the data to be sent
            console.log('Submitting Task:', { title, description });

            const res = await fetch('http://localhost:3000/api/task', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ title, description }),
            });

            // Log the response status and message
            console.log('Response status:', res.status);
            const data = await res.json();
            console.log('Response data:', data);

            if (res.ok) {
                // Wait for the redirect to complete after successful submission
                router.push('/');
            } else {
                throw new Error('Failed to create task');
            }
        } catch (error) {
            console.log('Error:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className="border border-slate-600 px-8 p-2"
                type="text"
                placeholder="Task Title"
            />

            <input
                onChange={(e) => setDescription(e.target.value)}
                value={description}
                className="border border-slate-600 px-8 p-2"
                type="text"
                placeholder="Task Detail"
            />

            <button
                type="submit"
                className="bg-green-600 font-bold text-white py-3 px-6 w-fit"
            >
                Add Task
            </button>
        </form>
    );
}
