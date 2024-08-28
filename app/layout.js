// app/layout.js
import '../styles/globals.css'; // Global styles
import Header from '../components/Header'; // Import Header component
import Sidebar from '../components/Sidebar'; // Import Sidebar component
import Chatbox from '../components/Chatbox';


export const metadata = {
    title: 'Nia AI',
    description: 'An AI-Powered Study Assistant.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Nia AI</title>
      </head>
      <body>
        <div className="app-container">
          <Header />
          <div className="main-layout">
            <Sidebar />
            <main className="content-area">
              {children} {/* Render page content here */}
              <Chatbox /> {/* Chatbox added globally */}
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
