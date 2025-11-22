import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Button,
  Divider,
  Paper,
  Avatar,
  useTheme,
  useMediaQuery,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import { motion } from 'framer-motion';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import LocalFireDepartmentIcon from '@mui/icons-material/LocalFireDepartment';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';

// Single featured blog post
const featuredBlog = {
  id: 1,
  title: 'The World Loves Indian Spices — And Here\'s Why',
  content: `For centuries, Indian spices have been treasured across the globe, not just for their flavors but for their healing properties, colors, and deep cultural significance. From royal kitchens to humble homes, spices have played a central role in shaping how the world experiences food.

At MaansSpices, we often get asked — "What makes Indian spices so special?" The answer lies in three words: authenticity, diversity, and heritage.

1. A Legacy of Flavor

India is the birthplace of spices. We're not just talking about red chilli and turmeric. India is home to over 75 varieties of spices! Each region contributes its own unique produce — think of the Guntur chilli from Andhra Pradesh, the Alleppey turmeric from Kerala, or the earthy cumin from Gujarat.

2. Health in Every Pinch

Many Indian spices are packed with medicinal benefits. Turmeric, for instance, is a powerful anti-inflammatory; ginger aids digestion; black pepper is rich in antioxidants. They don't just make your food taste good — they make you feel good too.

3. Exporting More Than Just Products

At MaansSpices, we believe we're exporting more than just spices — we're sharing a piece of India's soul with the world. Our commitment is to deliver 100% natural, authentic, and quality-tested spices to your table, no matter where you are.

4. The Global Chilli Craze

Did you know that Indian red chillies are among the most sought-after in the world? Their deep color, pungency, and long shelf life make them ideal for both home cooking and large-scale food production. As one of the leading red chilli exporters in India, MaansSpices proudly exports bulk quantities of Guntur red chillies and other varieties globally.

In Conclusion

The world's love for Indian spices isn't just a trend — it's a timeless appreciation. And at MaansSpices, we're honored to be a part of your kitchen story. From Gujarat to the globe, we're here to spice things up, naturally and deliciously.`,
  image: '/images/products/blog.jpg',
  date: 'June 15, 2023',
  author: 'MaansSpices Team',
  authorAvatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  category: 'Spice Insights',
  readTime: '5 min read'
};

