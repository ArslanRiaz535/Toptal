'use client'
import React from "react";
import { Box, Grid, Typography, Container, Card, CardContent, Divider } from "@mui/material";
import StarIcon from '@mui/icons-material/Star';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import { styled } from "@mui/material/styles";

const StyledCard = styled(Card)(({ theme }) => ({
  maxWidth: "370px",
  padding: theme.spacing(3),
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  display: 'flex',
  flexDirection: 'column',
  height: '100%', // Ensures each card takes the full height available
}));

const StyledStars = styled(Box)(({ theme }) => ({
  display: "flex",
  color: "#fbc02d",
  marginTop: theme.spacing(1),
  marginBottom: theme.spacing(1),
}));

const StyledQuoteIcon = styled(FormatQuoteIcon)(({ theme }) => ({
  color: "royalblue",
  marginBottom: theme.spacing(2),
}));

const cardsData = [
  {
    text1:'I have been working with Toptal...',
    text: "I have been working with Toptal engineers for several years now. They have all been exceptionally talented, very professional, highly productive, great team players, good communicators, and willing to go above and beyond. I have relied on them as key team players and they have never felt like 'outsiders'. Toptal as an organization has been professional and easy to work with.",
    name: "Ian Stokes-Rees",
    title: "Partner",
    companyLogo: "/Client/client3.svg",
  },
  {
    text1:'Toptal is my go-to source',
    text: "Toptal is my go-to source to find high-quality talent I can't find elsewhere. I've been very impressed with the breadth and depth of talent they've been able to deliver.",
    name: "Tess Caputo",
    title: "Chief Operations Officer",
    companyLogo: "/Client/client4.svg",
  },
  {
    text1:'Creating an app for the game',
    text: "With the pressure on and millions watching the Cleveland Cavaliers during the NBA Playoffs, Toptal delivered the talent and expertise needed to launch a brand new fan engagement platform.",
    name: "Conor Kenney",
    title: "VP, Product and Technology",
    companyLogo: "/Client/client5.svg",
  },
];

const OurClient = () => (
  <Box bgcolor="#f6f8fb" py={12}>
    <Container maxWidth="lg">
       <Box>
       <Typography mt={2} align="center" fontWeight={500} fontSize="42px">
            Our Clients' Satisfaction is Our Top Priority
          </Typography>
          <Typography align="center" fontSize="15px" color="#848C95">
            We have a reputation for helping clients around the world find success on their most important projects
          </Typography>
       </Box>
       <Divider sx={{marginTop:'50px'}} />
       <Box display='flex' justifyContent='center' mt={7} gap={9}>
          <Box display='flex'>
         <img src="/Client/client.svg" width='50px' height='50px' />
          <Box ml={2}>
           <Typography  fontSize='18px'>140+</Typography>
           <Typography fontSize='13px' color="#848C95">Countries Served</Typography>

         </Box>
          </Box>
          <Box display='flex'>
         <img src="/Client/client1.svg" width='50px' height='50px' />
         <Box ml={2}>
           <Typography fontSize='18px'>23,000+</Typography>
           <Typography fontSize='13px' color="#848C95">Clients Served</Typography>

         </Box>
          </Box>
       </Box>

       <Box display='flex' justifyContent='center' mt={5}>
         <Typography>Our customers say <span style={{fontWeight:'600'}}>Excellent</span></Typography>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='21px' width='22px' viewBox="0 0 22 20" ><path fill="#E59C01" d="m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='21px' width='22px' viewBox="0 0 22 20" ><path fill="#E59C01" d="m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='21px' width='22px' viewBox="0 0 22 20" ><path fill="#E59C01" d="m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='21px' width='22px' viewBox="0 0 22 20" ><path fill="#E59C01" d="m11 0 2.47 7.6h7.992l-6.466 4.698 2.47 7.601L11 15.202l-6.466 4.697 2.47-7.6L.538 7.6H8.53L11 0Z"></path></svg>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" height='21px' width='22px' viewBox="0 0 22 20" ><path fill="#C4C6CA" d="M13.47 7.6 11 0v15.202l6.466 4.697-2.47-7.601L21.462 7.6H13.47Z"></path><path fill="#E59C01" d="M8.53 7.6 11 0v15.202l-6.466 4.697 2.47-7.601L.538 7.6H8.53Z"></path></svg>
         <Typography>4.8 out of 5 based on 1,691 reviews</Typography>
         <img src="/Client/client2.svg" width='76px' height='20px'/>
       </Box>

      <Grid container spacing={3} mt={1} >
        {cardsData.map((card, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <StyledCard>
             <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 16" height='16px' width='18px' fill="none" ><path fill="#204ECF" d="M0 10.443C0 13.985 2.236 16 4.713 16c2.236 0 4.109-1.893 4.109-4.214 0-2.26-1.571-3.847-3.626-3.847-.362 0-.846.122-1.027.183.423-2.076 2.417-4.58 4.35-5.74L5.68 0C2.357 2.382 0 6.229 0 10.443Zm11.178 0c0 3.542 2.236 5.557 4.713 5.557C18.127 16 20 14.107 20 11.786c0-2.26-1.571-3.847-3.625-3.847-.363 0-.846.122-1.028.183.423-2.076 2.417-4.58 4.35-5.74L16.859 0c-3.323 2.382-5.68 6.229-5.68 10.443Z"></path></svg>
              <Typography variant="body1" mt={2} fontWeight={600} color="textSecondary">
                {card.text1}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {card.text}
              </Typography>
              <StyledStars>
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </StyledStars>
              <Box mt='auto'>

              <Typography variant="body2" fontWeight={600}>
                {card.name}
              </Typography>
              <Typography fontSize='12px' color="textSecondary">
                {card.title}
              </Typography>
              <Box mt={1}>
                <img src={card.companyLogo} alt={card.companyLogo}  width="100" />
              </Box>
              </Box>
            </StyledCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  </Box>
);

export default OurClient;
