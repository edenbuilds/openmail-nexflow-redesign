import './globals.css';

export const metadata = {
  title: 'OpenMail — Email API for AI Agents',
  description: 'OpenMail gives AI agents a dedicated email address. Create inboxes via API or CLI, send and receive email in real time, with attachments auto-parsed.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600;700&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}
