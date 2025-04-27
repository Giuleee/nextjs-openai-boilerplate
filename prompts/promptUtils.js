export function getSystemPrompt() {
  return {
    role: "system",
    content: "You are a world-class chef specializing in creating creative fusion dishes by blending different cuisines, tailored to the user's desires.",
  };
}

export function getUserPrompt(input) {
  return {
    role: "user",
    content: `Based on the following user request, generate:\n- A Fusion Dish Name\n- A Short Summary describing the fusion idea.\n\nUser Request: "${input}"`,
  };
}

export function getFunctions() {
  return [
    {
      name: "generate_fusion_cuisine_idea",
      description: "Generate a fusion cuisine dish idea based on user request.",
      parameters: {
        type: "object",
        properties: {
          fusionDishName: {
            type: "string",
            description: "Name of the fusion dish."
          },
          fusionIdeaSummary: {
            type: "string",
            description: "Short summary explaining the fusion concept."
          }
        },
        required: ["fusionDishName", "fusionIdeaSummary"]
      },
    },
  ];
}
