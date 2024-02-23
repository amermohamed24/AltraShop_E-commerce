import React from 'react';
import Navbar from '@/componants/Navbar/Navbar';
import './globals.css'
import {Montserrat} from "next/font/google"
import Footer from '../componants/Footer/Footer';
import { ThemeProvider } from '@/Context/Context_theme';



const bodyFont=Montserrat({subsets:['latin']})


export const metadata = {
  title: {
    default:"AltraShop | Home",
    tempelete:" %s | AltraShop App"
  },
  description: "AltraShop Online",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={bodyFont.className}>
        <ThemeProvider>
          <div className="container">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>  
      </body>
    </html>
  );
}
