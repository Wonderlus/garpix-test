import ReduxProvider from "@/store/provider";
import "./globals.scss";
import type { Metadata } from "next";

import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";

export const metadata: Metadata = {
    title: "Sber Thanks",
    description: "Sber Thanks",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ReduxProvider>
                    <Header />
                    {children}
                    <Footer />
                </ReduxProvider>
            </body>
        </html>
    );
}
