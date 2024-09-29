
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

export async function GET() {
    try {
      await connectMongoDB();
      const tasks = await Task.find();
      return NextResponse.json({ tasks });
    } catch (error) {
      console.error('Error fetching tasks:', error);
      return NextResponse.json({ message: 'Error fetching tasks', error: error.message }, { status: 500 });
    }
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get('id');
    await connectMongoDB();
    await Task.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Task deleted successfully' }, { status: 200 });
}
