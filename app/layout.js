import "./globals.css";

export const metadata = {
  title: "Portfolio - Heba A.",
  description: "Web Dev Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <meta name="robots" content="noindex" />
        <script defer src="https://app.tinyanalytics.io/pixel/7JCvjangLJk8vxFn"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
