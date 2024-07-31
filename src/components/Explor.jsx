'use client'
import React from 'react';
import { Card, CardContent, CardMedia, Typography, Box, Container, Grid, Button } from '@mui/material';
import { styled } from '@mui/system';

const HoverCard = styled(Card)(({ theme }) => ({
  cursor:'pointer',
  position: 'relative',
  transition: 'all 0.3s ease',
  '&:hover': {
    boxShadow: '0 1px 5px #204ECF',
    '& .hoverTitle': {
      color: '#204ECF',
    },
    '& .hoverOverlay': {
      opacity: -0.1,
    },
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: theme.palette.primary.main,
  opacity: 0,
  transition: 'opacity 0.3s ease',
  zIndex: 1,
}));

const OverlappingImage = styled(CardMedia)({
  position: 'absolute',
  top: '170px',
  left: '35px',
  width: '80px',
  height: '80px',
  zIndex: 2,
});
const OverlappingImage1 = styled(CardMedia)({
  position: 'absolute',
  top: '110px',
  left: '25px',
  width: '80px',
  height: '80px',
  zIndex: 2,
});

const Explore = () => {
  return (
    <Container maxWidth={false} sx={{width: '1250px', maxWidth: '100%', marginTop:'10px'}}>
      <Typography mt={8} align='center' fontSize='40px'>Explore Trending Toptal Publications</Typography>
      <Grid mt={1} spacing={4} sx={{cursor:'pointer'}} container>
        <Grid item md={6} sm={12} xs={12}>
          <HoverCard>
            <Overlay className="hoverOverlay" />
            <CardMedia
              component="img"
              width='100%'
              height="200px"
              image="/explore/explore.avif"
              alt="Main Image"
            />
            <OverlappingImage
              sx={{clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)'}}
              component="img"
              image="/explore/explore1.avif"
              alt="Profile Image"
            />
            <CardContent sx={{padding:'34px'}}>
              <Typography mt={4} color='royalblue' letterSpacing='1px' variant="caption" display="block">
                FINANCE › FINANCE PROCESSES
              </Typography>
              <Typography variant="h5" fontWeight={600} component="div" className="hoverTitle">
                Exploring the Post-crash Cryptocurrency Market: Blockchain, Regulations, and Beyond
              </Typography>
              <Typography mt={3} variant="body2" color="text.secondary">
                By Jeffrey Mazer
              </Typography>
              <Typography fontSize='16px' mt={4} color="text.secondary">
                The 2022 crash shook the cryptocurrency market to its core, but investors are still buying digital coins. How does crypto work, and what does the future hold for it?
              </Typography>
              <Typography mt={21} variant="body2" color="text.secondary">
                17 MINUTE READ
              </Typography>
            </CardContent>
          </HoverCard>
        </Grid>


        <Grid item md={6}>
        <Grid container spacing={4}>
         <Grid item md={6}>
         <HoverCard>
            <Overlay className="hoverOverlay" />
            <CardMedia
              component="img"
              width='100%'
              height="auto"
              image="/explore/explore2.avif"
              alt="Main Image"
            />
            <OverlappingImage1
              sx={{clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)'}}
              component="img"
              image="/explore/explore3.avif"
              alt="Profile Image"
            />
            <CardContent sx={{padding:'24px'}}>
              <Typography mt={5} color='royalblue' letterSpacing='1px' variant="caption" display="block">
                FINANCE › Revenue and Growth
              </Typography>
              <Typography fontSize='17px' fontWeight={600} component="div" className="hoverTitle"> 
                  IT Integration in Mergers and Acquisitions: Structuring Synergy
              </Typography>
              <Typography mt={2} variant="body2" color="text.secondary">
                By <span style={{fontWeight:'600'}}>John S. Doss</span> 
              </Typography>
            </CardContent>
          </HoverCard>
         </Grid>
         <Grid item md={6}>
         <HoverCard>
            <Overlay className="hoverOverlay" />
            <CardMedia
              component="img"
              width='100%'
              height="auto"
              image="/explore/explore4.avif"
              alt="Main Image"
            />
            <OverlappingImage1
              sx={{clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)'}}
              component="img"
              image="/explore/explore5.avif"
              alt="Profile Image"
            />
            <CardContent sx={{padding:'24px'}}>
              <Typography mt={5} color='royalblue' letterSpacing='1px' variant="caption" display="block">
                FINANCE › Revenue and Growth
              </Typography>
              <Typography fontSize='17px' fontWeight={600} component="div" className="hoverTitle"> 
                  IT Integration in Mergers and Acquisitions: Structuring Synergy
              </Typography>
              <Typography mt={2} variant="body2" color="text.secondary">
                By <span style={{fontWeight:'600'}}>Jake Medof</span> 
              </Typography>
            </CardContent>
          </HoverCard>
         </Grid>
         <Grid item md={6}>
         <HoverCard>
            <Overlay className="hoverOverlay" />
            <CardMedia
              component="img"
              width='100%'
              height="auto"
              image="/explore/explore6.avif"
              alt="Main Image"
            />
            <OverlappingImage1
              sx={{clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)'}}
              component="img"
              image="/explore/explore7.avif"
              alt="Profile Image"
            />
            <CardContent sx={{padding:'24px'}}>
              <Typography mt={5} color='royalblue' letterSpacing='1px' variant="caption" display="block">
                ENGINEERING › TECHNOLOGY
              </Typography>
              <Typography fontSize='17px' fontWeight={600} component="div" className="hoverTitle"> 
                  Using an LLM API As an  Python Developer
              </Typography>
              <Typography mt={3} variant="body2" color="text.secondary">
                By <span style={{fontWeight:'600'}}>Tarek Mohammed Mehrez</span> 
              </Typography>
            </CardContent>
          </HoverCard>
         </Grid>
         <Grid item md={6}>
         <HoverCard>
            <Overlay className="hoverOverlay" />
            <CardMedia
              component="img"
              width='100%'
              height="auto"
              image="/explore/explore8.avif"
              alt="Main Image"
            />
            <OverlappingImage1
              sx={{clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)'}}
              component="img"
              image="/explore/explore9.avif"
              alt="Profile Image"
            />
            <CardContent sx={{padding:'24px'}}>
              <Typography mt={5} color='royalblue' letterSpacing='1px' variant="caption" display="block">
                PROJECTS › Tips and Tools
              </Typography>
              <Typography fontSize='17px' fontWeight={600} component="div" className="hoverTitle"> 
              How to Use ChatGPT for Project Management
              </Typography>
              <Typography mt={3} variant="body2" color="text.secondary">
                By <span style={{fontWeight:'600'}}>Anna D. Lukasiak</span> 
              </Typography>
            </CardContent>
          </HoverCard>
         </Grid>

          </Grid>
        </Grid>
        
      </Grid>
      <Box align='center' mt={8}>
        <Box px={3} py={1} sx={{ cursor:'pointer', '&:hover':{color:'royalblue'}, border:'1px solid gray', borderRadius:'4px', display:'inline-block', fontSize:'14px', fontWeight:'600'}}>Read More Thought Leadership</Box>
      </Box>
    </Container>
  );
};

export default Explore;
