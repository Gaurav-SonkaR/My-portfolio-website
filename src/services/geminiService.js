export const callGemini = async (prompt) => {
  const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
  const model = "gemini-2.0-flash";

  if (!apiKey) {
    console.error("Gemini API key is missing");
    return "API key not found. Check your environment variables.";
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-goog-api-key": apiKey, // ✅ CORRECT
        },
        body: JSON.stringify({
          contents: [
            {
              parts: [
                {
                  text: prompt,
                },
              ],
            },
          ],
        }),
      }
    );

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API Error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    return (
      data?.candidates?.[0]?.content?.parts?.[0]?.text ||
      "No response from Gemini."
    );
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Something went wrong while talking to Gemini.";
  }
};