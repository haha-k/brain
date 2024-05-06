import OpenAI from "openai";
import { OpenAIStream } from "ai";

export default defineLazyEventHandler(async () => {
  const apiKey = useRuntimeConfig().openaiApiKey;
  console.log('%c HAHA-[ apiKey ]-6', 'font-size:13px; background:pink; color:#bf2c9f;', apiKey);
  if (!apiKey) throw new Error("Missing OpenAI API key");
  const openai = new OpenAI({
    apiKey: apiKey,
  });

  return defineEventHandler(async (event) => {
    // Extract the `prompt` from the body of the request
    const body = await readBody(event);
    console.log('%c HAHA-[ body ]-15', 'font-size:13px; background:pink; color:#bf2c9f;', body);
    const { prompt } = JSON.parse(body);
    console.log('%c HAHA-[ prompt ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', prompt);

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content:
            "You are an AI writing assistant that continues existing text based on context from prior text. " +
            "Give more weight/priority to the later characters than the beginning ones. " +
            "Limit your response to no more than 200 characters, but make sure to construct complete sentences.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      stream: true,
      n: 1,
    });

    console.log('%c HAHA-[ response ]-17', 'font-size:13px; background:pink; color:#bf2c9f;', response);

    // Convert the response into a friendly text-stream
    return OpenAIStream(response);
  });
});
