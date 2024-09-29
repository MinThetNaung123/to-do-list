// import Task from '@/models/task';
// import {connectMongoDB} from '@/libs/mongodb';
// import { NextResponse } from 'next/server';

// export async function POST(request) {
//     const {title, description} = await request.json();
//     await connectMongoDB();
//     await Task.create({title, description});
//     return NextResponse.json({message: "Task created"}, {status: 201});
// }

import Task from '@/models/task';
import connectMongoDB from '@/libs/mongodb';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the request body
    const { title, description } = await request.json();

    // Connect to MongoDB
    await connectMongoDB();
    const newTask = await Task.create({ title, description });
    return NextResponse.json({ message: 'Task created successfully', task: newTask }, { status: 201 });
  } catch (error) {
    console.error('Error creating task:', error);
    return NextResponse.json({ message: 'Error creating task', error: error.message }, { status: 500 });
  }
}
