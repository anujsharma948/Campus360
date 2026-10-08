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
<img width="1917" height="927" alt="image" src="https://github.com/user-attachments/assets/0690267a-95b4-497c-b575-a3efd6510948" />
- Academics
<img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/ebdd575c-bf5e-4c0f-930a-560dbcd19db7" />
- Attendance
<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/af60d7e2-9888-4327-8050-bc081b7b8692" />
- Results
<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/ef0f781f-716c-452a-a26f-de5fc252f637" />
- Timetable
<img width="1917" height="922" alt="image" src="https://github.com/user-attachments/assets/497aa45b-2611-42c3-96cd-04ef19c8313f" />
- Placement tracker
<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/0426038c-6823-4c41-977f-b157781037a1" />
- Skills
<img width="1917" height="921" alt="image" src="https://github.com/user-attachments/assets/da8ba137-70f8-4816-8f5d-8fb64f42ef7b" />
- Events
<img width="1917" height="925" alt="image" src="https://github.com/user-attachments/assets/b3c6fca5-c5df-4df4-80a9-64ddb6e8940b" />
- Notices
<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/09a2d45d-7121-4ede-8eb7-2f7b02193c1d" />
- Profile
<img width="1917" height="918" alt="image" src="https://github.com/user-attachments/assets/d48a9f7c-d4d1-4ff4-a056-1ffdc08cb472" />
- AI Campus Assistant
<img width="543" height="892" alt="image" src="https://github.com/user-attachments/assets/586d2b74-b22a-446c-bdc5-c27e9db37a2c" />

- Chat history in the current browser session
