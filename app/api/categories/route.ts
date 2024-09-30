import clientPromise from "@/lib/mongodb";

export async function POST(req:any) {
  const client = await clientPromise;
  const db = client.db('mydatabase');

  const data = await req.json();
  await db.collection('categories').insertOne(data);

  return new Response(JSON.stringify({ message: 'successfully' }), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function GET() {
  const client = await clientPromise;
  const db = client.db('mydatabase');

  const results = await db.collection('categories').find({}).toArray();

  return new Response(JSON.stringify(results), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
