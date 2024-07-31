'use client';
import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Hiring() {
  return (
    <Box bgcolor='rgb(252 252 252)' mt={14}>
      <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%' }}>
        <Typography fontSize='40px' align="center" fontWeight="500" gutterBottom>
          Hiring Made Easy
        </Typography>
        <Grid container mt={13} justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" position="relative">
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' },
                  width: '65px',
                  height: '65px',
                  lineHeight: '65px',
                  borderRadius: '50%',
                  border: '1px solid #204ED5',
                  color: '#204ED5',
                  fontSize: '27px',
                  fontWeight: '400',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                1
              </Box>
              <Typography mt={2} fontSize='19px' fontWeight="500">
                Talk to One of Our Industry Experts
              </Typography>
              <Typography mt={2} px={2} fontSize='15px' color='rgb(132 136 142)'>
                An expert on our team will work with you to understand your goals, technical needs, and team dynamics.
              </Typography>
              <Box
                component="span"
                className="line"
                sx={{
                  position: 'absolute',
                  left: 'calc(49% + 34px)',
                  top: '32px',
                  height: '1px',
                  width: '0',
                  backgroundColor: '#204ED5',
                  zIndex: 1,
                  animation: 'expandLine 3s forwards',
                  display: { xs: 'none', sm: 'none', md:'block' },
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: '15px',
                    height: '15px',
                    borderTop: '1px solid #204ED5',
                    borderRight: '1px solid #204ED5',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    top: '-7px',
                    right: '-1px',
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" position="relative">
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block' },
                  width: '65px',
                  height: '65px',
                  lineHeight: '65px',
                  borderRadius: '50%',
                  border: '1px solid #204ED5',
                  color: '#204ED5',
                  fontSize: '27px',
                  fontWeight: '400',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                2
              </Box>
              <Typography mt={2} fontSize='19px'>
                Work With Hand-Selected Talent
              </Typography>
              <Typography mt={2} px={2} fontSize='15px' color='rgb(132 136 142)'>
                Within days, we'll introduce you to the right talent for your project. Average time to match is under 24 hours.
              </Typography>
              <Box
                component="span"
                className="line"
                sx={{
                  position: 'absolute',
                  left: 'calc(49% + 36px)',
                  top: '32px',
                  height: '1px',
                  width: '0',
                  backgroundColor: '#204ED5',
                  zIndex: 1,
                  animation: 'expandLine 3s 3s forwards',
                  display: { xs: 'none', sm: 'none', md:'block' },
                  '&:after': {
                    content: '""',
                    display: 'block',
                    width: '15px',
                    height: '15px',
                    borderTop: '1px solid #204ED5',
                    borderRight: '1px solid #204ED5',
                    transform: 'rotate(45deg)',
                    position: 'absolute',
                    top: '-7px',
                    right: '-1px',
                  },
                }}
              />
            </Box>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Box textAlign="center" position="relative">
              <Box
                component="span"
                sx={{
                  display: { xs: 'none', sm: 'inline-block', },
                  width: '65px',
                  height: '65px',
                  lineHeight: '65px',
                  borderRadius: '50%',
                  border: '1px solid #204ED5',
                  color: '#204ED5',
                  fontSize: '27px',
                  fontWeight: '400',
                  position: 'relative',
                  zIndex: 2,
                }}
              >
                3
              </Box>
              <Typography mt={2} fontSize='19px'>
                The Right Fit, Guaranteed
              </Typography>
              <Typography px={2} fontSize='15px' mt={2} color='rgb(132 136 142)'>
                Work with your new team member trial basis (pay only if satisfied), ensuring you the right people for the job.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
      <style jsx>{`
        @keyframes expandLine {
          0% {
            width: 0;
          }
          100% {
            width: calc(100% - 86px);
          }
        }
      `}</style>
    </Box>
  );
}

export default Hiring;
