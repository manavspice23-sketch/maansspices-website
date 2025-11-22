import React from 'react';
import { Box, Container, Grid, Typography, Button, Paper, useTheme, useMediaQuery, Chip, Divider } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import SecurityIcon from '@mui/icons-material/Security';
import SpeedIcon from '@mui/icons-material/Speed';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';
import HistoryIcon from '@mui/icons-material/History';
import VerifiedIcon from '@mui/icons-material/Verified';
import PublicIcon from '@mui/icons-material/Public';
import StarIcon from '@mui/icons-material/Star';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

const FeatureCard = ({ icon, title, description, delay, index }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Define vibrant colors for each card
  const cardColors = [
    { bg: 'linear-gradient(135deg, #FF5252 0%, #B71C1C 100%)', text: 'white', accent: '#FF8A80' },
    { bg: 'linear-gradient(135deg, #FF9800 0%, #E65100 100%)', text: 'white', accent: '#FFB74D' },
    { bg: 'linear-gradient(135deg, #4CAF50 0%, #1B5E20 100%)', text: 'white', accent: '#81C784' },
    { bg: 'linear-gradient(135deg, #9C27B0 0%, #4A148C 100%)', text: 'white', accent: '#CE93D8' },
  ];
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{ height: '100%', flex: '1 1 0px', minWidth: '0' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: { xs: 3, md: 4 },
          height: { xs: 'auto', md: '600px' },
          minHeight: { xs: '400px', md: '600px' },
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          borderRadius: 4,
          background: cardColors[index].bg,
          color: cardColors[index].text,
          border: 'none',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.2)',
            '& .icon-container': {
              transform: 'scale(1.1) rotate(5deg)',
              backgroundColor: cardColors[index].accent,
            },
            '& .card-number': {
              opacity: 0.8,
              transform: 'scale(1.1)',
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0) 70%)`,
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(255,255,255,0.05)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.5,
            zIndex: 0,
          }
        }}
      >
        <Typography 
          className="card-number"
          sx={{
            position: 'absolute',
            top: 16,
            right: 16,
            fontSize: { xs: '3rem', md: '5rem' },
            fontWeight: 800,
            color: 'rgba(255, 255, 255, 0.1)',
            lineHeight: 1,
            opacity: 0.5,
            transition: 'all 0.3s ease-in-out',
            zIndex: 0,
          }}
        >
          {index + 1}
        </Typography>
        
        <Box
          className="icon-container"
          sx={{
            width: { xs: 60, md: 80 },
            height: { xs: 60, md: 80 },
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            mb: 3,
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s ease-in-out',
            zIndex: 1,
            border: '2px solid rgba(255, 255, 255, 0.3)',
          }}
        >
          {icon}
        </Box>
        <Typography 
          variant="h6" 
          gutterBottom 
          sx={{ 
            fontWeight: 700, 
            color: 'white',
            mb: 2,
            fontSize: { xs: '1.1rem', md: '1.25rem' },
            letterSpacing: '0.5px',
            zIndex: 1,
            textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body1" 
          sx={{ 
            mb: 2,
            lineHeight: 1.6,
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1,
            color: 'rgba(255, 255, 255, 0.9)',
            fontSize: { xs: '0.9rem', md: '1rem' },
            px: { xs: 1, md: 0 },
          }}
        >
          {description}
        </Typography>
        <Chip 
          label={`Feature ${index + 1}`} 
          size="small" 
          sx={{ 
            mt: 2, 
            backgroundColor: 'rgba(255, 255, 255, 0.2)', 
            color: 'white',
            fontWeight: 600,
            border: '1px solid rgba(255, 255, 255, 0.3)',
          }} 
        />
      </Paper>
    </motion.div>
  );
};

const SummarySection = ({ title, description, icon, buttonText, buttonPath, delay }) => {
  const navigate = useNavigate();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      style={{ height: '100%' }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          height: '100%',
          minHeight: '400px',
          display: 'flex',
          flexDirection: 'column',
          borderRadius: 3,
          background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
          border: '1px solid rgba(0, 0, 0, 0.05)',
          transition: 'all 0.3s ease-in-out',
          position: 'relative',
          overflow: 'hidden',
          '&:hover': {
            transform: 'translateY(-8px)',
            boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
            '& .section-title': {
              color: '#B71C1C',
              '&::after': {
                width: '100%',
                backgroundColor: '#FFA000',
              }
            },
            '& .section-description': {
              color: '#3E2723',
            },
            '& .section-button': {
              background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
              boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
              transform: 'translateY(-2px)',
            }
          },
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `radial-gradient(circle at 30% 30%, rgba(255, 160, 0, 0.1) 0%, rgba(255, 160, 0, 0) 70%)`,
            zIndex: 0,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            bottom: 0,
            right: 0,
            width: '150px',
            height: '150px',
            background: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='rgba(183, 28, 28, 0.05)' fill-rule='evenodd'/%3E%3C/svg%3E")`,
            opacity: 0.5,
            zIndex: 0,
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            textAlign: 'center',
            position: 'relative',
            zIndex: 1,
            gap: 2,
          }}
        >
          <Typography 
            className="section-title"
            variant="h5" 
            gutterBottom 
            sx={{ 
              fontWeight: 700, 
              color: '#B71C1C', 
              mb: 1,
              letterSpacing: '0.5px',
              position: 'relative',
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -8,
                left: '50%',
                transform: 'translateX(-50%)',
                width: '60%',
                height: 3,
                backgroundColor: '#FF9800',
                borderRadius: 1.5,
                transition: 'all 0.3s ease-in-out',
              }
            }}
          >
            {title}
          </Typography>
          <Typography 
            className="section-description"
            variant="body1" 
            sx={{ 
              mb: 2, 
              lineHeight: 1.6,
              color: '#5D4037',
              fontSize: '1rem',
              transition: 'all 0.3s ease-in-out',
              maxWidth: '90%',
              mx: 'auto',
            }}
          >
            {description}
          </Typography>
          <Button 
            className="section-button"
            variant="contained" 
            color="primary" 
            size="large"
            onClick={() => navigate(buttonPath)}
            sx={{ 
              fontWeight: 600,
              px: 3,
              py: 1,
              borderRadius: 2,
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
              transition: 'all 0.3s ease-in-out',
              '&:hover': {
                background: 'linear-gradient(135deg, #7F0000 0%, #B71C1C 100%)',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.15)',
                transform: 'translateY(-2px)',
              }
            }}
          >
            {buttonText}
          </Button>
        </Box>
      </Paper>
    </motion.div>
  );
};

