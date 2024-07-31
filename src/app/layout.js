// app/layout.js
import * as React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import './globals.css';
import theme from './theme';
import NavBar from '@/components/navbar/NavBar';
import HeroSection from '@/components/HeroSection';
import Brands from '@/components/Brands';
import Carousel from '@/components/Carousel';
import Talent from '@/components/Talent';
import Team from '@/components/Team';
import Hiring from '@/components/Hiring';
import Network from '@/components/Network';
import Discover from '@/components/Discover';
import VideoSection from '@/components/VideoSection';
import Collaboration from '@/components/Collaboration';
import Market from '@/components/Market';
import OurClient from '@/components/OurClient';
import Explor from '@/components/Explor';
import AccordionGrid from '@/components/AccordionGrid';
import Footer from '@/components/Footer';


export const metadata = {
  title: 'Toptal - Hire Freelance Talent from the Top 3%',
  description: 'A Next.js project with Material UI and custom fonts',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/font-proxima-nova@1.0.1/style.min.css"></link>
    </head>
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <NavBar/>
          <HeroSection/>
          <Brands/>
          <Carousel/>
          <Talent/>
          <Team/>
          <Hiring/>
          <Network/>
          <Discover/>
          <VideoSection/>
          <Collaboration/>
          <Market/>
          <OurClient/>
          <Explor/>
          <AccordionGrid/>
          <Footer/>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
