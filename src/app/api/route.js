import { NextResponse } from 'next/server';
import connectToDatabase from '@/lib/mongodb';



export async function GET(request) {
    try {
      await connectToDatabase();
      // Check if request is for a specific student or all student       
        return NextResponse.json("connection to database",
           { status: 200 });
} catch (error) {
      return NextResponse.json(
        { 
          message: 'Error retrieving students', 
          error: error.message 
        }, 
        { status: 500 }
      );
    }
  }