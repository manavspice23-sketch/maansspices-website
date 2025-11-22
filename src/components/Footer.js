import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import { Link as RouterLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#3E2723',
        color: '#FFF8E1',
        py: { xs: 4, sm: 5, md: 6 },
        mt: 'auto',
        borderTop: '1px solid rgba(255,255,255,0.1)',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 3, sm: 4 }}>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 600, 
              color: '#FF8F00',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}>
              MaansSpices
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.8, 
              mb: 2,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Your trusted partner in spice import/export solutions. We connect businesses worldwide through reliable spice trading services.
            </Typography>
            <Box sx={{ mb: { xs: 2, sm: 0 } }}>
              <IconButton 
                color="inherit" 
                aria-label="Facebook" 
                sx={{ 
                  mr: 1,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="Twitter" 
                sx={{ 
                  mr: 1,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="LinkedIn" 
                sx={{ 
                  mr: 1,
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                <LinkedInIcon />
              </IconButton>
              <IconButton 
                color="inherit" 
                aria-label="Email"
                sx={{ 
                  fontSize: { xs: '1.25rem', sm: '1.5rem' }
                }}
              >
                <EmailIcon />
              </IconButton>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 600, 
              color: '#FF8F00',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}>
              Quick Links
            </Typography>
            <Box sx={{ 
              display: 'flex', 
              flexDirection: 'column',
              '& > a': {
                py: { xs: 1, sm: 0.5 },
                fontSize: { xs: '0.875rem', sm: '1rem' }
              }
            }}>
              <Link 
                component={RouterLink} 
                to="/" 
                color="inherit" 
                sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1, color: '#FF8F00' } }}
              >
                Home
              </Link>
              <Link 
                component={RouterLink} 
                to="/products" 
                color="inherit" 
                sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1, color: '#FF8F00' } }}
              >
                Products
              </Link>
              <Link 
                component={RouterLink} 
                to="/about" 
                color="inherit" 
                sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1, color: '#FF8F00' } }}
              >
                About Us
              </Link>
              <Link 
                component={RouterLink} 
                to="/blog" 
                color="inherit" 
                sx={{ mb: 1, opacity: 0.8, '&:hover': { opacity: 1, color: '#FF8F00' } }}
              >
                Blog
              </Link>
              <Link 
                component={RouterLink} 
                to="/contact" 
                color="inherit" 
                sx={{ opacity: 0.8, '&:hover': { opacity: 1, color: '#FF8F00' } }}
              >
                Contact Us
              </Link>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Typography variant="h6" gutterBottom sx={{ 
              fontWeight: 600, 
              color: '#FF8F00',
              fontSize: { xs: '1.1rem', sm: '1.25rem' }
            }}>
              Contact Info
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.8, 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Email: spices@maansindustries.com
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.8, 
              mb: 1,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Phone: 7016562635
            </Typography>
            <Typography variant="body2" sx={{ 
              opacity: 0.8,
              fontSize: { xs: '0.875rem', sm: '1rem' }
            }}>
              Address: Popat para, Junu ITI, Chotila - 363520
            </Typography>
          </Grid>
        </Grid>
        <Box sx={{ 
          mt: { xs: 3, sm: 4 }, 
          pt: { xs: 1.5, sm: 2 },
          borderTop: '1px solid rgba(255,255,255,0.1)'
        }}>
          <Typography variant="body2" color="text.secondary" align="center" sx={{
            fontSize: { xs: '0.75rem', sm: '0.875rem' }
          }}>
            © {new Date().getFullYear()} MaansSpices. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 