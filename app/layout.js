//app/layout.js
import '../styles/globals.css'; // Global styles
import ClientLayout from './layout-client';

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
      </head>
      <body>
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}