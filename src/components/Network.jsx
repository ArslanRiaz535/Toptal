import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';

function Network() {
  return (
    <>
      <Box bgcolor='#FCFCFC'>
        <Container maxWidth={false} sx={{ width: '1250px', maxWidth: '100%', marginTop: '180px' }}>
          <Typography fontSize='40px' align='center'>Meet Talent in Our Network</Typography>
          
          <Grid 
            container  
            alignItems='center' 
            mt={9} 
            borderTop='1px solid #D8D9DC' 
            borderBottom='1px solid #D8D9DC' 
            p={2}
            sx={{
              display: {
                xs: 'none', // Hide on extra small screens
                sm: 'none', // Hide on small screens
                md: 'flex', // Show on medium and larger screens
              }
            }}
          >
            <Grid item md={2}>
              <Box display='flex' alignItems='center' justifyContent='center' sx={{ border: '1px solid #183A9E', borderRadius: '4px', cursor: 'pointer' }} padding='7px 25px' bgcolor='#183A9E' color='white'>
                <Box>
                  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" fill="none" data-testid="developers_inverted_icon">
                    <path fill="#FFF" fill-rule="evenodd" d="M10.1 1.125 6.875 15.1l-.975-.225L9.125.9l.975.225ZM1.63 8l3.074-4.1-.8-.6L.38 8l3.525 4.702.8-.6L1.63 8Zm9.674 4.103.8.6L15.63 8l-3.525-4.7-.8.6L14.38 8l-3.075 4.103Z" clip-rule="evenodd"></path>
                  </svg>
                </Box>
                <Typography fontSize='14px' fontWeight={600} ml={1}>Developers</Typography>
              </Box>
            </Grid>
            <Grid item md={2} sx={{ cursor: 'pointer' }} borderRight='1px solid #D8D9DC'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box>
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" data-testid="designers_icon">
                    <g stroke="#204ECF" clip-path="url(#designer_icon_id)">
                      <path d="M5.695 8.546a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"></path>
                      <path stroke-linecap="round" stroke-linejoin="round" d="M5.721 6.928V.546L.381 8.14s2.925 2.54 2.925 5.215v1.807M5.748.523l5.341 7.594s-2.952 2.54-2.952 5.215v1.807m-.257-1.862H3.338"></path>
                    </g>
                    <defs>
                      <clipPath id="designer_icon_id">
                        <path fill="#fff" d="M.3.5h13v15H.3z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography sx={{ '&:hover': { color: '#183A9E' } }} fontSize='14px' fontWeight={600} color='#464747' ml={1}>Designer</Typography>
              </Box>
            </Grid>
            <Grid item md={2} sx={{ cursor: 'pointer' }} borderRight='1px solid #D8D9DC'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box>
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="none" data-testid="finance_experts_icon">
                    <g clip-path="url(#finance_icon_id)">
                      <path stroke="#204ECF" d="M1 16.29h16.643M12.115 3.562v10.373M6.449 6.624v7.311M1.218 8.921v5.014M17.346.5v13.435"></path>
                    </g>
                    <defs>
                      <clipPath id="finance_icon_id">
                        <path fill="#fff" d="M0 .5h18v17H0z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography sx={{ '&:hover': { color: '#183A9E' } }} fontSize='14px' fontWeight={600} color='#464747' ml={1}>Finance Expert</Typography>
              </Box>
            </Grid>
            <Grid item md={2} sx={{ cursor: 'pointer' }} borderRight='1px solid #D8D9DC'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box>
                  <svg xmlns="http://www.w3.org/2000/svg" width="19" height="18" fill="none" data-testid="project_managers_icon">
                    <g stroke="#204ECF" clip-path="url(#project_icon_id)">
                      <path d="m14.2 6.35-5.6 5.974-2.8-2.987"></path>
                      <path d="M5 .5v3.84M14.8.5v3.84M1.9 15.962V2.712c0-.162.133-.292.3-.292h15.4c.167 0 .3.13.3.292v13.25a.295.295 0 0 1-.3.292H2.2c-.167 0-.3-.13-.3-.292Z"></path>
                    </g>
                    <defs>
                      <clipPath id="project_icon_id">
                        <path fill="#fff" d="M.9.5h18v17H.9z"></path>
                      </clipPath>
                    </defs>
                  </svg>
                </Box>
                <Typography sx={{ '&:hover': { color: '#183A9E' } }} fontSize='14px' fontWeight={600} color='#464747' ml={1}>Project Managers</Typography>
              </Box>
            </Grid>
            <Grid item md={2} sx={{ cursor: 'pointer' }} borderRight='1px solid #D8D9DC'>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box>
                  <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg" width="20" height="20" data-testid="product_managers_icon">
                    <path d="m20.57 20.21-3.35-3.36.71-.7 2.64 2.64 6.65-6.64.71.7z" fill="#204ecd"></path>
                    <path d="m14.57 29.06-12.5-6.25v-15.62l12.5-6.25 12.3 6.16v.8l-12.3 6.16-11.5-5.75v13.88l11.5 5.75 11.78-5.89.45.89-12.22 6.11zm-10.88-21.56 10.88 5.44 10.86-5.44-10.86-5.44z" fill="#204ecd"></path>
                    <path d="m0 0h30v30h-30z" fill="none"></path>
                  </svg>
                </Box>
                <Typography sx={{ '&:hover': { color: '#183A9E' } }} fontSize='14px' fontWeight={600} color='#464747' ml={1}>Product Managers</Typography>
              </Box>
            </Grid>
            <Grid item md={2} sx={{ cursor: 'pointer' }}>
              <Box display='flex' alignItems='center' justifyContent='center'>
                <Box>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="18" height="18" data-testid="marketing_experts_icon">
                    <path d="M0 0h30v30H0z" fill="none"></path>
                    <path d="M1 4v3.7l10 9 2 11.2h3.8l2-11.2 10-9V4H1zm26.8 3.2L18.1 16H14v1h3.7L16 26.9h-2.1L12 16.2l-10-9V5h25.8v2.2z" fill="#204ecf"></path>
                  </svg>
                </Box>
                <Typography sx={{ '&:hover': { color: '#183A9E' } }} fontSize='14px' fontWeight={600} color='#464747' ml={1}>Marketing Experts</Typography>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default Network;
