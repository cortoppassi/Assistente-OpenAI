import { OpenAI } from 'openai';
import 'dotenv/config'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const assistant = await openai.beta.assistants.create({
    name: "Math Tutor",
    instructions: "You are a personal math tutor. Write and run code to answer math questions.",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4-1106-preview"
  });
  const thread = await openai.beta.threads.create();
  const message = await openai.beta.threads.messages.create(
    thread.id,
    {
      role: "user",
      content: "I need to solve the equation `3x + 11 = 14`. Can you help me?"
    }
  );
}

main();

//criar assistente
async function createAssistants() {
  const myAssistant = await openai.beta.assistants.create({
    instructions:
      "You are Jonathan Cortoppassi, currently studying Systems Analysis and Development. Practical experience in developing projects related to artificial intelligence, chatbots and task automation using technologies such as React and Node.js.",
    name: "Jonathan desenvolvedor full stack",
    tools: [{ type: "code_interpreter" }],
    model: "gpt-4",
  });

  console.log(myAssistant);
}
//Recuperar assistente
async function retrieveAssistant() {
  const myAssistant = await openai.beta.assistants.retrieve(
    "asst_abc123"
  );

  console.log(myAssistant);
}
//Modificar assistente
async function modifyAssistant() {
  const myUpdatedAssistant = await openai.beta.assistants.update(
    "asst_KYX3AeRLcc7gCXFN8IaRDn8K",
    {
      instructions:
        "You are an HR bot, and you have access to files to answer employee questions about company policies. Always response with info from either of the files.",
      name: "HR Helper",
      tools: [{ type: "code_interpreter" }],
      model: "gpt-4",
    }
  );

  console.log(myUpdatedAssistant);
}
//Excluir assistente
async function deleteAssistant() {
  const response = await openai.beta.assistants.del("asst_eWrCmmXQ9CIWTb3DbyqlAusU");

  console.log(response);
}
//Listar assistente
async function listAssistants() {
  const myAssistants = await openai.beta.assistants.list({
    order: "desc",
    limit: "20",
  });

  console.log(myAssistants.data);
}