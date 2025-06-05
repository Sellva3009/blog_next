import Post from "@/models/Post";
import connectDB from "@/utils/db";
import { NextResponse } from "next/server";
import { auth } from '@/auth';
import dbConnect from '@/lib/dbConnect';

export const GET = async (request, { params }) => {
    const { id } = await params;
  try {
    await connectDB();
    const posts = await Post.findById(id);
    return new NextResponse(JSON.stringify(posts), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err.message, {
      status: 500,
    });
  }
};

export async function DELETE(request, { params }) {
  try {
    const session = await auth();
    if (!session) {
      return NextResponse.json(
        { message: 'Unauthorized' },
        { status: 401 }
      );
    }

    const { id } = params;
    await dbConnect();

    // Find the post and check ownership
    const post = await Post.findOne({ _id: id, user: session.user.id });
    if (!post) {
      return NextResponse.json(
        { message: 'Post not found or unauthorized' },
        { status: 404 }
      );
    }

    // Delete the post
    await Post.findByIdAndDelete(id);

    return NextResponse.json({ message: 'Post deleted successfully' });
  } catch (error) {
    console.error('Error deleting post:', error);
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}
