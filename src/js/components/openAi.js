// import { Configuration, OpenAIApi } from "openai";
// // import readline from "readline";
// import * as dotenv from "dotenv";
// dotenv.config();

// const OPENAI_KEY = process.env.API_KEY;

// const configuration = new Configuration({
//   apiKey: OPENAI_KEY,
// });

// const openai = new OpenAIApi(configuration);

// openai.createChatCompletion({
//   model: "gpt-3.5-turbo-0301",
//   messages: [
//     { role: "user", content: "Hello ChatGPT"}
// ]
// }).then(res => {
//   console.log(res.data.choices[0].message.content)
// })



// function test(expectedSecret) { 
// const secretMatches = process.env.API_KEY == expectedSecret; 
// console.log(`meaning of life is ${process.env.API_KEY}`); 
// console.log(`The secret does ${secretMatches ? "" : "not"} match !`) 
// }

// test("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")