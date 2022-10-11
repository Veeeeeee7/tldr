const { Configuration, OpenAIApi } = require("openai");
const { readFileSync } = require("fs");

const apiKey = readFileSync("server/API_KEY.txt", "utf-8");

const configuration = new Configuration({
    apiKey: apiKey,
});
const openai = new OpenAIApi(configuration);

async function getSummary(prompt) {
    const response = await openai.createCompletion({
        model: "text-ada-001",
        prompt: prompt,
        temperature: 0.7,
        max_tokens: 200,
        top_p: 1.0,
        frequency_penalty: 0.0,
        presence_penalty: 0.0,
    });
    return String(response.data.choices[0].text);
}

module.exports.getSummary = getSummary;
