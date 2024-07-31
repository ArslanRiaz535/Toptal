"use client";
import React, { useState, useEffect } from 'react';
import { Box, Container, Grid, Typography, Button } from '@mui/material';
import VerifiedIcon from '@mui/icons-material/Verified';

const images = [
  '/HeroSection/images1.avif',
  '/HeroSection/images2.avif',
  '/HeroSection/images3.avif',
  '/HeroSection/images4.avif',
  '/HeroSection/images5.avif',
  '/HeroSection/images6.avif',
  '/HeroSection/images7.avif',
  '/HeroSection/images8.avif',
  '/HeroSection/images9.avif',
];

const boxMessages = [
  {
    name: 'Vladimir Mitrovic',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Engineering',
    description: 'C# Developer',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/apple.svg'
  },
  {
    name: 'Emily Dubow',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Design',
    description: 'Designer',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/samsung.svg'
  },
  {
    name: 'Jonah Elbaz',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Engineering',
    description: 'Javascript Developer',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/facebook.svg'
  },
  {
    name: 'Matthew Warkentin',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Engineering',
    description: 'Python Developer',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/cornell.svg'
  },
  {
    name: 'Adan Perez',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Product Management',
    description: 'Product Manager',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/AT.svg'
  },
  {
    name: 'Anuar Heberlein',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Finance',
    description: 'Management Consulting Expert',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/bain.svg'
  },
  {
    name: 'Carole Crawford, CFA',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Finance',
    description: 'Finance Expert',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/morgan.svg'
  },
  {
    name: 'Anna D. Lukasiak',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Project Management',
    description: 'Project Manager',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/goldman.svg'
  },
  {
    name: 'Danielle Thompson',
    img: '/HeroSection/card.png',
    text: 'Verified Expert in Design',
    description: 'Designer',
    description2: 'PREVIOUSLY AT',
    svg: './HeroSection/blackboard.svg'
  },
];

const HeroSection = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [showBox, setShowBox] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowBox(false);
      setTimeout(() => {
        setCurrentImage((prevImage) => (prevImage + 1) % images.length);
        setShowBox(true);
      }, 1000);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Box 
      bgcolor='#D1D6E2'
      sx={{
    boxShadow: '0px -43px 23px -14px rgba(255, 255, 255, 0.75) inset',
    WebkitBoxShadow: '0px -43px 23px -14px rgba(255, 255, 255, 0.75) inset',
    MozBoxShadow: '0px -43px 23px -14px rgba(255, 255, 255, 0.75) inset',
  }}
    >
      <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%', marginTop: '20px' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={5}>
            <Box sx={{ padding: { xs: '16px', md: '0' } }}>
              <Typography mt={2}
                fontSize='43px'
                fontWeight='500'
                lineHeight={1.2}
                sx={{ fontSize: { xs: '35px', md: '43px' }, padding: { xs: '0 16px', md: '0' } }}
              >
                Hire the <Box component="span" sx={{
                  cursor: 'pointer',
                  position: 'relative',
                  display: 'inline-block',
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    width: '100%',
                    height: '2px',
                    backgroundColor: 'black',
                    bottom: '3px',
                    left: 0,
                    transition: 'all 0.3s',
                  },
                  '&:hover:after': {
                    width: '0%',
                  },
                }}>Top 3%</Box> of Freelance Talent<span style={{ fontSize: '17px', paddingBottom: '18px', position: 'absolute' }}>®</span>
              </Typography>
              <Typography maxWidth={700}
                fontSize='15px'
                letterSpacing={0.3}
                mt={2}
                color='rgb(69 80 101)'
                sx={{ padding: { xs: '0 16px', md: '0' } }}
              >
                Toptal is an exclusive network of the top freelance software developers, designers, marketing experts, finance experts, product managers, and project managers in the world. Top companies hire Toptal freelancers for their most important projects.
              </Typography>
              <Button
                variant="contained"
                sx={{
                  marginTop: '28px',
                  fontSize: '18px',
                  fontWeight: '600',
                  textTransform: 'none',
                  padding: '10px 68px',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(5, 198, 124)',
                  width: { xs: '100%', md: 'auto' },
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#03B080',
                  },
                }}
              >
                Hire Top Talent
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} sx={{ display: { xs: 'none', md: 'block' } }}>
            <Box
              sx={{
                position: 'relative',
                width: '100%',
                height: 'auto',
                overflow: 'hidden',
                borderRadius: '8px',
                
              }}
            >
              <img
                src={images[currentImage]}
                alt="Hero Image"
                style={{ width: '90%', height: '450px', transform: 'translate(-100px, -15px)',
                  boxShadow: '0px -43px 23px -14px rgba(255, 255, 255, 0.75) inset'

                 }}
              />
              <Box
                key={currentImage}
                sx={{
                  position: 'absolute',
                  top: '22%',
                  right: '0%',
                  width: '260px',
                  height: '270px',
                  backgroundColor: 'white',
                  clipPath: 'polygon(0 0, 51% 0, 100% 0, 100% 100%, 53% 100%, 10% 100%, 0 89%, 0 23%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                  opacity: showBox ? 1 : 0,
                  transform: showBox ? 'scale(1)' : 'scale(0.95)',
                  transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
                }}
              >
                <Box textAlign="center">
                  <img
                    src={boxMessages[currentImage].img}
                    alt={`Message ${currentImage + 1}`}
                    style={{ width: '80%', height: 'auto' }}
                  />
                  <Typography ml={2} color='#204ECF' fontWeight={700} fontSize='12px' align='start'>
                    {boxMessages[currentImage].name}
                  </Typography>
                  <Typography ml={2} display='flex' justifyContent='start' alignItems='center' color='#03B080' fontSize='12px'>
                    <VerifiedIcon fontSize='7px' sx={{ color: '#03B080' }} />
                    {boxMessages[currentImage].text}
                  </Typography>
                  <Typography ml={2} fontSize='12px' align='start' color='gray'>
                    {boxMessages[currentImage].description}
                  </Typography>
                  <Typography ml={2} mt={2} fontSize='11px' align='start' color='gray'>
                    {boxMessages[currentImage].description2}
                  </Typography>

                  <Box mt={1}>
                    <img
                      src={boxMessages[currentImage].svg}
                      style={{ width: '100%', height: '37px' }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
