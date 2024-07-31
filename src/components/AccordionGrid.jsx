'use client'
import React, { useState } from 'react';
import { Container, Grid, Accordion, AccordionSummary, AccordionDetails, Typography, Box, Button } from '@mui/material';
import { styled } from '@mui/system';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const categories = [
  ["Web Development", "Mobile Development"],
  ["DevOps & Cloud Computing", "Data Science & AI"],
  ["UX/UI Designers", "Database & Big Data Technologies"],
  ["Programming Languages", "CMS Platforms"],
  ["Software Development Roles & Collaboration Models", "E-commerce & CRM Platforms"],
  ["Quality Assurance & Testing", "Visual & Brand Design"],
  ["API Development & Integration", "Product & Project Management"],
  ["Blockchain Development", "Finance & Business Consulting"],
  ["Desktop Development", "Marketing"],
  ["AR/VR & Game Development", "Trending Skills & Roles"],
];

const CustomAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '&:hover': {
    color: 'royalblue',
  },
  '& .MuiAccordionSummary-content': {
    margin: 0,
  },
}));

const CustomAccordion = styled(Accordion)(({ theme }) => ({
  boxShadow: 'none',
  '&:before': {
    display: 'none',
  },
  '& .MuiAccordionSummary-root': {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  '& .MuiAccordionSummary-root.Mui-expanded': {
    minHeight: 48,
  },
  '& .MuiAccordionSummary-content.Mui-expanded': {
    margin: 0,
  },
  '& .MuiAccordionDetails-root': {
    paddingTop: 0,
    paddingBottom: 0,
  },
}));

const StyledAddIcon = styled(AddIcon)(({ theme }) => ({
  fontSize: '24px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'royalblue',
  },
}));

const StyledRemoveIcon = styled(RemoveIcon)(({ theme }) => ({
  fontSize: '24px',
  transition: 'color 0.3s ease',
  '&:hover': {
    color: 'royalblue',
  },
}));

const AccordionGrid = () => {
  const [expanded, setExpanded] = useState(false);

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    
    <Container maxWidth="lg" sx={{ marginTop: '50px' }} bgcolor='blue'>
      <Typography align='center' mt={20} fontSize='43px'>Discover Our Expert Skillsets</Typography>
      <Box sx={{boxShadow: '0px 4px 8px 0px rgba(0, 0, 0, 0.1)'}}>
      <Grid mt={5} container spacing={2}>
        {categories.map((pair, index) => (
          <React.Fragment key={index}>
            <Grid fontWeight={600} item xs={12} sm={6}>
              <CustomAccordion expanded={expanded === `panel${index}1`} onChange={handleChange(`panel${index}1`)}>
                <CustomAccordionSummary expandIcon={expanded === `panel${index}1` ? <StyledRemoveIcon /> : <StyledAddIcon />}>
                  <Typography>{pair[0]}</Typography>
                </CustomAccordionSummary>
                <AccordionDetails>
                <Grid container  sx={{cursor:'pointer'}}>
                <Grid item md={6}>
                <Box mt={2} display='flex' flexDirection='column'  >
                  <Typography color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Designers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>UI/UX Designers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Angular Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>JavaScript Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CSS Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Scraping Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>PHP Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Backbone.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Vue.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Laravel Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>RxJS Developers</Typography>
                    
                  </Box>
                </Grid>
                <Grid item md={6}>
                <Box mt={2} display='flex' flexDirection='column' >
                  <Typography color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Meteor Developers</Typography>
                  <Typography mt={1}  color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CodeIgniter Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CakePHP Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>MEAN Stack Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Node.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Ruby on Rails Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>API Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>TypeScript Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Django Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Yii Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>ASP.NET Developers</Typography>

                  </Box>
                </Grid>
                  
                </Grid>
                
                </AccordionDetails>
              </CustomAccordion>
            </Grid>
            <Grid item xs={12} sm={6}>
              <CustomAccordion expanded={expanded === `panel${index}2`} onChange={handleChange(`panel${index}2`)}>
                <CustomAccordionSummary expandIcon={expanded === `panel${index}2` ? <StyledRemoveIcon /> : <StyledAddIcon />}>
                  <Typography>{pair[1]}</Typography>
                </CustomAccordionSummary>
                <AccordionDetails>
                <Grid container  sx={{cursor:'pointer'}}>
                <Grid item md={6}>
                <Box mt={2} display='flex' flexDirection='column'  >
                  <Typography color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Designers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>UI/UX Designers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Angular Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>JavaScript Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CSS Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Web Scraping Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>PHP Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Backbone.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Vue.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Laravel Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>RxJS Developers</Typography>
                    
                  </Box>
                </Grid>
                <Grid item md={6}>
                <Box mt={2} display='flex' flexDirection='column' >
                  <Typography color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Meteor Developers</Typography>
                  <Typography mt={1}  color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CodeIgniter Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>CakePHP Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>MEAN Stack Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Node.js Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Ruby on Rails Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>API Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>TypeScript Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Django Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>Yii Developers</Typography>
                  <Typography mt={1} color='#666666' sx={{'&:hover':{color:'royalblue', textDecoration: 'underline'}}} fontSize='13px'>ASP.NET Developers</Typography>

                  </Box>
                </Grid>
                  
                </Grid>
                </AccordionDetails>
              </CustomAccordion>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
      </Box>
      <Box mt={20} gap={2} display='flex' alignItems='center' justifyContent='center'>
           <Typography fontSize='21px'>Top talent is in high demand.</Typography>
           <Button
                variant="contained"
                sx={{
                  fontSize:'20px',
                  textTransform: 'none',
                  padding: '8px 48px',
                  boxShadow: 'none',
                  borderRadius: '5px',
                  backgroundColor: 'rgb(5, 198, 124)',
                  '&:hover': {
                    boxShadow: 'none',
                    backgroundColor: '#03B080',
                  },
                }}
              >
                Start Hiring
              </Button>
          </Box>
    </Container>
  );
};

export default AccordionGrid;