const Blog = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  // Split content into paragraphs
  const paragraphs = featuredBlog.content.split('\n\n');

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
              bottom: -10,
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
              }}
            >
              Our Blog
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
              Insights, trends, and updates from the world of international spice trade
            </Typography>
          </Box>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 4 },
              borderRadius: 3,
              background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
              border: '1px solid rgba(255, 160, 0, 0.2)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
              overflow: 'hidden',
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: `radial-gradient(circle at 30% 30%, rgba(255, 160, 0, 0.1) 0%, rgba(255, 160, 0, 0) 70%)`,
                zIndex: 0,
              }
            }}
          >
            <Box sx={{ position: 'relative', zIndex: 1 }}>
              <Box sx={{ 
                position: 'relative', 
                overflow: 'hidden',
                borderRadius: 2,
                mb: 4,
                boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
                  opacity: 0.5,
                }
              }}>
                <CardMedia
                  component="img"
                  height="400"
                  image={featuredBlog.image}
                  alt={featuredBlog.title}
                  sx={{ 
                    objectFit: 'cover',
                    width: '100%',
                    transition: 'transform 0.5s ease-in-out',
                    '&:hover': {
                      transform: 'scale(1.05)',
                    }
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    zIndex: 2,
                  }}
                >
                  <Paper
                    elevation={2}
                    sx={{
                      px: 2,
                      py: 1,
                      borderRadius: 2,
                      bgcolor: 'rgba(255, 255, 255, 0.9)',
                      color: '#B71C1C',
                      fontWeight: 600,
                      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
                    }}
                  >
                    {featuredBlog.category}
                  </Paper>
                </Box>
              </Box>

              <Box sx={{ mb: 4 }}>
                <Typography
                  variant="h4"
                  component="h1"
                  sx={{
                    fontWeight: 700,
                    color: '#B71C1C',
                    mb: 2,
                    lineHeight: 1.3,
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
                  {featuredBlog.title}
                </Typography>
                
                <Box sx={{ 
                  display: 'flex', 
                  alignItems: 'center', 
                  mb: 3,
                  flexWrap: 'wrap',
                  gap: 2
                }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Avatar 
                      src={featuredBlog.authorAvatar} 
                      alt={featuredBlog.author}
                      sx={{ width: 40, height: 40, mr: 1 }}
                    />
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        fontWeight: 600,
                        color: '#3E2723'
                      }}
                    >
                      {featuredBlog.author}
                    </Typography>
                  </Box>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <AccessTimeIcon fontSize="small" sx={{ mr: 0.5, color: '#5D4037' }} />
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        color: '#5D4037',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {featuredBlog.date} • {featuredBlog.readTime}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              <Divider sx={{ mb: 4, borderColor: 'rgba(0,0,0,0.1)' }} />

              <Box sx={{ mb: 4 }}>
                {paragraphs.map((paragraph, index) => {
                  // Check if this is a heading (starts with a number)
                  const isHeading = /^\d\.\s/.test(paragraph);
                  
                  if (isHeading) {
                    return (
                      <Typography
                        key={index}
                        variant="h5"
                        sx={{
                          fontWeight: 700,
                          color: '#B71C1C',
                          mt: 4,
                          mb: 2,
                          position: 'relative',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -4,
                            left: 0,
                            width: 40,
                            height: 2,
                            backgroundColor: '#FF9800',
                            borderRadius: 1,
                          }
                        }}
                      >
                        {paragraph}
                      </Typography>
                    );
                  } else {
                    return (
                      <Typography
                        key={index}
                        variant="body1"
                        paragraph
                        sx={{
                          color: '#5D4037',
                          lineHeight: 1.8,
                          fontSize: '1.1rem',
                          mb: 3
                        }}
                      >
                        {paragraph}
                      </Typography>
                    );
                  }
                })}
              </Box>

              <Box sx={{ 
                display: 'flex', 
                flexDirection: { xs: 'column', sm: 'row' },
                gap: 2,
                mt: 4,
                mb: 2
              }}>
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 160, 0, 0.1)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    flex: 1
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <RestaurantIcon sx={{ color: '#B71C1C', mr: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#B71C1C' }}>
                      A Legacy of Flavor
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    India is home to over 75 varieties of spices, each region contributing its own unique produce.
                  </Typography>
                </Paper>
                
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 160, 0, 0.1)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    flex: 1
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <SpaIcon sx={{ color: '#B71C1C', mr: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#B71C1C' }}>
                      Health Benefits
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Many Indian spices are packed with medicinal benefits, from anti-inflammatory properties to antioxidants.
                  </Typography>
                </Paper>
                
                <Paper
                  elevation={0}
                  sx={{
                    p: 2,
                    borderRadius: 2,
                    background: 'rgba(255, 160, 0, 0.1)',
                    border: '1px solid rgba(255, 160, 0, 0.2)',
                    flex: 1
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                    <EmojiEventsIcon sx={{ color: '#B71C1C', mr: 1 }} />
                    <Typography variant="subtitle1" sx={{ fontWeight: 600, color: '#B71C1C' }}>
                      Global Excellence
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: '#5D4037' }}>
                    Indian red chillies are among the most sought-after in the world for their deep color and pungency.
                  </Typography>
                </Paper>
              </Box>

              <Box sx={{ mt: 6, textAlign: 'center' }}>
                <Button 
                  variant="contained" 
                  color="primary"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  sx={{ 
                    py: 1.5, 
                    px: 4,
                    fontWeight: 600,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
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
            </Box>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Blog; 