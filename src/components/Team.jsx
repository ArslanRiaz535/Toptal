'use client';
import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';



function Team() {
  return (
    <>
        <Box bgcolor='rgb(252 252 252 )' pb='150px'>
            <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%', marginTop: '50px' }}>
              <Grid container>
               <Grid item md={6}  sm={12} xs={12}>
                 <Box mt={13}>
                    <Typography fontSize='40px' fontWeight={600}>Build Amazing Teams,</Typography>
                    <Typography fontSize='40px' fontWeight={600}>On Demand</Typography>
                    <Typography fontSize='15px' letterSpacing='0.4px'  color='rgb(132 136 142)'>Quickly assemble the teams you need, exactly when you need them.</Typography>
                 </Box>
                 <Grid container spacing={8}>
                    <Grid mt={9}  item md={6} sm={6} xs={12}>
                      <Box >
                        <Box >
                          <img src='/Team/team1.svg' alt="Talent" />
                        </Box>
                         <Typography mt={2} fontWeight={600} sx={{ fontSize: '20px', letterSpacing: '0.5px' }}>Hire Quickly</Typography>
                         <Typography mt={1} color='rgb(132 136 142)' sx={{ fontSize: '15px' }}>Hire in under 48 hours. Scale up or down, no strings attached. We offer flexible engagements from hourly to full-time.</Typography>
                        </Box>
                    </Grid>
                    <Grid mt={9} item md={6} sm={6} xs={12}>
                      <Box >
                        <Box >
                          <img src='/Team/team2.svg' alt="Talent" />
                        </Box>
                         <Typography mt={2} fontWeight={600} sx={{ fontSize: '20px', letterSpacing: '0.5px' }}>The Top 3%</Typography>
                         <Typography mt={1} color='rgb(132 136 142)' sx={{ fontSize: '15px' }}>Every applicant to the Toptal network is rigorously tested and vetted. Our highly selective process leads to a 98% trial-to-hire success rate.</Typography>
                        </Box>
                    </Grid>
                    <Grid mt={3} item md={6} sm={6} xs={12}>
                      <Box >
                        <Box >
                          <img src='/Team/team3.svg' alt="Talent" />
                        </Box>
                         <Typography mt={2} fontWeight={600} sx={{ fontSize: '19px', letterSpacing: '0.5px' }}>Leading the Future of Work</Typography>
                         <Typography mt={1} color='rgb(132 136 142)' sx={{ fontSize: '15px' }}>Our network is ready for tomorrow's business challenges by embracing advanced and specialized skills including blockchain and AI.</Typography>
                        </Box>
                    </Grid>
                    <Grid mt={3} item md={6} sm={6} xs={12}>
                      <Box >
                        <Box >
                          <img src='/Team/team4.svg' alt="Talent" />
                        </Box>
                         <Typography mt={1.5} fontWeight={600} sx={{ fontSize: '20px', letterSpacing: '0.5px' }}>A Level Above</Typography>
                         <Typography mt={1} color='rgb(132 136 142)' sx={{ fontSize: '15px' }}>Every single freelancer in our global network embodies the highest levels of integrity, professionalism, and communication.</Typography>
                        </Box>
                    </Grid>
                 </Grid>
               </Grid>
               <Grid item md={6} sx={{display:{md:'block', xs:'none' , sm:'none'}}} position='relative'>
               <Box position='absolute' left='80px' top='110px' >
               <Box width={230} sx={{ zIndex:'200' , pb: '19px', cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Team/duplicate.png' alt="" width="100%" height="auto" />
                  </Box>
                  <Typography marginLeft={2.5} letterSpacing="1px" mt={1} color="#204ED5" fontSize="14px" fontWeight="600">Casey Arrington</Typography>
                  <Box marginLeft={2} display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon fontSize="11px" />
                    <Typography fontSize="12px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                  </Box>
                  <Typography ml={4.5} fontSize="12px" color="#05947C">in Product Management</Typography>
                  <Box display="flex" alignItems="center" mt={1} marginLeft={2}>
                  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
     <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path>
     <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path>
     <path d="m0 0h30v30h-30z" fill="none"></path>
   </svg> 
                    <Typography marginLeft={1} fontSize="11px" color="rgb(69 80 101)" letterSpacing="1px">Product Manager</Typography>
                  </Box>
                  <Typography marginLeft={3} mt={2} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px' letterSpacing="1px">PREVIOUSLY AT</Typography>
                  <Box display="flex" justifyContent="center" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Team/space.svg' alt="" width="90%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 180, left: -6, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '14.4px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                </Box>
               <Box position='absolute' left='60px' bottom='-100px'  >
               <Box  width={230} sx={{zIndex:'50' ,  pb: '19px', cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Team/images15.jpg' alt="" width="100%" height="auto" />
                  </Box>
                  <Typography marginLeft={2.5} letterSpacing="1px" mt={1} color="#204ED5" fontSize="14px" fontWeight="600">Martins Kozlovskis</Typography>
                  <Box marginLeft={2} display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon fontSize="11px" />
                    <Typography fontSize="12px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                  </Box>
                  <Typography ml={4.5} fontSize="12px" color="#05947C">in Product Management</Typography>
                  <Box display="flex" alignItems="center" mt={1} marginLeft={2}>
                  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
     <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path>
     <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path>
     <path d="m0 0h30v30h-30z" fill="none"></path>
   </svg> 
                    <Typography marginLeft={1} fontSize="11px" color="rgb(69 80 101)" letterSpacing="1px">Product Manager</Typography>
                  </Box>
                  <Typography marginLeft={3} mt={2} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px' letterSpacing="1px">PREVIOUSLY AT</Typography>
                  <Box display="flex" justifyContent="center" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Team/do.svg' alt="" width="70%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 180, left: -6, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '14.4px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                </Box>
               <Box position='absolute' right='40px' top='270px'>
               <Box width={230} sx={{  pb: '19px', cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Team/women.jpg' alt="" width="100%" height="auto" />
                  </Box>
                  <Typography marginLeft={2.5} letterSpacing="1px" mt={1} color="#204ED5" fontSize="14px" fontWeight="600">Carole Crawford, CFA</Typography>
                  <Box marginLeft={2} display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon fontSize="11px" />
                    <Typography fontSize="12px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                  </Box>
                  <Typography ml={4.5} fontSize="12px" color="#05947C">in Finance</Typography>
                  <Box display="flex" alignItems="center" mt={1} marginLeft={2}>
                  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
     <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#455065"></path>
     <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#455065"></path>
     <path d="m0 0h30v30h-30z" fill="none"></path>
   </svg> 
                    <Typography marginLeft={1} fontSize="11px" color="rgb(69 80 101)" letterSpacing="1px">Finance Expert</Typography>
                  </Box>
                  <Typography marginLeft={3} mt={2} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px' letterSpacing="1px">PREVIOUSLY AT</Typography>
                  <Box display="flex" justifyContent="center" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Team/morgan.svg' alt="" width="90%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', bottom: 180, left: -6, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '14.4px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                </Box>
               </Grid>
              </Grid>
            </Container>
        </Box>
    </>
  )
}

export default Team