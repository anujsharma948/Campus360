# Campus360 AI

AI-powered frontend student campus portal.

## Requirements
- Node.js 20+
- OpenAI API key

## Setup

1. Open this folder in VS Code.
2. Open Terminal.
3. Run:

   npm install

4. Create `.env` in the project root:

   OPENAI_API_KEY=your_real_api_key
   OPENAI_MODEL=gpt-6-luna
   PORT=3000

5. Start:

   npm start

6. Open:

   http://localhost:3000

## Important
Never put your OpenAI API key inside `index.html` or `script.js`.
The browser calls `/api/chat`; only `server.js` talks to OpenAI.

## Features
- Student dashboard
- Academics
- Attendance
- Results
- Timetable
- Placement tracker
- Skills
- Events
- Notices
- Profile
- LocalStorage applications
- AI Campus Assistant
- AI receives the current Campus360 student data
- Chat history in the current browser session
