import { useState } from "react";
import Link from "next/link";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import TwitterIcon from "@mui/icons-material/Twitter";
import DehazeIcon from "@mui/icons-material/Dehaze";
import CancelIcon from '@mui/icons-material/Cancel';

function Navbar() {
  const [hide, showNav] = useState(true);
  return (
    <Box sx={{ backgroundColor: "#0B2100", width: "100%",display: "flex",
    justifyContent: "space-between",
    alignItems: "center",height:'90px' }}>
      <Container
        component="div"
        maxWidth="lg"
        id="container-nav"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          component="div"
          id="left-nav"
          sx={{
            py: 3,
          }}
        >
          <img id="logo" src="pics/logo.png" alt="Logo" />
        </Box>
        <Box
          component="div"
          id="right-nav"
          sx={hide?{
            left: '-100%',
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex:999,
          }:{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            py: 3,
            left:0,
            zIndex:999
          }}
        >
          <Box
            component="div"
            className="nav-menu"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/roadmap">
              <a>Roadmap</a>
            </Link>
            <Link href="/faqs">
              <a>Faq</a>
            </Link>
            <Link href="/team">
              <a>Team</a>
            </Link>
          </Box>
          <Box
            component="div"
            className="social-icon"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              ml: 3,
            }}
          >
            <a href="">
              <TwitterIcon sx={{ fontSize: 45 }} />
            </a>
            <a href="">
              <TwitterIcon sx={{ fontSize: 45 }} />
            </a>
          </Box>
        </Box>
        <Box component="div" className="res-nav">
          {hide ? (
            <DehazeIcon onClick={()=>showNav(!hide)} sx={{ fontSize: 45, color: "white", mr: 1 }} />
          ) : (
            <CancelIcon onClick={()=>showNav(!hide)} sx={{ fontSize: 45, color: "white", mr: 1 }} />
          )}
        </Box>
      </Container>
    </Box>
  );
}

export default Navbar;
