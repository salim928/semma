# SEMMA - AI Automation Agency for Small Businesses

An AI-powered platform designed to help small and medium enterprises (SMEs) automate customer service, sales calls, and administrative tasks using cutting-edge AI technology.

## 🚀 Features

### Core MVP Features
- **Voice AI for Inbound/Outbound Calls** - Natural-sounding AI that handles phone conversations
- **Email + Chat Automation** - Automated responses to customer emails and chat messages 24/7
- **Lead Conversion Dashboard** - Real-time tracking and analytics for lead conversions
- **No-Code Bot Customization** - Intuitive drag-and-drop interface to customize your AI bot

## 🛠️ Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) - React framework for production
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **AI**: [Gemini AI](https://ai.google.dev/) - Google's powerful AI model for natural language processing
- **Language**: TypeScript - Type-safe JavaScript

## 📋 Prerequisites

- Node.js 18.0 or later
- npm or yarn package manager

## 🏁 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

Create a `.env.local` file in the root directory:

```env
# Gemini AI API Key
GEMINI_API_KEY=your_api_key_here

# Add other environment variables as needed
```

To get your Gemini API key:
1. Visit [Google AI Studio](https://makersuite.google.com/app/apikey)
2. Create a new API key
3. Copy and paste it into your `.env.local` file

### 3. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### 4. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
semma/
├── app/                    # Next.js app directory
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── lib/                   # Utility functions and integrations
│   └── gemini.ts          # Gemini AI client and helpers
├── public/                # Static assets
├── next.config.ts         # Next.js configuration
├── tailwind.config.ts     # Tailwind CSS configuration
└── tsconfig.json          # TypeScript configuration
```

## 🤖 Gemini AI Integration

The project includes a placeholder for Gemini AI integration in `lib/gemini.ts`. 

### Setup Instructions:

1. Install the Google Generative AI SDK:
   ```bash
   npm install @google/generative-ai
   ```

2. Uncomment the code in `lib/gemini.ts`

3. Add your API key to `.env.local`

### Available Functions:

- `generateText(prompt)` - Generate text based on a prompt
- `startChat()` - Start a conversational chat session
- `generateSalesScript(params)` - Generate sales call scripts
- `analyzeSentiment(text)` - Analyze customer sentiment
- `generateEmailResponse(params)` - Generate email responses
- `extractInquiryDetails(inquiry)` - Extract key information from inquiries

See `lib/gemini.ts` for detailed usage examples.

## 🎨 Customization

### Styling
- Edit `tailwind.config.ts` to customize Tailwind theme
- Modify `app/globals.css` for global styles
- Update color schemes and design tokens as needed

### Content
- Edit `app/page.tsx` to customize the landing page
- Add new pages by creating files in the `app` directory
- Modify navigation and footer content

## 🚀 Deployment

### Deploy to Vercel (Recommended)

The easiest way to deploy your Next.js app is to use [Vercel](https://vercel.com):

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel dashboard
4. Deploy!

### Deploy to Other Platforms

You can also deploy to:
- [Netlify](https://www.netlify.com/)
- [Railway](https://railway.app/)
- [DigitalOcean](https://www.digitalocean.com/)
- Any platform that supports Node.js

## 📚 Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Gemini AI Documentation](https://ai.google.dev/docs)
- [React Documentation](https://react.dev/)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the ISC License.

## 📞 Support

For support, please contact the development team or open an issue in the repository.

---

Built with ❤️ for small businesses looking to scale with AI
