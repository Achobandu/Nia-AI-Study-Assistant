import { ComprehendClient, DetectSentimentCommand } from "@aws-sdk/client-comprehend";

const comprehend = new ComprehendClient();

function simplifyText(text) {
  const words = text.split(" ");
  const simplifiedWords = words.map((word) => {
    if (word.length > 7) return "complex_term";
    return word;
  });
  return simplifiedWords.join(" ");
}

export const handler = async (event) => {
  const { message } = JSON.parse(event.body);

  const comprehendParams = {
    LanguageCode: "en",
    Text: message,
  };

  try {
    // Call Amazon Comprehend for sentiment analysis
    const command = new DetectSentimentCommand(comprehendParams);
    const sentimentData = await comprehend.send(command);
    const sentiment = sentimentData.Sentiment;

    // Simplify text
    const simplifiedText = simplifyText(message);

    return {
      statusCode: 200,
      body: JSON.stringify({
        aiResponse: `Sentiment: ${sentiment}\nSimplified Text: ${simplifiedText}`,
      }),
    };
  } catch (error) {
    console.error("Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: "Failed to analyze input",
      }),
    };
  }
};
