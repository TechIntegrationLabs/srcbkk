# Srcbook with Clerk Authentication

A web application that integrates Clerk for authentication and OpenAI for AI functionality.

## Project Structure

- `/client` - React frontend application
- `/server` - Express backend server

## Prerequisites

- Node.js 18+ installed
- A Clerk account and application
- An OpenAI API key

## Setup Instructions

### Backend Setup

1. Navigate to the server directory:
```bash
cd server
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file based on `.env.example`:
```bash
cp .env.example .env
```

4. Update the environment variables in `.env`

5. Start the server:
```bash
npm run dev
```

### Frontend Setup

1. Navigate to the client directory:
```bash
cd client
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:
```bash
cp .env.example .env.local
```

4. Update the environment variables in `.env.local`

5. Start the development server:
```bash
npm run start
```

## Environment Variables

### Backend (.env)
- `PORT` - Server port (default: 3001)
- `CORS_ORIGIN` - Frontend URL for CORS

### Frontend (.env.local)
- `VITE_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
- `VITE_API_URL` - Backend API URL

## Deployment

1. Build the frontend:
```bash
cd client
npm run build
```

2. The build output will be in the `dist` directory

3. Deploy the backend and frontend to your preferred hosting service

## Security Notes

- Never commit `.env` or `.env.local` files
- The current implementation stores API keys in memory - consider using a database for production
- Ensure proper CORS configuration in production

## License

MIT
