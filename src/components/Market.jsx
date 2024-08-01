'use client'
import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BackgroundBox = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "450px", // Adjust height as needed
  backgroundImage: 'url("/Market/market.avif")', // Replace with your image path
  backgroundSize: "cover",
  backgroundPosition: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const ContentContainer = styled(Container)(({ theme }) => ({
  width:'1010px',
  color: "white", // Adjust text color as needed
}));

const CenteredImage = styled("img")(({ theme }) => ({
  marginTop: theme.spacing(0),
  
}));



function Market() {
  return (
    <>
      <BackgroundBox>
        <ContentContainer >
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" style={{width:'32px',height:'32px'}} ><path d="M0 13.6C0 17.7 2.47 20 5.247 20c2.469 0 4.32-2 4.32-4.3 0-2.4-1.748-4.2-4.114-4.2-.309 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L7.305 0C3.395 2.8 0 8 0 13.6zm14.61 0c0 4.1 2.365 6.4 5.143 6.4 2.572 0 4.424-2 4.424-4.3 0-2.4-1.749-4.2-4.115-4.2-.412 0-1.03.1-1.132.2.206-3.2 2.778-7.1 6.07-9.3L21.914 0c-4.013 2.8-7.305 8-7.305 13.6z" fill="royalblue"></path></svg>
          <Typography sx={{fontSize:'30px'}}>We're known as a high-skilled marketplace, and we see an acute pain point within that area.</Typography>
          <img style={{marginTop:'30px'}} src="/Market/mark.svg" width='130px' height='auto'/>
          <Box mt={5} display='flex'  alignItems='center'>
          <CenteredImage src="/Market/button.svg" alt="Centered Image" />
          <Typography sx={{fontSize:'15px', fontWeight:'600', marginLeft:'13px'}}>Watch the video</Typography>

          </Box>
        </ContentContainer>
      </BackgroundBox>
      
    </>
  );
}

export default Market;
