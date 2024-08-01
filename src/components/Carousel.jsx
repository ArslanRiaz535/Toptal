'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Box, Container, Grid, Typography, IconButton, useMediaQuery } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const items = [
  { 
    imgSrc: '/Carousel/images (10).avif',
     name: 'Casey Arrington', 
     expertise:'In Product Management' , 
     role: 'Product Manager', 
     prevCompany: '/Carousel/space.svg' ,
     svg:   <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
     <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path>
     <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path>
     <path d="m0 0h30v30h-30z" fill="none"></path>
   </svg> 
    },
  { 
    imgSrc: '/Carousel/images (11).avif',
     name: 'Matthew Warkentin', 
     expertise:'In Engineering' , 
     role: 'Python Developer', 
     prevCompany: '/Carousel/cornell.svg' ,
     svg:   <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd"  d="M15.1021 1.12957L9.87051 23.1024L8.8977 22.8708L14.1293 0.897949L15.1021 1.12957ZM1.6551 12.0002L6.70851 5.93569L5.94026 5.29553L0.353516 12.0001L5.94015 18.7067L6.7085 18.0667L1.6551 12.0002ZM22.3535 12.0002L17.3001 18.0667L18.0685 18.7067L23.6551 12.0001L18.0683 5.29553L17.3001 5.93569L22.3535 12.0002Z" fill="#455065"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (12).avif',
     name: 'Carole Crawford, CFA', 
     expertise:'in Finance' , 
     role: 'Finance Expert', 
     prevCompany: '/Carousel/morgan.svg' ,
     svg:   <svg width="19" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M20 3H19V21H15V7H14V21H10V11H9V21H5V15H4V21H2V22H22V21H20V3Z" fill="#455065"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (13).avif',
     name: 'Vladimir Mitrovic', 
     expertise:'In Engineering' , 
     role: 'C# Developer', 
     prevCompany: '/Carousel/blackboard.svg' ,
     svg:   <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M15.1021 1.12957L9.87051 23.1024L8.8977 22.8708L14.1293 0.897949L15.1021 1.12957ZM1.6551 12.0002L6.70851 5.93569L5.94026 5.29553L0.353516 12.0001L5.94015 18.7067L6.7085 18.0667L1.6551 12.0002ZM22.3535 12.0002L17.3001 18.0667L18.0685 18.7067L23.6551 12.0001L18.0683 5.29553L17.3001 5.93569L22.3535 12.0002Z" fill="#455065"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (14).avif',
     name: 'Emily Dubow', 
     expertise:'In Design' , 
     role: 'UX/UI Designer', 
     prevCompany: '/Carousel/samsung.svg' ,
     svg:   <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.9463 12.9597C12.7008 12.9597 13.3125 12.348 13.3125 11.5935C13.3125 10.839 12.7008 10.2273 11.9463 10.2273C11.1918 10.2273 10.5801 10.839 10.5801 11.5935C10.5801 12.348 11.1918 12.9597 11.9463 12.9597Z" stroke="#455065"></path><path d="M11.9811 10.7506V2.03142L4.68555 12.4064C4.68555 12.4064 8.68172 15.8753 8.68172 19.5313V22M12.018 2L19.315 12.375C19.315 12.375 15.2819 15.8438 15.2819 19.4998V21.9686M14.9308 19.4247H8.72544" stroke="#455065" strokeLinecap="round" strokeLinejoin="round"></path></svg> 
    },
  { 
    imgSrc: '/Carousel/images (15).avif',
     name: 'Anna D. Lukasiak', 
     expertise:'In Product Management' , 
     role: 'Product Manager', 
     prevCompany: '/Carousel/sales.svg' ,
     svg:  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M17.375 9.46631L10.375 16.9338L6.875 13.2001" stroke="#455065"></path><path d="M5.875 2.15381V6.95381M18.125 2.15381V6.95381M2 21.4813V4.91881C2 4.71631 2.16625 4.55381 2.375 4.55381H21.625C21.8338 4.55381 22 4.71631 22 4.91881V21.4813C21.9995 21.5299 21.9894 21.578 21.9703 21.6227C21.9511 21.6674 21.9233 21.7079 21.8885 21.7419C21.8536 21.7758 21.8124 21.8025 21.7672 21.8204C21.722 21.8383 21.6736 21.8471 21.625 21.8463H2.375C2.16625 21.8463 2 21.6838 2 21.4813Z" stroke="#455065"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (16).avif',
     name: 'Adan Perez', 
     expertise:'In Product Management' , 
     role: 'Product Manager', 
     prevCompany: '/Carousel/bain.svg' ,
     svg:   <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18" ><path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path><path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path><path d="m0 0h30v30h-30z" fill="none"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (17).avif',
     name: 'Danielle Thompson', 
     expertise:'In Design' , 
     role: 'UX/UI Designer', 
     prevCompany: '/Carousel/morgan.svg' ,
     svg:    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" ><path d="M11.9463 12.9597C12.7008 12.9597 13.3125 12.348 13.3125 11.5935C13.3125 10.839 12.7008 10.2273 11.9463 10.2273C11.1918 10.2273 10.5801 10.839 10.5801 11.5935C10.5801 12.348 11.1918 12.9597 11.9463 12.9597Z" stroke="#455065"></path><path d="M11.9811 10.7506V2.03142L4.68555 12.4064C4.68555 12.4064 8.68172 15.8753 8.68172 19.5313V22M12.018 2L19.315 12.375C19.315 12.375 15.2819 15.8438 15.2819 19.4998V21.9686M14.9308 19.4247H8.72544" stroke="#455065" strokeLinecap="round" strokeLinejoin="round"></path></svg>
    },
  { 
    imgSrc: '/Carousel/images (18).avif',
     name: 'Casey Arrington', 
     expertise:'In Product Management' , 
     role: 'Product Manager', 
     prevCompany: '/Carousel/space.svg' ,
     svg:   <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
     <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path>
     <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path>
     <path d="m0 0h30v30h-30z" fill="none"></path>
   </svg> 
    },

];

