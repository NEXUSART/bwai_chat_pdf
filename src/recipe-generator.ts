import { gemini20Flash, googleAI } from '@genkit-ai/googleai';
import { genkit } from 'genkit/beta';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configure Genkit with Google AI
const ai = genkit({
  plugins: [googleAI()],
  model: gemini20Flash,
});

// Define the recipe structure
interface Recipe {
  title: string;
  description: string;
  ingredients: {
    name: string;
    amount: string;
    unit: string;
  }[];
  instructions: string[];
  prepTime: string;
  cookTime: string;
  servings: number;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  tags: string[];
}

// Function to generate a recipe based on ingredients
async function generateRecipe(ingredients: string[]): Promise<Recipe> {
  const prompt = `
    Generate a recipe using the following ingredients: ${ingredients.join(', ')}.
    The recipe should be structured and include:
    - A creative title
    - A brief description
    - List of ingredients with amounts and units
    - Step-by-step instructions
    - Preparation time
    - Cooking time
    - Number of servings
    - Difficulty level (Easy, Medium, or Hard)
    - Relevant tags (e.g., vegetarian, gluten-free, etc.)
    
    Format the response as a JSON object matching the Recipe interface structure.
  `;

  try {
    const { text } = await ai.generate(prompt);
    // Clean the response by removing markdown code block formatting
    const cleanedText = text.replace(/```json\n?|\n?```/g, '').trim();
    return JSON.parse(cleanedText) as Recipe;
  } catch (error) {
    console.error("Error generating recipe:", error);
    throw error;
  }
}

// Main function to handle recipe generation
async function main() {
  try {
    // Example ingredients
    const ingredients = [
      "chicken breast",
      "bell peppers",
      "onion",
      "garlic",
      "olive oil",
      "rice"
    ];

    console.log("Generating recipe with ingredients:", ingredients.join(", "));
    const recipe = await generateRecipe(ingredients);
    
    // Print the recipe in a formatted way
    console.log("\n=== Generated Recipe ===\n");
    console.log(`Title: ${recipe.title}`);
    console.log(`Description: ${recipe.description}\n`);
    
    console.log("Ingredients:");
    recipe.ingredients.forEach(ing => {
      console.log(`- ${ing.amount} ${ing.unit} ${ing.name}`);
    });
    
    console.log("\nInstructions:");
    recipe.instructions.forEach((step, index) => {
      console.log(`${index + 1}. ${step}`);
    });
    
    console.log("\nAdditional Information:");
    console.log(`Prep Time: ${recipe.prepTime}`);
    console.log(`Cook Time: ${recipe.cookTime}`);
    console.log(`Servings: ${recipe.servings}`);
    console.log(`Difficulty: ${recipe.difficulty}`);
    console.log(`Tags: ${recipe.tags.join(", ")}`);
    
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

// Run the main function
main(); 