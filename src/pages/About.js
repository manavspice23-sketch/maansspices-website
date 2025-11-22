import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Paper,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Button,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { motion } from 'framer-motion';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import BusinessIcon from '@mui/icons-material/Business';
import PeopleIcon from '@mui/icons-material/People';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import { Link } from 'react-router-dom';

const About = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

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
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ 
            textAlign: 'center', 
            mb: 6,
            position: 'relative',
            '&::after': {
              content: '""',
              position: 'absolute',
              bottom: -20,
              left: '50%',
              transform: 'translateX(-50%)',
              width: 100,
              height: 4,
              backgroundColor: '#FF9800',
              borderRadius: 2,
            }
          }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{ 
                mb: 2, 
                fontWeight: 700, 
                color: '#B71C1C',
                position: 'relative',
                display: 'inline-block',
                width: '100%',
                textAlign: 'center',
              }}
            >
              About MaansSpices
            </Typography>
            <Typography
              variant="h6"
              sx={{ 
                color: '#5D4037', 
                maxWidth: '800px', 
                mx: 'auto',
                fontSize: { xs: '1rem', md: '1.25rem' },
                lineHeight: 1.6
              }}
            >
              Your trusted partner in delivering the finest quality Indian spices to the world
            </Typography>
          </Box>
        </motion.div>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                  border: '1px solid rgba(255, 160, 0, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#B71C1C',
                    mb: 3,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 3,
                      backgroundColor: '#FF9800',
                      borderRadius: 1.5,
                    }
                  }}
                >
                  Our Story
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#5D4037' }}>
                  We are proud manufacturers and exporters of premium-grade Indian spice products, based in Chotila, Gujarat, India—a region known for its rich agricultural heritage and spice cultivation. At MaansSpices, we believe in the power of flavor and the cultural richness that Indian spices bring to every meal.
                </Typography>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#5D4037' }}>
                  India has always held a special place in the global spice trade for its diverse flavors, vibrant colors, and distinctive aromas. From the fiery punch of red chillies to the earthy warmth of turmeric, our spices represent the true essence of Indian cuisine. As demand for Indian spices continues to grow worldwide, MaansSpices is dedicated to being at the forefront of this movement.
                </Typography>
                <Typography variant="body1" sx={{ lineHeight: 1.8, color: '#5D4037' }}>
                  Driven by passion, quality, and trust, MaansSpices is committed to being your reliable source for all your spice needs.
                </Typography>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper 
                elevation={0} 
                sx={{ 
                  p: 4, 
                  height: '100%',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                  border: '1px solid rgba(255, 160, 0, 0.2)',
                  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                    boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                  }
                }}
              >
                <Typography 
                  variant="h5" 
                  component="h2" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 700, 
                    color: '#B71C1C',
                    mb: 3,
                    position: 'relative',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 60,
                      height: 3,
                      backgroundColor: '#FF9800',
                      borderRadius: 1.5,
                    }
                  }}
                >
                  Our Expertise
                </Typography>
                <List>
                  <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <LocalShippingIcon sx={{ color: '#B71C1C' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Premium Red Chillies" 
                      secondary="Our specialization lies in the export of premium Dry Red Chillies, and we are proud to be among the leading red chilli exporters in India. With a commitment to quality, freshness, and authenticity, we supply renowned varieties such as Guntur Red Chilli, among others."
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontWeight: 600, 
                          color: '#B71C1C',
                          mb: 0.5
                        },
                        '& .MuiListItemText-secondary': { 
                          color: '#5D4037',
                          lineHeight: 1.6
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <RestaurantIcon sx={{ color: '#B71C1C' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Wide Range of Spices" 
                      secondary="At MaansSpices, we go beyond chillies—we are experienced exporters of a wide range of spices including turmeric, cumin, ginger, cinnamon, star anise, asafoetida, nutmeg, black pepper, and many more."
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontWeight: 600, 
                          color: '#B71C1C',
                          mb: 0.5
                        },
                        '& .MuiListItemText-secondary': { 
                          color: '#5D4037',
                          lineHeight: 1.6
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start" sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <SpaIcon sx={{ color: '#B71C1C' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Quality Assurance" 
                      secondary="Every batch is carefully tested and approved by our Quality Control and Assurance teams, ensuring that only the best reaches your kitchen or business."
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontWeight: 600, 
                          color: '#B71C1C',
                          mb: 0.5
                        },
                        '& .MuiListItemText-secondary': { 
                          color: '#5D4037',
                          lineHeight: 1.6
                        }
                      }}
                    />
                  </ListItem>
                  <ListItem alignItems="flex-start">
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: '#B71C1C' }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Global Reach" 
                      secondary="Our mission is to share the richness of Indian culture and culinary tradition with every corner of the globe."
                      sx={{ 
                        '& .MuiListItemText-primary': { 
                          fontWeight: 600, 
                          color: '#B71C1C',
                          mb: 0.5
                        },
                        '& .MuiListItemText-secondary': { 
                          color: '#5D4037',
                          lineHeight: 1.6
                        }
                      }}
                    />
                  </ListItem>
                </List>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>

        <Box sx={{ mt: 8 }}>
          <Divider sx={{ 
            mb: 4, 
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
          <Typography
            variant="h4"
            component="h2"
            align="center"
            sx={{ 
              mb: 4, 
              fontWeight: 700, 
              color: '#B71C1C',
              position: 'relative',
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
            Why Choose Us?
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#B71C1C', mb: 1 }}>
                    Decades
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#5D4037' }}>
                    of Spicy Inspiration
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#B71C1C', mb: 1 }}>
                    50+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#5D4037' }}>
                    Countries Serving
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#B71C1C', mb: 1 }}>
                    1000+
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#5D4037' }}>
                    Satisfied Clients
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <Paper 
                  elevation={0} 
                  sx={{ 
                    p: 3, 
                    textAlign: 'center',
                    height: '100%',
                    borderRadius: 3,
                    background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
                    }
                  }}
                >
                  <Typography variant="h3" sx={{ fontWeight: 700, color: '#B71C1C', mb: 1 }}>
                    100%
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: 600, color: '#5D4037' }}>
                    Quality Assured
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          </Grid>
        </Box>

        <Box sx={{ mt: 8, textAlign: 'center' }}>
          <Button
            component={Link}
            to="/products"
            variant="contained"
            size="large"
            sx={{ 
              fontWeight: 600,
              px: 4,
              py: 1.5,
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
            Explore Our Products
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default About; 