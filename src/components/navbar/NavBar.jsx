'use client';
import { Box, Button, Container, Link, Toolbar, Typography } from '@mui/material';
import React, { useState, useEffect } from 'react';
import MenuIcon from '@mui/icons-material/Menu';

const navLinks = {
  color: 'rgb(82, 82, 82)',
  fontSize: '14px',
  fontWeight: '500',
  position: 'relative', 
  '&:hover': {
    color: 'rgb(37, 37, 37)',
    '&::after': {
      content: '""',
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: -18, 
      height: '2px',
      backgroundColor: 'royalblue',
    },
  },
};

const navBtn = {
  padding: '3px 28px',
  borderRadius: '7px',
  color: 'black',
  '&:hover': {
    color: 'blue',
  },
};

function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Cleanup listener on component unmount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ 
      position: 'sticky', 
      top: '0', 
      zIndex: '900',
      transition: 'background-color 0.3s, box-shadow 0.3s', 
      backgroundColor: scrolled ? 'white' : '#D1D6E2', 
      boxShadow: scrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none',
    }}>
      <Box bgcolor={scrolled ? 'white' : '#D1D6E2'}>
        <Container 
          maxWidth={false}
          disableGutters
          sx={{
            padding: 0,
            maxWidth: { lg: '1250px', xs: '100%' },
            overflowX: 'hidden',
          }}
        >
          <Toolbar 
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
            }}
          >
            <Box display="flex" alignItems="center">
              <img
                src="NavBar/logo.png"
                alt="Logo"
                width="116px"
                height="32px"
                style={{ cursor: 'pointer' }}
              />
            </Box>

            <Box
              fontWeight="bold"
              sx={{
                justifyContent: 'center',
                alignItems: 'center',
                display: { xs: 'none', md: 'flex' },
                mr: { md: 'auto' },
                ml: { md: '37px' },
                pt: '2px',
                gap: 2,
              }}
            >
              <Link sx={navLinks} href="#" underline="none">
                Top 3%
              </Link>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  cursor: 'pointer',
                  '&:hover svg': {
                    transform: 'rotate(180deg)',
                    transition: 'transform 0.3s ease-in-out',
                  },
                }}
              >
                <Link sx={navLinks} href="#" underline="none">
                  Hire Talent
                </Link>
                <Box sx={{ cursor: 'pointer', marginTop: '-3px' }}>
                  <svg
                    style={{ marginTop: '10px' }}
                    xmlns="http://www.w3.org/2000/svg"
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="gray"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </Box>
              </Box>
              <Link sx={navLinks} href="#" underline="none">
                Capabilities
              </Link>
              <Link fontWeight={100} sx={navLinks} href="#" underline="none">
                Clients
              </Link>
              <Link sx={navLinks} href="#" underline="none">
                Blog
              </Link>
              <Link sx={navLinks} href="#" underline="none">
                About Us
              </Link>
            </Box>

            <Box
              sx={{
                display: { xs: 'none', md: 'flex' },
                gap: 2,
              }}
            >
              <Typography
                mt={1}
                fontSize="13px"
                sx={{ cursor: 'pointer', '&:hover': { color: 'royalblue' } }}
              >
                Apply as a Freelancer
              </Typography>
              <Button
                variant="contained"
                sx={{
                  textTransform: 'none',
                  padding: '6px 28px',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(5, 198, 124)',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#03B080',
                  },
                }}
              >
                Hire Top Talent
              </Button>
              <Typography
                mt={1}
                fontSize="13px"
                sx={{ cursor: 'pointer', '&:hover': { color: 'royalblue' } }}
              >
                Log In
              </Typography>
            </Box>
            <Box
              sx={{
                display: { md: 'none', xs: 'inline-block' },
              }}
            >
              <MenuIcon />
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </div>
  );
}

export default Header;
