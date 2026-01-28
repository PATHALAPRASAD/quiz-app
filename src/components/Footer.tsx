import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box component="footer" sx={{ bgcolor: "grey.100", py: 6, mt: "auto" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} justifyContent="space-between">
          {/* Brand Section */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="h6"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: "bold" }}
            >
              MyCompany
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Building the future of web applications with React and MUI in
              2026.
            </Typography>
          </Grid>

          {/* Quick Links Section */}
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Product
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              variant="body2"
              underline="hover"
            >
              Features
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              variant="body2"
              underline="hover"
            >
              Pricing
            </Link>
          </Grid>

          {/* Support Section */}
          <Grid size={{ xs: 6, sm: 2 }}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Support
            </Typography>
            <Link
              href="#"
              color="inherit"
              display="block"
              variant="body2"
              underline="hover"
            >
              Help Center
            </Link>
            <Link
              href="#"
              color="inherit"
              display="block"
              variant="body2"
              underline="hover"
            >
              Contact Us
            </Link>
          </Grid>

          {/* Social Icons Section */}
          <Grid size={{ xs: 12, sm: 4 }}>
            <Typography
              variant="subtitle1"
              color="text.primary"
              sx={{ fontWeight: "bold" }}
              gutterBottom
            >
              Follow Us
            </Typography>
            <Box>
              <IconButton
                aria-label="GitHub"
                color="inherit"
                onClick={() => window.open("https://www.github.com/", "_blank")}
              >
                <GitHubIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                color="inherit"
                onClick={() => window.open("https://x.com/", "_blank")}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                color="inherit"
                onClick={() =>
                  window.open("https://in.linkedin.com/", "_blank")
                }
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4 }} />

        {/* Bottom Bar */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="text.secondary">
            © {currentYear} MyCompany. All rights reserved.
          </Typography>
          <Box>
            <Link href="#" color="inherit" variant="body2" sx={{ mx: 1 }}>
              Privacy Policy
            </Link>
            <Link href="#" color="inherit" variant="body2" sx={{ mx: 1 }}>
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
