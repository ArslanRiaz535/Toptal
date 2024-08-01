'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import EastIcon from '@mui/icons-material/East';

function Talent() {
  return (
    <>
      <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%', marginTop: '50px' }}>
        <Box align='center'>
          <Typography fontSize='40px' fontWeight={600}>Leverage World-Class Talent</Typography>
          <Typography fontSize='15px' mt={1} color='rgb(132 136 142)'>We are the largest, globally-distributed network of top business, design, and technology talent, ready to tackle your most important initiatives.</Typography>
        </Box>

        <Grid container mt={7}>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(5)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Developers</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Seasoned software engineers, coders, and architects with expertise across hundreds of technologies.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Developers</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(9)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent1.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Desingers</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Expert UI, UX, Visual, and Interaction designers as well as a wide range of illustrators, animators, and more.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Developers</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(10)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent2.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Finance Expert</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Experts in financial modeling & valuation, startup funding, interim CFO work, and market sizing.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Developers</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(7)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent3.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Project Manager</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Digital and technical project managers, scrum masters, and more with expertise in numerous PM tools, frameworks, and styles.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Project Manager</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(9)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent4.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Product Manager</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Digital product managers, scrum product owners with expertise like banking, healthcare, ecommerce, and more.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Product Manager</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
          <Grid item md={4} sm={6} xs={12}>
            <Box 
              bgcolor='rgb(235 236 237)'
              sx={{ 
                borderRight:'.5px solid #D1D6E2',
                borderBlockEnd:'.5px solid #D1D6E2',
                cursor: 'pointer', 
                position: 'relative',
                '&:hover': { 
                  backgroundColor: '#204ECF', 
                  color: 'white',
                  '.hover-box': { 
                    opacity: 1, 
                    visibility: 'visible' 
                  },
                  '.image-container img': {
                    stroke:'white',
                    fill:'white',
                    color:'white',
                    backgroundColor:'inherit',
                    filter: 'invert(0) brightness(9)' // Inverts the color and increases brightness
                  }
                },
              }} 
              p={5}
            >
              <Box className='image-container'>
                <img src='/Talent/talent5.svg' alt="Talent" />
              </Box>
              <Typography mt={2} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Marketing Expert</Typography>
              <Typography mt={4} sx={{ fontSize: '15px' ,letterSpacing:'0.5px' }}>Experts in digital marketing, growth  creation, market execution, social media marketing, and more.</Typography>
              <Box 
                className='hover-box'
                mt={2} 
                display='flex' 
                sx={{ 
                  opacity: 0, 
                  visibility: 'hidden', 
                  alignItems: 'center', 
                  justifyContent: 'space-between',
                }}
              >
                <Typography>View Marketing Expert</Typography>
                <EastIcon fontSize='small'/>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Talent;
