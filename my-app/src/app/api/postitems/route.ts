import dbConnect from "../../../../config/db";
import PostItem from "../../../../models/PostItem";

dbConnect();

export async function GET() {
  try {
    const postItems = await PostItem.find().select('-__v');
    return new Response(JSON.stringify(postItems), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'SERVER ERROR' }), {
      status: 500,
    });
  }
}

export async function POST(request) {
  try {
    const postItem = await request.json();
    const savedItem = await new PostItem({ ...postItem }).save();

    return new Response(JSON.stringify(savedItem), {
      headers: {
        'Content-Type': 'application/json',
      },
      status: 201,
    });
  } catch (error) {
    return new Response(JSON.stringify({ message: 'SERVER ERROR' }), {
      status: 500,
    });
  }
}