const Features = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  const features = [
    {
      icon: <VerifiedIcon sx={{ fontSize: 40 }} />,
      title: 'Quality Assurance',
      description: 'We continually strive to provide the finest quality red chillies, tailored to meet our customers\' specific needs. Our commitment to quality has earned us the trust of our clients.',
    },
    {
      icon: <LocalShippingIcon sx={{ fontSize: 40 }} />,
      title: 'Export-Ready Packaging',
      description: 'Our products are packed in export-worthy jute bags, gunny bags, or PP bags, available in 10 kg, 25 kg, and 50 kg options, ensuring safe and convenient transportation.',
    },
    {
      icon: <PublicIcon sx={{ fontSize: 40 }} />,
      title: 'Global Distribution Network',
      description: 'With a wide-reaching distribution network spanning India, Malaysia, Thailand, China, Indonesia, Sri Lanka, UAE, and Bangladesh, we ensure our premium quality products are accessible across the Middle East, Europe, and Africa.',
    },
    {
      icon: <StarIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Team',
      description: 'Our experienced professionals are dedicated to delivering the best products on time. We maintain constant communication with clients to understand their specific market needs.',
    },
  ];

  const aboutSummary = {
    title: "About MaansSpices",
    description: "MaansSpices is a leading spice import/export company with decades of experience in the industry. We specialize in sourcing premium quality spices from around the world and delivering them to customers globally. Our commitment to quality, authenticity, and customer satisfaction has made us a trusted name in the spice trade. We work directly with farmers and producers to ensure the highest quality products while supporting sustainable farming practices.",
    icon: <HistoryIcon />,
    buttonText: "Learn More About Us",
    buttonPath: "/about"
  };

  const productsSummary = {
    title: "Our Premium Spices",
    description: "Discover our extensive range of premium spices sourced from the finest growing regions worldwide. From whole spices to ground powders, we offer a comprehensive selection of authentic Indian spices including cardamom, black pepper, turmeric, cumin, coriander, and many more. Each product undergoes rigorous quality testing to ensure purity, flavor, and aroma. We also offer customized spice blends for your specific needs.",
    icon: <InventoryIcon />,
    buttonText: "Explore Our Products",
    buttonPath: "/products"
  };

  return (
    <Box sx={{ 
      py: 8, 
      backgroundColor: '#FFF8E1',
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
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#B71C1C', mr: 2 }} />
              <Typography
                variant="h3"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#B71C1C',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 80,
                    height: 4,
                    backgroundColor: '#B71C1C',
                    borderRadius: 2,
                  }
                }}
              >
                Why Choose Us
              </Typography>
              <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#B71C1C', ml: 2 }} />
            </Box>
            <Typography
              variant="h6"
              align="center"
              color="text.secondary"
              sx={{ 
                mt: 4, 
                maxWidth: '800px', 
                mx: 'auto',
                fontWeight: 600,
                color: '#5D4037',
                fontSize: '1.25rem',
              }}
            >
              India's Finest Chilies, Handpicked for Quality
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mt: 3 }}>
              <Chip 
                icon={<RestaurantIcon />} 
                label="Premium Quality" 
                sx={{ 
                  mr: 2, 
                  backgroundColor: 'rgba(183, 28, 28, 0.1)', 
                  color: '#B71C1C',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: '#B71C1C' }
                }} 
              />
              <Chip 
                icon={<EmojiEventsIcon />} 
                label="Award Winning" 
                sx={{ 
                  backgroundColor: 'rgba(255, 152, 0, 0.1)', 
                  color: '#E65100',
                  fontWeight: 600,
                  '& .MuiChip-icon': { color: '#E65100' }
                }} 
              />
            </Box>
          </Box>
        </motion.div>

        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' }, 
            flexWrap: { xs: 'wrap', md: 'nowrap' },
            gap: 4,
            mb: 8,
            overflowX: { xs: 'visible', md: 'auto' },
            pb: 2,
            '&::-webkit-scrollbar': {
              height: 8,
              display: { xs: 'none', md: 'block' },
            },
            '&::-webkit-scrollbar-track': {
              backgroundColor: 'rgba(0, 0, 0, 0.05)',
              borderRadius: 4,
            },
            '&::-webkit-scrollbar-thumb': {
              backgroundColor: '#B71C1C',
              borderRadius: 4,
            },
            '@media (max-width: 900px)': {
              flexDirection: 'column',
              flexWrap: 'wrap',
              overflowX: 'visible',
              pb: 0,
              '& > *': {
                minWidth: { xs: '100%', sm: '45%', md: '320px' },
                flex: { xs: '0 0 100%', sm: '0 0 45%', md: '0 0 auto' },
                mb: 4,
              }
            }
          }}
        >
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} delay={index * 0.1} index={index} />
          ))}
        </Box>

        <Box sx={{ textAlign: 'center', mb: 6 }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 2 }}>
              <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#B71C1C', mr: 2 }} />
              <Typography
                variant="h4"
                align="center"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  mb: 1,
                  color: '#B71C1C',
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -10,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 100,
                    height: 4,
                    backgroundColor: '#FF9800',
                    borderRadius: 2,
                  }
                }}
              >
                Learn More About Our Company
              </Typography>
              <LocalFireDepartmentIcon sx={{ fontSize: 40, color: '#B71C1C', ml: 2 }} />
            </Box>
            <Typography
              variant="h6"
              align="center"
              sx={{ 
                mt: 4, 
                maxWidth: '800px', 
                mx: 'auto',
                fontWeight: 500,
                color: '#5D4037',
                fontSize: '1.25rem',
                lineHeight: 1.6,
                position: 'relative',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: -20,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 2,
                  backgroundColor: 'rgba(183, 28, 28, 0.2)',
                }
              }}
            >
              Discover our story, our products, and our commitment to excellence in the spice trade industry.
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              justifyContent: 'center', 
              gap: 2, 
              mt: 4,
              flexWrap: 'wrap'
            }}>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(183, 28, 28, 0.05)',
                borderRadius: 2,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(183, 28, 28, 0.1)',
              }}>
                <HistoryIcon sx={{ color: '#B71C1C', mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#5D4037' }}>
                  Decades of Spicy Inspiration
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(183, 28, 28, 0.05)',
                borderRadius: 2,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(183, 28, 28, 0.1)',
              }}>
                <PublicIcon sx={{ color: '#B71C1C', mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#5D4037' }}>
                  Global Presence
                </Typography>
              </Box>
              <Box sx={{ 
                display: 'flex', 
                alignItems: 'center', 
                backgroundColor: 'rgba(183, 28, 28, 0.05)',
                borderRadius: 2,
                px: 3,
                py: 1.5,
                border: '1px solid rgba(183, 28, 28, 0.1)',
              }}>
                <VerifiedIcon sx={{ color: '#B71C1C', mr: 1 }} />
                <Typography variant="body1" sx={{ fontWeight: 600, color: '#5D4037' }}>
                  Quality Assured
                </Typography>
              </Box>
            </Box>
            <Divider sx={{ 
              my: 4, 
              borderColor: 'rgba(183, 28, 28, 0.2)',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: -1,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 100,
                height: 2,
                backgroundColor: '#FF9800',
                borderRadius: 1,
              }
            }} />
          </motion.div>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <SummarySection {...aboutSummary} delay={0.2} />
          </Grid>
          <Grid item xs={12} md={6}>
            <SummarySection {...productsSummary} delay={0.4} />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Features; 