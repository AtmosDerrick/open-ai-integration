const { getOpenAIResponse } = require("./client");

const handleChat = async (req, res) => {
  const { prompt, model = "gpt-3.5-turbo" } = req.body;

  if (!prompt) {
    return res.status(400).json({ error: "Prompt is required" });
  }

  try {
    const response = await getOpenAIResponse(prompt, model);
    return res.json(response);
  } catch (error) {
    console.error("Error handling the chat request:", error.message);
    if (error.response) {
      return res.status(error.response.status).json(error.response.data);
    }
    return res.status(500).json({ error: "An error occurred" });
  }
};

module.exports = { handleChat };
