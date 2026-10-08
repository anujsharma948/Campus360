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
- <img width="1917" height="1078" alt="image" src="https://github.com/user-attachments/assets/13c84d6e-d6a0-4632-984e-29fdd34bb425" />
- Academics
<img width="1917" height="918" alt="image" src="https://github.com/user-attachments/assets/cb66bd30-d2ae-4c20-ac55-bc3831599d27" />
- Attendance
<img width="1917" height="915" alt="image" src="https://github.com/user-attachments/assets/602f4f84-e52c-4ecd-914a-69d612f250a8" />
- Results
<img width="1917" height="920" alt="image" src="https://github.com/user-attachments/assets/ae5eef48-daf2-4627-9a53-cd502af4c28f" />
- Timetable
<img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/7ac4990a-92ea-4903-ad9d-e690654382ba" />
- Placement tracker
<img width="1917" height="915" alt="image" src="https://github.com/user-attachments/assets/a4acd31b-305a-4fb1-9080-ecc9d78ad531" />
- Skills
- <img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/b2ba25c6-cb9b-4e54-a37c-87a4fbb08ef5" />
- Events
- <img width="1917" height="917" alt="image" src="https://github.com/user-attachments/assets/68339186-05fa-4930-b2cd-188c01b5042f" />
- Notices
- <img width="1917" height="916" alt="image" src="https://github.com/user-attachments/assets/f9a52e78-813a-4680-aa91-c0c9273b8af5" />
- Profile
- <img width="1917" height="922" alt="image" src="https://github.com/user-attachments/assets/061995cd-ac56-45c6-b60f-09c2cf33cfa8" />
- LocalStorage applications
- 
- AI Campus Assistant
- AI receives the current Campus360 student data
- Chat history in the current browser session
