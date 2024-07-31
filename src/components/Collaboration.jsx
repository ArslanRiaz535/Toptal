'use client'
import { Box, Container, Divider, Grid } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { styled } from "@mui/material/styles";

const OverlayBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  overflow: 'hidden',
  '&:hover .overlay': {
    opacity: 1,
  },
  '&:hover .overlay-text': {
    opacity: 1,
  },
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(0, 0, 255, 0.1)', // Blue color with low opacity
  opacity: 0,
  transition: 'opacity 0.3s ease',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const OverlayText = styled(Typography)(({ theme }) => ({
  color: 'white',
  fontSize: '14px',
  fontWeight: 'bold',
  opacity: 0,
  transition: 'opacity 0.3s ease',
  position: 'absolute',
  top: '25%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
}));

function Collaboration() {
  return (
    <>
      <Box bgcolor="#f6f8fb" mt={12} pb='50px'>
        <Container maxWidth={false} sx={{ width: "1250px", maxWidth: "100%" }}>
          <Typography pt={9} align="center" fontWeight={600} fontSize="41px">
            Collaborations With Leading Brands
          </Typography>
          <Typography align="center" fontSize="16px" color="#848C95">
            We collaborate with a number of top-tier companies on imagining the
            future of work. Have a look.
          </Typography>
          <Grid spacing={4} container mt={5}>
            <Grid item md={4} sm={6} xs={12}>
              <Card >
                <CardActionArea>
                  <OverlayBox>
                    <CardMedia
                      component="img"
                      width="100"
                      height="240px"
                      image="/Collaboration/col.avif"
                      alt="green iguana"
                    />
                    <Overlay className="overlay">
                      <OverlayText className="overlay-text">Read more</OverlayText>
                    </Overlay>
                    <CardContent sx={{ padding: '22px', backgroundColor:'#f6f8fb' }}>
                      <Typography gutterBottom variant="body2" color='royalblue' component="div">
                        Toptal Partnership
                      </Typography>
                      <Typography fontSize='25px' color='#2f3030' sx={{'&:hover':{color:'royalblue'}}} lineHeight='32px' fontWeight={500}>
                        The Opportunity Loop: An Inside Total Partnership Look at How to Attract and
                        Retain Top Talent
                      </Typography>
                      <Divider sx={{ marginTop: '19px' }} />
                      <Box display="flex" alignItems="center" mt={2}>
                        <img
                          src="/Collaboration/topcol.svg"
                          width="90px"
                          height="25px"
                        />
                        <span
                          style={{
                            fontSize: "22px",
                            color: "gray",
                            fontWeight: "600",
                          }}
                        >
                          +
                        </span>
                        <img
                          src="/Collaboration/motrola.svg"
                          width="110px"
                          style={{ marginLeft: "8px" }}
                          height="25px"
                        />
                      </Box>
                    </CardContent>
                  </OverlayBox>
                </CardActionArea>
              </Card>
            </Grid>


            <Grid item md={4} sm={6} xs={12}>
              <Card >
                <CardActionArea>
                  <OverlayBox>
                    <CardMedia
                      component="img"
                      width="100"
                      height="240px"
                      image="/Collaboration/col1.avif"
                      alt="green iguana"
                    />
                    <Overlay className="overlay">
                      <OverlayText className="overlay-text">Read more</OverlayText>
                    </Overlay>
                    <CardContent sx={{ padding: '22px', backgroundColor:'#f6f8fb' }}>
                      <Typography gutterBottom variant="body2" color='royalblue' component="div">
                        Toptal Partnership
                      </Typography>
                      <Typography fontSize='25px' color='#2f3030' sx={{'&:hover':{color:'royalblue'}}} lineHeight='32px' fontWeight={500}>
                      Industry Perspective: Salesforce On Team Alignment More Area And Agile Talent
                      </Typography>
                      <Divider sx={{ marginTop: '19px' }} />
                      <Box display="flex" alignItems="center" mt={2}>
                        <img
                          src="/Collaboration/topcol.svg"
                          width="90px"
                          height="25px"
                        />
                        <span
                          style={{
                            fontSize: "22px",
                            color: "gray",
                            fontWeight: "600",
                          }}
                        >
                          +
                        </span>
                        <img
                          src="/Collaboration/sales.svg"
                          width="110px"
                          style={{ marginLeft: "8px" }}
                          height="25px"
                        />
                      </Box>
                    </CardContent>
                  </OverlayBox>
                </CardActionArea>
              </Card>
            </Grid>
            <Grid item md={4} sm={6} xs={12}>
              <Card >
                <CardActionArea>
                  <OverlayBox>
                    <CardMedia
                      component="img"
                      width="100"
                      height="240px"
                      image="/Collaboration/col2.avif"
                      alt="green iguana"
                    />
                    <Overlay className="overlay">
                      <OverlayText className="overlay-text">Read more</OverlayText>
                    </Overlay>
                    <CardContent sx={{ padding: '22px', backgroundColor:'#f6f8fb' }}>
                      <Typography gutterBottom variant="body2" color='royalblue' component="div">
                        Toptal Partnership
                      </Typography>
                      <Typography fontSize='25px' color='#2f3030' sx={{'&:hover':{color:'royalblue'}}} lineHeight='32px' fontWeight={500}>
                      Call to Action: the On-Demand Business Model Total Partnership of Our Brand
                      </Typography>
                      <Divider sx={{ marginTop: '19px' }} />
                      <Box display="flex" alignItems="center" mt={2}>
                        <img
                          src="/Collaboration/topcol.svg"
                          width="90px"
                          height="25px"
                        />
                        <span
                          style={{
                            fontSize: "22px",
                            color: "gray",
                            fontWeight: "600",
                          }}
                        >
                          +
                        </span>
                        <img
                          src="/Collaboration/microsoft.svg"
                          width="110px"
                          style={{ marginLeft: "8px" }}
                          height="25px"
                        />
                      </Box>
                    </CardContent>
                  </OverlayBox>
                </CardActionArea>
              </Card>
            </Grid>
          </Grid>
          <Box mt={7} gap={2} display='flex' alignItems='center' justifyContent='center'>
           <Typography fontSize='19px'>Ready to get started?</Typography>
           <Button
                variant="contained"
                sx={{
                  fontSize:'16px',
                  textTransform: 'none',
                  padding: '8px 41px',
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
          </Box>
        </Container>
      </Box>
    </>
  );
}

export default Collaboration;