function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isMediumScreen = useMediaQuery('(max-width:960px)');
  const itemsToShow = isSmallScreen ? 2 : isMediumScreen ? 4 : 6;
  const carouselRef = useRef(null);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => Math.min(prevIndex + 1, items.length - itemsToShow));
  };

  useEffect(() => {
    const scrollContainer = carouselRef.current;
    if (scrollContainer) {
      scrollContainer.scrollTo({
        left: currentIndex * (scrollContainer.clientWidth / itemsToShow),
        behavior: 'smooth',
      });
    }
  }, [currentIndex, itemsToShow]);

  return (
    <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%', marginTop: '30px' }}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <IconButton onClick={handlePrevClick} disabled={currentIndex === 0}>
          <ArrowBackIosNewIcon />
        </IconButton>
        <Box
          ref={carouselRef}
          sx={{
            overflowX: 'auto',
            display: 'flex',
            width: '100%',
            scrollBehavior: 'smooth',
            '&::-webkit-scrollbar': { display: 'none' }, // For Webkit browsers
            scrollbarWidth: 'none', // For Firefox
          }}
        >
          <Grid container  spacing={2} wrap="nowrap" sx={{ display: 'flex', flexDirection: 'row' }}>
            {items.map((item, index) => (
              <Grid item xs={6} sm={4} md={2} key={index}  sx={{ flex: '0 0 auto',  }}>
                <Box sx={{  pb: '19px', cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src={item.imgSrc} alt="" width="100%" height="auto" />
                  </Box>
                  <Typography marginLeft={3} letterSpacing="1px" mt={1} color="#204ED5" fontSize="12px" fontWeight="600">{item.name}</Typography>
                  <Box marginLeft={2} display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon fontSize="11px" />
                    <Typography fontSize="12px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                  </Box>
                  <Typography align="center" fontSize="12px" color="#05947C">{item.expertise}</Typography>
                  <Box display="flex" alignItems="center" mt={1} marginLeft={2}>
                    {item.svg}
                    <Typography marginLeft={1} fontSize="11px" color="rgb(69 80 101)" letterSpacing="1px">{item.role}</Typography>
                  </Box>
                  <Typography marginLeft={3} mt={2} fontSize="10px" color="rgb(69 80 101)" letterSpacing="1px">PREVIOUSLY AT</Typography>
                  <Box display="flex" justifyContent="center" mt={1} sx={{ position: 'relative', }}>
                    <img src={item.prevCompany} alt="" width="80%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 155, left: -6, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '14.4px' }}>
                      <path fillRule="evenodd"  d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
        <IconButton onClick={handleNextClick} disabled={currentIndex >= items.length - itemsToShow}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>
    </Container>
  );
}

export default Carousel;
