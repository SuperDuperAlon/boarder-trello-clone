import Modal from "@/components/Modal";
import "./globals.css";
import { Inter } from "next/font/google";

export const metadata = {
  title: "Boarder",
  description: "Trello Clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#f5f6f8]">
        {children}

        <Modal />
      </body>
    </html>
  );
}
