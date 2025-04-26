# Chat with a PDF

This project allows you to have interactive conversations with PDF documents using Google's Gemini AI for natural language processing and understanding.

## Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Google AI Studio account (for Gemini API key)
- PDF documents you want to interact with

## Setup

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
GEMINI_API_KEY=your_api_key_here
```

### Getting Your Gemini API Key

1. Go to [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Sign in with your Google account
3. Click on "Get API key" or "Create API key"
4. Copy the generated API key
5. Paste it into your `.env` file, replacing `your_api_key_here`

## Running the Project

You can run the project in two ways:

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

## Features

- PDF document upload and processing
- Interactive chat interface
- Context-aware responses using Gemini AI
- Real-time conversation history
- Custom prompt support

## Project Structure

```
chat-with-a-pdf/
├── src/              # Source files
│   └── index.ts      # Main application code
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
└── README.md        # Project documentation
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the LICENSE file for details.
