import OpenAI from "openai";

export const openai = new OpenAI({
  organization: 'org-q1GTMp4P8go8ot13bylBsqAc',
  apiKey: process.env.OPENAI_API_KEY
})