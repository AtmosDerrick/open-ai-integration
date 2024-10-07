const axios = require("axios");

const apiKey = process.env.VITE_OPENAI_API_KEY;

if (!apiKey) {
  console.error("Error: VITE_OPENAI_API_KEY is not defined in .env");
  process.exit(1);
}

const getOpenAIResponse = async (prompt, model) => {
  try {
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model,
        messages: [{ role: "user", content: prompt }],
      },
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};

module.exports = { getOpenAIResponse };
