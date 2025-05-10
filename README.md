# Chat with PDF and Recipe Generator

This project provides two main functionalities:

1. Interactive chat with PDF documents using Google's Gemini AI
2. AI-powered recipe generation based on ingredients

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google AI API key

## Installation

1. Clone the repository:

```bash
git clone https://github.com/yourusername/chat-with-a-pdf.git
cd chat-with-a-pdf
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:
   Create a `.env` file in the root directory with the following content:

```env
GOOGLE_AI_API_KEY=your_api_key_here
```

### Getting Your Google AI API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click on "Get API key" or "Create API key"
4. Copy the generated API key
5. Paste it into your `.env` file, replacing `your_api_key_here`

## Chat with PDF CLI

You can run the PDF chat functionality in two ways:

1. Using npm scripts:

```bash
# Start the chat with a PDF file
npm run chat path/to/your/document.pdf

# Or with a custom prompt
npm run chat path/to/your/document.pdf "Your custom prompt here"
```

2. Using tsx directly:

```bash
# Start the chat with a PDF file
npx tsx src/index.ts path/to/your/document.pdf

# Or with a custom prompt
npx tsx src/index.ts path/to/your/document.pdf "Your custom prompt here"
```

Once started, you can:

- Ask questions about the PDF content
- Type 'exit' to quit the chat
- The AI will respond based on the content of your PDF

### Features

- PDF document upload and processing
- Interactive chat interface
- Context-aware responses using Gemini AI
- Real-time conversation history
- Custom prompt support

## Recipe Generator

The recipe generator uses Google's Gemini AI to create structured recipes based on a list of ingredients. The generator creates detailed recipes with ingredients, instructions, cooking times, and more.

### Running the Recipe Generator

To generate a recipe using the default ingredients:

```bash
npx tsx src/recipe-generator.ts
```

The default recipe will be generated using these ingredients:

- chicken breast
- bell peppers
- onion
- garlic
- olive oil
- rice

### Customizing Ingredients

To modify the ingredients list, edit the `ingredients` array in the `main()` function in `src/recipe-generator.ts`:

```typescript
const ingredients = ["your", "ingredients", "here"];
```

### Recipe Output Format

The generated recipe will include:

- Title and description
- List of ingredients with amounts and units
- Step-by-step cooking instructions
- Preparation and cooking times
- Number of servings
- Difficulty level
- Relevant tags

### Example Recipe Output

```
=== Generated Recipe ===

Title: [Recipe Title]
Description: [Recipe Description]

Ingredients:
- [amount] [unit] [ingredient]
- [amount] [unit] [ingredient]
...

Instructions:
1. [Step 1]
2. [Step 2]
...

Additional Information:
Prep Time: [time]
Cook Time: [time]
Servings: [number]
Difficulty: [Easy/Medium/Hard]
Tags: [tag1, tag2, ...]
```

## Error Handling

If you encounter any errors:

1. Verify your API key is correctly set in the `.env` file
2. Check your internet connection
3. Ensure all dependencies are properly installed
4. For PDF chat: Verify the PDF file exists and is readable
5. For Recipe Generator: Verify the ingredients list is properly formatted

## Project Structure

```
chat-with-a-pdf/
├── src/                    # Source files
│   ├── index.ts           # PDF chat functionality
│   └── recipe-generator.ts # Recipe generation functionality
├── .env                   # Environment variables
├── package.json          # Project dependencies and scripts
└── README.md             # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
