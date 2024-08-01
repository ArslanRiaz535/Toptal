'use client';
import { Box, Button, Container,  Grid, Typography } from '@mui/material'
import React from 'react'
import VerifiedIcon from '@mui/icons-material/Verified';

function Discover() {
  return (
    <>
        <Box bgcolor='#FCFCFC' mt={4}>
            <Container maxWidth={false} sx={{width: '1250px', maxWidth: '100%', marginTop:'10px'}}>
             <Grid container spacing={2}>
                <Grid item md={3} sm={6} xs={12}>
              
               <Box padding={2}  sx={{  cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Discover/discovere.jpg' alt="" width="100%" height="auto" />
                  </Box>
                  
                  <Typography letterSpacing="1px" mt={1} color="#204ED5" fontSize="15px" fontWeight="600">Casey Arrington</Typography>
                  
                  <Box display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon sx={{fontSize:'19px'}} />
                    <Typography fontSize="14px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                    <Typography variant='caption' ml={0.5}>in Engineering</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" ><path fill="#204ECF" fillRule="evenodd" d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z" clipRule="evenodd"></path></svg>
                    <Typography ml={1}  fontSize="13px" color="rgb(69 80 101)" >Javascript Developer</Typography>
                  </Box>

                  <Typography mt={2} fontSize="11px" color="rgb(69 80 101)" >EXPERTIES</Typography>

                  <Box display='flex' mt={1} gap={1}>
                    <Box border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >DevOps</Typography>
                    </Box>
                    <Box border='1px solid gray' borderRadius='12px' px={1.5} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Git</Typography>
                    </Box>
                    <Box  border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography fontSize="12px" color="gray" >Node.js</Typography>
                    </Box>
                  </Box>

                  <Box mt={1} display='inline-block' border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Node.js</Typography>
                    </Box>

                  <Typography mt={2} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px'>PREVIOUSLY AT</Typography>
                  <Box display="flex" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Discover/shopify.svg' alt="" width="45%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', top: 244, left: 14, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '18px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                
                </Grid>


                <Grid item md={3} sm={6} xs={12}>
                <Box >
               <Box padding={2}  sx={{  cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Discover/discovere1.jpg' alt="" width="100%" height="auto" />
                  </Box>
                  
                  <Typography letterSpacing="1px" mt={1} color="#204ED5" fontSize="15px" fontWeight="600">Justin Michela</Typography>
                  
                  <Box display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon sx={{fontSize:'19px'}} />
                    <Typography fontSize="14px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                    <Typography variant='caption' ml={0.5}>in Engineering</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" ><path fill="#204ECF" fillRule="evenodd" d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z" clipRule="evenodd"></path></svg>
                    <Typography ml={1}  fontSize="13px" color="rgb(69 80 101)" >Java Developer</Typography>
                  </Box>

                  <Typography mt={2} fontSize="11px" color="rgb(69 80 101)" >EXPERTIES</Typography>

                  <Box display='flex' mt={1} gap={1}>
                    <Box border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >SQL</Typography>
                    </Box>
                    <Box border='1px solid gray' borderRadius='12px' px={1.5} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Java</Typography>
                    </Box>
                    <Box  border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography fontSize="12px" color="gray" >Python</Typography>
                    </Box>
                  </Box>

                  <Box mt={1} display='inline-block' border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Agile Development</Typography>
                    </Box>

                  <Typography mt={1.4} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px'>PREVIOUSLY AT</Typography>
                  <Box display="flex" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Discover/google.svg' alt="" width="45%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', top: 245, left: 14, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '18px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                </Box>
                </Grid>




                <Grid item md={3} sm={6} xs={12}>
                <Box >
               <Box padding={2}  sx={{  cursor: 'pointer', position: 'relative', boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.32)' }}>
                  
                  <Box sx={{ position: 'relative', overflow: 'hidden', clipPath: 'polygon(50% 0%, 100% 0, 100% 100%, 18% 100%, 0 81%, 0 0)' }}>
                    <img src='/Discover/discovere2.jpg' alt="" width="100%" height="auto" />
                  </Box>
                  
                  <Typography letterSpacing="1px" mt={1.5} color="#204ED5" fontSize="15px" fontWeight="600">Frédérique Mittelstaedt</Typography>
                  
                  <Box display="flex" mt={0.5} alignItems="center" color="#05947C">
                    <VerifiedIcon sx={{fontSize:'19px'}} />
                    <Typography fontSize="14px" ml={0.5} fontWeight={600}>Verified Expert</Typography>
                    <Typography variant='caption' ml={0.5}>in Engineering</Typography>
                  </Box>
                  <Box display="flex" alignItems="center" mt={1}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="none" ><path fill="#204ECF" fillRule="evenodd" d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z" clipRule="evenodd"></path></svg>
                    <Typography ml={1}  fontSize="13px" color="rgb(69 80 101)" >Python Developer</Typography>
                  </Box>

                  <Typography mt={2} fontSize="11px" color="rgb(69 80 101)" >EXPERTIES</Typography>

                  <Box display='flex' mt={1} gap={1}>
                    <Box border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Full stack</Typography>
                    </Box>
                    <Box border='1px solid gray' borderRadius='12px' px={1.5} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >React.js</Typography>
                    </Box>
                    <Box  border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography fontSize="12px" color="gray" >Node.js</Typography>
                    </Box>
                  </Box>

                  <Box mt={1} display='inline-block' border='1px solid gray' borderRadius='12px' px={2} sx={{'&:hover':{backgroundColor:'rgb(234, 240, 252)'}}} >
                        <Typography  fontSize="12px" color="gray" >Python</Typography>
                    </Box>

                  <Typography mt={2} fontSize="11px" color="rgb(69 80 101)" lineHeight='19px'>PREVIOUSLY AT</Typography>
                  <Box display="flex" mt={1} sx={{ position: 'relative', }}>
                    <img src='/Discover/exon.svg' alt="" width="70%" height="auto" />
                  </Box>
                  <Box sx={{ position: 'absolute', top: 240, left: 14, padding: '8px', zIndex: 1 }}>
                    <svg fill="#204ED5" viewBox="0 0 14 20" xmlns="http://www.w3.org/2000/svg" style={{ height: '18px' }}>
                      <path fillRule="evenodd" clipRule="evenodd" d="M5.31434 0L13.6348 8.63889L7.39445 15.0694L10.2529 18.0278L8.34728 20L0 11.3333L6.21349 4.91667L3.38186 1.98611L5.31434 0ZM5.50223 12.875C5.56933 12.8889 5.62301 12.8889 5.67669 12.875C5.73037 12.8611 5.78405 12.8333 5.87799 12.7222L9.42088 9.05556C9.52824 8.95833 9.55508 8.90278 9.5685 8.84722C9.58192 8.77778 9.58192 8.72222 9.5685 8.66667C9.55508 8.61111 9.51482 8.55556 9.42088 8.45833L8.2936 7.29167C8.19966 7.18056 8.14598 7.15278 8.0923 7.13889C8.0252 7.125 7.97152 7.125 7.91784 7.13889C7.86416 7.15278 7.81048 7.19444 7.71654 7.29167L4.17364 10.9583C4.06628 11.0556 4.03944 11.1111 4.02602 11.1667C4.0126 11.2361 4.0126 11.2917 4.02602 11.3472C4.03944 11.4028 4.0797 11.4583 4.17364 11.5556L5.30092 12.7222C5.39487 12.8333 5.44854 12.8611 5.50223 12.875Z" fill="#204ED5"></path>
                    </svg>
                  </Box>
                </Box>
                </Box>
                </Grid>


                <Grid item xs={12} sm={6} md={3}>
                 <Box
            sx={{
              background: 'linear-gradient(to right, #030a42, #0f256e)',
              color: 'white',
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              position: 'relative',
              height: '545px',
            }}
          >
            <Box overflow='hidden' sx={{ zIndex: 1 }}>
              <img src='/Discover/top.svg' width='100%' height='100%'/>
            </Box>
            <Typography variant="h6" component="div" align="center" sx={{ position: 'absolute', zIndex: 2, top: '55%', transform: 'translateY(-50%)' }}>
            Discover 20,000+ More 
            <Typography variant="subtitle1" component="div">Talent</Typography>
            <Typography component="div">in the Toptal Network</Typography>
            <Button 
                variant="contained"
                sx={{
                  marginTop:'17px',
                  textTransform: 'none',
                  padding: '6px 54px',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(5, 198, 124)',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#03B080',
                  },
                }}
              >
                Discover Toptal Talent
              </Button>
                            
            </Typography>
            <Box position='absolute' top={170} >
            <img src='/Discover/toptal.svg' width='50px' height='50px'/>

            </Box>
          </Box>
        </Grid>
             </Grid>  
            </Container>
        </Box>
    </>
  )
}

export default Discover