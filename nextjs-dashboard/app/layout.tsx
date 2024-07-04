import "./ui/global.css"
import { montserrat } from "./ui/fonts";
import { LikesProvider } from "./context/LikesContext";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <LikesProvider>
    <body className={`${montserrat.className} antialiased`}>{children}</body>
    </LikesProvider>
           
    </html>
  );
}
