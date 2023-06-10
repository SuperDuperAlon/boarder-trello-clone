import openai from "@/openai";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { todos } = await request.json();

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    temperature: 0.8,
    n: 1,
    stream: false,
    messages: [
      {
        role: "system",
        content:
          "when responding, welcome the user always as Mr. Alon. Limit the response to 500 characters",
      },
      {
        role: "user",
        content: `Hi there, provide a summary of the following todos. Count how many todos are in each category such as To do, in progress and done, then tell the user have a productive day! Here the data:
        ${JSON.stringify(todos)}`
        ,
      },
    ],
  });

  const { data } = response;

  return NextResponse.json(data.choices[0].message);
}
