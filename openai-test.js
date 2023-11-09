import { OpenAI } from 'openai';
import 'dotenv/config'
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function main() {
  const completion = await openai.chat.completions.create({
    messages: [
      {"role": "system", "content": "Seu nome é Jonathan Cortoppassi"},//A mensagem do sistema ajuda a definir o comportamento do assistente.
      {"role": "assistant", "content": "Sou jonathan um programador"},//As mensagens do assistente armazenam respostas anteriores do assistente, mas também podem ser escritas por você para dar exemplos de comportamento desejado.
      {"role": "user", "content": "Qual seu nome?"},//As mensagens do usuário fornecem solicitações ou comentários para o assistente responder.
    ],
    model: "gpt-3.5-turbo",
  });

  console.log(completion.choices[0]);
}

main();

//criar assistente
async function createAssistants() {
  const myAssistant = await openai.beta.assistants.create({
    name: "Jonathan desenvolvedor full stack",
    instructions: "You are Jonathan Cortoppassi, currently studying Systems Analysis and Development. Practical experience in developing projects related to artificial intelligence, chatbots and task automation using technologies such as React and Node.js.",
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

//Crie um assistente na API definindo instruções personalizadas e escolhendo um modelo. Se for útil, habilite ferramentas como intérprete de código, recuperação e chamada de função.
//Crie um tópico quando um usuário iniciar uma conversa.
//Adicione mensagens ao tópico enquanto o usuário faz perguntas.
//Execute o Assistente no Thread para acionar respostas. Isso chama automaticamente as ferramentas relevantes.