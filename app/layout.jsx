import "./globals.css";

export const metadata = {
  title: "First Home Buyers | FundMaster Wealth",
  description:
    "Not sure if you're ready to buy your first home? Get a free First Home Buyer Check — your borrowing position, deposit options and clear next steps. Free. No obligation.",
  icons: { icon: "/images/favicon.ico" },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700&family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
        {/* Arm reveal animations before first paint. If this never runs, .rv content stays visible. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.className += ' js-anim';`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
