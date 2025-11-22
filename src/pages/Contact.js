import React, { useState } from 'react';
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
  IconButton,
  useTheme,
  useMediaQuery,
  TextField,
  Button,
  Snackbar,
  Alert,
  CircularProgress
} from '@mui/material';
import { motion } from 'framer-motion';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import SendIcon from '@mui/icons-material/Send';

const Contact = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const contactPersons = [
    {
      name: 'Manav Parmar',
      phone: '7016562635',
      role: 'Primary Contact'
    },
    {
      name: 'Prem Gadhiya',
      phone: '9904421801',
      role: 'Secondary Contact'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      // In a real implementation, you would send this data to your backend
      // which would then send an email to spices@maansindustries.com
      console.log('Form submitted:', formData);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // Show success message
      setSnackbar({
        open: true,
        message: 'Your message has been sent successfully! We will get back to you soon.',
        severity: 'success'
      });
      
      setLoading(false);
    }, 1500);
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };

  return (
    <Box sx={{ 
      py: { xs: 4, sm: 6, md: 8 },
      pt: { xs: '80px', sm: '100px', md: 8 },
      backgroundColor: '#FFF8E1',
      position: 'relative',
      overflow: 'hidden',
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
    }}>
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h3"
            component="h1"
            align="center"
            sx={{ 
              mb: 2, 
              fontWeight: 700, 
              color: '#B71C1C',
              fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem' },
              position: 'relative',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: -10,
                left: '50%',
                transform: 'translateX(-50%)',
                width: { xs: 60, sm: 80, md: 100 },
                height: 4,
                backgroundColor: '#FF9800',
                borderRadius: 2,
              }
            }}
          >
            Contact Us
          </Typography>
          <Typography
            variant="h6"
            align="center"
            sx={{ 
              mb: { xs: 4, sm: 5, md: 6 },
              color: '#5D4037', 
              maxWidth: '800px', 
              mx: 'auto',
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
              px: { xs: 2, sm: 0 },
              lineHeight: 1.6
            }}
          >
            Get in touch with our team for inquiries, quotes, or collaboration opportunities
          </Typography>
        </motion.div>

        <Grid container justifyContent="center" spacing={{ xs: 2, sm: 3, md: 4 }}>
          <Grid item xs={12} md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 2, sm: 3, md: 4 },
                  height: '100%',
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                  border: '1px solid rgba(0, 0, 0, 0.05)',
                  transition: 'all 0.3s ease-in-out',
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-8px)' },
                    boxShadow: '0 12px 24px rgba(0, 0, 0, 0.15)',
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
                  Contact Information
                </Typography>

                <List sx={{ mb: 4 }}>
                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: '#B71C1C', fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Address" 
                      secondary="Popat para, Junu ITI, Chotila - 363520"
                      primaryTypographyProps={{ fontWeight: 600, color: '#3E2723' }}
                      secondaryTypographyProps={{ color: '#5D4037' }}
                    />
                  </ListItem>

                  <ListItem sx={{ mb: 2 }}>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: '#B71C1C', fontSize: 28 }} />
                    </ListItemIcon>
                    <ListItemText 
                      primary="Email" 
                      secondary="spices@maansindustries.com"
                      primaryTypographyProps={{ fontWeight: 600, color: '#3E2723' }}
                      secondaryTypographyProps={{ color: '#5D4037' }}
                    />
                  </ListItem>

                  {contactPersons.map((person, index) => (
                    <ListItem key={index} sx={{ mb: 2 }}>
                      <ListItemIcon>
                        <PersonIcon sx={{ color: '#B71C1C', fontSize: 28 }} />
                      </ListItemIcon>
                      <ListItemText 
                        primary={person.name}
                        secondary={
                          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 0.5 }}>
                            <Typography variant="body2" color="text.secondary">
                              {person.phone}
                            </Typography>
                            <IconButton 
                              size="small" 
                              href={`https://wa.me/91${person.phone}`}
                              target="_blank"
                              sx={{ 
                                color: '#25D366',
                                '&:hover': { transform: 'scale(1.1)' }
                              }}
                            >
                              <WhatsAppIcon fontSize="small" />
                            </IconButton>
                          </Box>
                        }
                        primaryTypographyProps={{ fontWeight: 600, color: '#3E2723' }}
                        secondaryTypographyProps={{ color: '#5D4037' }}
                      />
                    </ListItem>
                  ))}
                </List>

                <Divider sx={{ my: 3, borderColor: 'rgba(0, 0, 0, 0.1)' }} />

                <Typography 
                  variant="h6" 
                  gutterBottom 
                  sx={{ 
                    fontWeight: 600, 
                    color: '#B71C1C',
                    mb: 2
                  }}
                >
                  Why Contact Us?
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                  {[
                    'Request product information and pricing',
                    'Discuss partnership opportunities',
                    'Get assistance with your orders',
                    'Schedule a meeting with our team'
                  ].map((item, index) => (
                    <Typography 
                      key={index}
                      variant="body2" 
                      sx={{ 
                        color: '#5D4037',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 1,
                        '&::before': {
                          content: '""',
                          width: 6,
                          height: 6,
                          backgroundColor: '#FF9800',
                          borderRadius: '50%',
                        }
                      }}
                    >
                      {item}
                    </Typography>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={8} lg={6}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper 
                elevation={0}
                sx={{ 
                  p: { xs: 2, sm: 3, md: 5 },
                  borderRadius: 3,
                  background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
                  border: '1px solid rgba(255, 160, 0, 0.2)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.3s ease-in-out',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    background: `radial-gradient(circle at 70% 30%, rgba(255, 160, 0, 0.1) 0%, rgba(255, 160, 0, 0) 70%)`,
                    zIndex: 0,
                  },
                  '&:hover': {
                    transform: { xs: 'none', md: 'translateY(-8px)' },
                    boxShadow: '0 12px 40px rgba(0, 0, 0, 0.12)',
                  }
                }}
              >
                <Box sx={{ position: 'relative', zIndex: 1 }}>
                  <Typography 
                    variant="h5" 
                    component="h2" 
                    gutterBottom 
                    sx={{ 
                      fontWeight: 700, 
                      color: '#B71C1C',
                      mb: 4,
                      position: 'relative',
                      textAlign: 'center',
                      '&::after': {
                        content: '""',
                        position: 'absolute',
                        bottom: -12,
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: 80,
                        height: 3,
                        backgroundColor: '#FF9800',
                        borderRadius: 1.5,
                      }
                    }}
                  >
                    Send Us a Message
                  </Typography>

                  <form onSubmit={handleSubmit}>
                    <Grid container spacing={3}>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Your Name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              backgroundColor: 'rgba(255, 255, 255, 0.7)',
                              '& fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: 1,
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF9800',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#B71C1C',
                                borderWidth: 2,
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#5D4037',
                              '&.Mui-focused': {
                                color: '#B71C1C',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12} sm={6}>
                        <TextField
                          required
                          fullWidth
                          label="Your Email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              backgroundColor: 'rgba(255, 255, 255, 0.7)',
                              '& fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: 1,
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF9800',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#B71C1C',
                                borderWidth: 2,
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#5D4037',
                              '&.Mui-focused': {
                                color: '#B71C1C',
                              },
                            },
                          }}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          label="Subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              borderRadius: 2,
                              backgroundColor: 'rgba(255, 255, 255, 0.7)',
                              '& fieldset': {
                                borderColor: 'rgba(0, 0, 0, 0.1)',
                                borderWidth: 1,
                              },
                              '&:hover fieldset': {
                                borderColor: '#FF9800',
                              },
                              '&.Mui-focused fieldset': {
                                borderColor: '#B71C1C',
                                borderWidth: 2,
                              },
                            },
                            '& .MuiInputLabel-root': {
                              color: '#5D4037',
                              '&.Mui-focused': {
                                color: '#B71C1C',
                              },
                            },
                          }}
                        />
                      </Grid>
                    </Grid>
                    <Box sx={{ mt: 3, mx: 0, mr: { xs: 0, sm: 5.5 } }}>
                      <TextField
                        required
                        fullWidth
                        label="Your Message"
                        name="message"
                        multiline
                        rows={8}
                        value={formData.message}
                        onChange={handleChange}
                        variant="outlined"
                        sx={{
                          width: { xs: '100%', sm: 'calc(100% + 48px)' },
                          '& .MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            '& fieldset': {
                              borderColor: 'rgba(0, 0, 0, 0.1)',
                              borderWidth: 1,
                            },
                            '&:hover fieldset': {
                              borderColor: '#FF9800',
                            },
                            '&.Mui-focused fieldset': {
                              borderColor: '#B71C1C',
                              borderWidth: 2,
                            },
                          },
                          '& .MuiInputLabel-root': {
                            color: '#5D4037',
                            '&.Mui-focused': {
                              color: '#B71C1C',
                            },
                          },
                        }}
                      />
                    </Box>
                    <Grid container spacing={3} sx={{ mt: 3 }}>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="contained"
                          size="large"
                          fullWidth
                          disabled={loading}
                          endIcon={loading ? <CircularProgress size={20} color="inherit" /> : <SendIcon />}
                          sx={{
                            py: 1.8,
                            fontWeight: 600,
                            borderRadius: 2,
                            fontSize: '1.1rem',
                            background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
                            boxShadow: '0 4px 12px rgba(183, 28, 28, 0.3)',
                            transition: 'all 0.3s ease-in-out',
                            '&:hover': {
                              background: 'linear-gradient(135deg, #7F0000 0%, #B71C1C 100%)',
                              boxShadow: '0 6px 16px rgba(183, 28, 28, 0.4)',
                              transform: 'translateY(-2px)',
                            },
                            '&:disabled': {
                              background: 'linear-gradient(135deg, #B71C1C 0%, #7F0000 100%)',
                              opacity: 0.7,
                            }
                          }}
                        >
                          {loading ? 'Sending...' : 'Send Message'}
                        </Button>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      <Snackbar 
        open={snackbar.open} 
        autoHideDuration={6000} 
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseSnackbar} 
          severity={snackbar.severity}
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 