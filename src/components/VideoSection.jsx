"use client";
import React from "react";
import { Grid, Box, Typography, Container } from "@mui/material";
import { styled } from "@mui/material/styles";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";

const HoverBox = styled(Box)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  height: "350px", // Adjust the height as needed
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  "&:hover .image": {
    transform: "scale(1.1)",
  },
  "&:hover .overlay": {
    backgroundColor: "rgba(0, 0, 255, 0.3)",
    opacity: 1,
  },
}));

const Image = styled("img")(({ theme }) => ({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.3s ease",
}));

const Overlay = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)", // Black color with low opacity
  opacity: 1,
  transition: "opacity 0.3s ease, background-color 0.3s ease",
}));

const TopLeftContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: 50,
  left: 42,
  color: "white",
}));

const BottomContent = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 30,
  left: 42,
  color: "white",
  display: "flex",
  alignItems: "center",
}));

const ImageCard = ({ image, title }) => (
  <HoverBox>
    <Image src={image} alt={title} className="image" />
    <Overlay className="overlay" />
    <TopLeftContent>
      <img src={title} />
    </TopLeftContent>
    <BottomContent>
      <PlayCircleFilledIcon sx={{ fill: "#D2D6E2", fontSize: "46px" }} />
      <Typography variant="body1" ml={1} fontWeight={600}>
        Watch the video
      </Typography>
    </BottomContent>
  </HoverBox>
);

const VideoSection = () => (
  <Container
    maxWidth={false}
    sx={{ width: "1250px", maxWidth: "100%", marginTop: "120px" }}
  >
    <Typography align="center" fontWeight={600} fontSize="41px">
      Why Organizations Choose Toptal
    </Typography>
    <Typography align="center" fontSize="16px" color="#848C95">
      Discover the many ways in which our clients have embraced the benefits of
      the Toptal network.
    </Typography>
    <Box sx={{ flexGrow: 1 }}>
      <Grid mt={5} container spacing={2}>
        {[
          { image: "/VideoSection/tower.avif", title: "/VideoSection/pre.svg" },
          {
            image: "/VideoSection/road.jpg",
            title: "/VideoSection/bridge.svg",
          },
          {
            image: "/VideoSection/speaker.avif",
            title: "/VideoSection/cava.svg",
          },
          { image: "/VideoSection/dog.jpg", title: "/VideoSection/zoetis.svg" },
          { image: "/VideoSection/class.avif", title: "/VideoSection/csr.svg" },
          {
            image: "/VideoSection/univ.avif",
            title: "/VideoSection/bridge.svg",
          },
        ].map((item, index) => (
          <Grid
            sx={{ cursor: "pointer" }}
            item
            xs={12}
            sm={6}
            md={4}
            key={index}
          >
            <ImageCard image={item.image} title={item.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  </Container>
);

export default VideoSection;
