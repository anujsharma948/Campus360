import "dotenv/config";
import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import OpenAI from "openai";

const __filename=fileURLToPath(import.meta.url);
const __dirname=path.dirname(__filename);

const app=express();
const port=process.env.PORT||3000;

if(!process.env.OPENAI_API_KEY){
  console.warn("WARNING: OPENAI_API_KEY is not configured.");
}

const client=new OpenAI({apiKey:process.env.OPENAI_API_KEY});

app.use(express.json({limit:"100kb"}));
app.use(express.static(__dirname));

app.post("/api/chat",async(req,res)=>{
  try{
    const {message,history=[],campusData={},currentPage="dashboard"}=req.body||{};

    if(typeof message!=="string"||!message.trim()){
      return res.status(400).json({error:"Message is required."});
    }

    const safeHistory=Array.isArray(history)
      ? history.filter(x=>x&&["user","assistant"].includes(x.role)&&typeof x.content==="string").slice(-10)
      : [];

    const context=JSON.stringify(campusData,null,2);

    const instructions=`
You are Campus360 AI, the intelligent assistant inside a university student portal.

Your job:
1. Answer questions about the student's Campus360 data accurately.
2. Use the supplied CAMPUS DATA as the source of truth for personal/student-specific facts.
3. If the user asks for something not present in the data, say that the portal does not currently contain that information. Do not invent it.
4. You may explain academic concepts generally when asked.
5. Keep answers clear, friendly and useful for a college student.
6. When comparing subjects, calculate from the supplied numbers.
7. Never claim to have accessed a real university database, email, LMS, attendance system or placement system.
8. If asked for sensitive account actions such as changing grades or attendance, explain that the demo cannot perform those actions.
9. Current portal page: ${currentPage}

CAMPUS DATA:
${context}
`;

    const input=[
      ...safeHistory,
      {role:"user",content:message}
    ];

    const response=await client.responses.create({
      model:process.env.OPENAI_MODEL||"gpt-6-luna",
      instructions,
      input
    });

    res.json({reply:response.output_text||"I couldn't generate an answer right now."});
  }catch(error){
    console.error(error);
    res.status(500).json({error:"AI request failed. Check the server and API key."});
  }
});

app.get("/api/health",(req,res)=>res.json({ok:true}));

app.listen(port,()=>console.log(`Campus360 running at http://localhost:${port}`));