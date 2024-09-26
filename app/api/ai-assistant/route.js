// app/api/ai-assistant/route.js
export async function POST(request) {
    try {
        const { message } = await request.json();

        const aiResponse = await fetch(process.env.LAMBDA_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message }),
        });

        const responseData = await aiResponse.json();

        return new Response(JSON.stringify({ aiResponse: responseData.aiResponse }), {
            status: 200,
            headers: { 'Content-Type': 'application/json' },
        });
    } catch (error) {
        console.error('Error:', error);
        return new Response(JSON.stringify({ error: 'Failed to process message' }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' },
        });
    }
}
  