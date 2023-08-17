import "./globals.css";
import { Figtree } from "next/font/google";

import Sidebar from "@/components/Sidebar";
import SupabaseProvider from "@/providers/SupabaseProvider";
import UserPovider from "@/providers/UserProvider";
import ModalProvider from "@/providers/ModalProvider";
import getSongsbyUserId from "@/actions/getSongsbyUserId";
import ToasterProvider from "@/providers/ToasterProvider ";
import Plyer from "@/components/Plyer";

const font = Figtree({ subsets: ["latin"] });

export const metadata = {
  title: "Spotify Clone",
  description: "Listen to Music!",
};
export const revalidate = 0;

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const userSongs = await getSongsbyUserId();
  return (
    <html lang="en">
      <body className={font.className}>
        <ToasterProvider />
        <SupabaseProvider>
          <UserPovider>
            <ModalProvider />
            <Sidebar songs={userSongs}>{children}</Sidebar>
            <Plyer />
          </UserPovider>
        </SupabaseProvider>
      </body>
    </html>
  );
}
