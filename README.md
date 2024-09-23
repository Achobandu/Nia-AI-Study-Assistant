
# Nia AI - AI-Powered Study Assistant

Nia AI is an AI-powered study assistant designed to help students manage their courses, assignments, and study plans. The assistant provides an intuitive interface where students can chat with an AI assistant, track their courses, view upcoming assignments, and stay organized with a personalized study planner.

## Features

- **AI Study Assistant**: A chat interface where students can ask questions or get study tips.
- **Courses Dashboard**: View all enrolled courses, instructors, and assignment deadlines.
- **Assignments Management**: Track upcoming assignments, add new ones, and edit or delete existing assignments.
- **Study Planner**: Organized planner to view your course schedule and upcoming assignment deadlines.
- **Authentication**: Simple authentication to track user progress and saved data.

## Tech Stack

- **Next.js (App Directory)**: Framework for building the app using server-side rendering and client-side features.
- **React**: For creating reusable components and managing the UI.
- **CSS Modules**: Used for modular and scoped styling.
- **AWS Amplify**: For backend services like authentication and storage.
- **Local Storage**: Saving chat history and other small persistent data on the user's device.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository**:
   \`\`\`bash
   git clone https://github.com/yourusername/nia-ai.git
   \`\`\`

2. **Navigate to the project directory**:
   \`\`\`bash
   cd nia-ai
   \`\`\`

3. **Install dependencies**:
   \`\`\`bash
   npm install
   \`\`\`

4. **Run the development server**:
   \`\`\`bash
   npm run dev
   \`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## Project Structure

\`\`\`
nia-ai/
│
├── app/
│   ├── ai-assistant/
│   │   └── page.js         # AI Assistant Page
│   ├── courses/
│   │   └── page.js         # Courses Page
│   ├── assignments/
│   │   └── page.js         # Assignments Page
│   ├── layout-client.js    # Client layout with Header, Sidebar, and Chatbox
│   └── layout.js           # Main layout file
│
├── components/
│   ├── Header.js           # Header Component
│   ├── Sidebar.js          # Sidebar Component
│   ├── Chatbox.js          # Chatbox for AI Assistant
│   └── Dashboard.js        # Dashboard with overview of courses and assignments
│
├── styles/
│   ├── globals.css         # Global CSS styles
│   ├── ai-assistant.module.css # Styles for AI Assistant
│   └── courses.module.css  # Styles for Courses page
│
├── public/
│   └── ...                 # Static assets like images, icons, etc.
│
├── package.json            # Project configuration and dependencies
└── README.md               # Project readme (this file)
\`\`\`

## Usage

### AI Study Assistant

The AI assistant allows students to chat and ask questions related to their studies. You can type your question in the chat input box, and the assistant will generate a response using AI technologies like Amazon Comprehend.

### Course Management

The **Courses** page lists all your enrolled courses, with the ability to add new courses or remove existing ones via a simple pop-up form.

### Assignment Management

The **Assignments** page allows students to track their upcoming assignments, add new assignments, or remove/edit existing ones. Assignments are linked to the enrolled courses.

### Study Planner

The study planner organizes your schedule, showing you upcoming assignments and important deadlines for each course.

## Upcoming Features

- **Study Streak Tracking**: Keep track of how long you've been consistently studying.
- **Advanced AI Integration**: A more interactive and intelligent AI assistant.
- **Notifications**: Alerts for upcoming assignment deadlines and study reminders.
- **Calendar View**: A full calendar view for better visualization of assignments and course schedules.

## Contributing

Feel free to contribute to this project by submitting a pull request. Here's how you can contribute:

1. Fork the repository.
2. Create a new branch (\`git checkout -b feature/your-feature-name\`).
3. Make your changes and commit them (\`git commit -m 'Add some feature'\`).
4. Push to the branch (\`git push origin feature/your-feature-name\`).
5. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

### Contact

If you have any questions or suggestions, feel free to reach out:

- **Email**: ifeanyiachobandu@gmail.com
- **GitHub**: [Achobandu](https://github.com/achobandu)
