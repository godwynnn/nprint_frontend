import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";
import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import 'tailwindcss'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


config.autoAddCss = false
const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Nprint",
  description: "3D-Dimensional printing firm",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={inter.className}>
          <Navbar/>
        {children}
        
      </body>
    </html>
  );
}
