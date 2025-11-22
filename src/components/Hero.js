import React from 'react';
import { Box, Container, Typography, Button, useTheme, useMediaQuery } from '@mui/material';
import { motion } from 'framer-motion';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Link } from 'react-router-dom';

const Hero = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Box
      sx={{
        background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
        color: 'white',
        py: { xs: 6, md: 12 },
        pt: { xs: '80px', sm: '100px', md: 12 },
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: '100%',
          background: 'url("data:image/svg+xml,%3Csvg width=\'100\' height=\'100\' viewBox=\'0 0 100 100\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z\' fill=\'%23FFA000\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'/%3E%3C/svg%3E")',
          zIndex: 0,
        },
        '&::after': {
          content: '""',
          position: 'absolute',
          top: -100,
          right: -100,
          width: '300px',
          height: '300px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(255, 160, 0, 0.1) 0%, rgba(255, 160, 0, 0) 70%)',
          zIndex: 0,
        }
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: 4,
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={{ flex: 1 }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              {/* <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#FFA000', mr: 2 }} /> */}
              <Typography
                variant="h2"
                component="h1"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '1.75rem', sm: '2rem', md: '3rem' },
                  mb: { xs: 3, sm: 2 },
                  mt: { xs: 2, sm: 0 },
                  color: 'white',
                  textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                  letterSpacing: 1,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: { xs: 60, sm: 80 },
                    height: 4,
                    backgroundColor: '#FFA000',
                    borderRadius: 2,
                  }
                }}
              >
                MaansSpices Solutions
              </Typography>
              {/* <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#FFA000', ml: 2 }} /> */}
            </Box>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                opacity: 0.9,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                color: 'rgba(255, 255, 255, 0.9)',
                textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
              }}
            >
              Connecting businesses worldwide through reliable import/export services
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
              <Button
                component={Link}
                to="/contact"
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: '#FFA000',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                  '&:hover': {
                    backgroundColor: '#FF8F00',
                    transform: 'translateY(-2px)',
                    boxShadow: '0 6px 12px rgba(0, 0, 0, 0.3)',
                  },
                }}
              >
                Get Started
              </Button>
              <Button
                component={Link}
                to="/products"
                variant="outlined"
                size="large"
                sx={{
                  borderColor: 'white',
                  color: 'white',
                  fontWeight: 600,
                  px: 4,
                  py: 1.5,
                  borderRadius: 2,
                  '&:hover': {
                    borderColor: '#FFA000',
                    backgroundColor: 'rgba(255, 160, 0, 0.1)',
                    transform: 'translateY(-2px)',
                  },
                }}
              >
                Explore Products
              </Button>
            </Box>
            {/* <Box sx={{ display: 'flex', gap: 2, mt: 4, flexWrap: 'wrap' }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                px: 2,
                py: 1,
              }}>
                <RestaurantIcon sx={{ color: '#FFA000', mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Premium Quality
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: 2,
                px: 2,
                py: 1,
              }}>
                <EmojiEventsIcon sx={{ color: '#FFA000', mr: 1 }} />
                <Typography variant="body2" sx={{ fontWeight: 600 }}>
                  Award Winning
                </Typography>
              </Box>
            </Box> */}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ flex: 1 }}
          >
            <Box
              component="img"
              src="/images/hero-image.jpg"
              alt="MaansSpices"
              sx={{
                width: '100%',
                maxWidth: 600,
                height: 'auto',
                borderRadius: 4,
                boxShadow: '0 12px 24px rgba(0, 0, 0, 0.3)',
                transform: 'perspective(1000px) rotateY(-5deg)',
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'perspective(1000px) rotateY(0deg)',
                },
              }}
            />
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default Hero; 