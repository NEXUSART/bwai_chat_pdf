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
async function generateRecipe(ingredients: string[]): Promise<string> {
  const prompt = `
    Create a simple recipe using these ingredients: ${ingredients.join(', ')}.
    
    Just list out:
    - Recipe name
    - Ingredients needed (with amounts)
    - Simple step by step instructions
    - How long it takes to make
    - How many people it serves
  `;

  try {
    const { text } = await ai.generate(prompt);
    return text;
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
    
    // Print the recipe
    console.log("\n=== Generated Recipe ===\n");
    console.log(recipe);
    
  } catch (error) {
    console.error("Error:", error);
    process.exit(1);
  }
}

// Run the main function
main(); 