import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/header/header';
import Footer from '@/components/footer/footer';
import HomeHorizontContent from '@/components/homepage_components/hompage_horizont_content/homepage_horizont_content';
import { useState } from 'react';
import SuggestItem from '@/components/homepage_components/homepage_main_content/homepagde_main_content_item/homepage_main_suggest_item/suggest_item';
import HomePageMainOthesItem from '@/components/homepage_components/homepage_main_content/homepagde_main_content_item/homepage_main_others_item/others_item';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'MyBlog',
    description: 'MyBlog application',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Header />
                <HomeHorizontContent />
                <HomePageMainOthesItem />
                {children}
                <Footer />
            </body>
        </html>
    );
}
