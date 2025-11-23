import React, { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Button,
  IconButton,
  Collapse,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Chip,
  Avatar,
  TextField,
  CircularProgress,
  Alert,
  Snackbar,
  Divider
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import { styled } from '@mui/material/styles';

// Product data
const products = [
  {
    id: 1,
    name: 'Red Chili',
    varieties: ['Byadgi', 'Guntur', 'Teja', 'Sannam'],
    uses: 'Adds heat and color to dishes',
    exportType: ['Whole Dried', 'Powdered'],
    image: '/images/products/red-chili.jpg',
    category: 'Spices',
    description: 'Premium quality red chillies with intense heat and rich color, perfect for culinary applications.',
    features: ['High color value', 'Consistent heat level', 'Clean and hygienic', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 2,
    name: 'Turmeric',
    varieties: ['Alleppey', 'Erode', 'Salem'],
    uses: 'Coloring and medicinal properties',
    exportType: ['Whole Fingers', 'Powder'],
    image: '/images/products/turmeric.jpg',
    category: 'Spices',
    description: 'Pure turmeric with high curcumin content, known for its vibrant color and health benefits.',
    features: ['High curcumin content', 'Vibrant color', 'Medicinal properties', 'Clean and pure'],
    icon: <SpaIcon />
  },
  {
    id: 3,
    name: 'Cumin Seeds',
    types: ['Bold', 'Small'],
    uses: 'Aromatic seasoning, digestive aid',
    exportType: ['Raw Seeds'],
    image: '/images/products/cumin.jpg',
    category: 'Spices',
    description: 'Aromatic cumin seeds with intense flavor, essential for many cuisines worldwide.',
    features: ['High oil content', 'Aromatic flavor', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 4,
    name: 'Coriander Seeds & Powder',
    uses: 'Earthy flavor in curries and pickles',
    exportType: ['Whole Seeds', 'Ground Powder'],
    image: '/images/products/coriander.jpg',
    category: 'Spices',
    description: 'Fresh coriander seeds with citrus-like flavor, perfect for seasoning and spice blends.',
    features: ['Aromatic flavor', 'High oil content', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 5,
    name: 'Garlic',
    uses: 'Enhances savory dishes and chutneys',
    exportType: ['Fresh Bulbs', 'Dehydrated Flakes', 'Powder'],
    image: '/images/products/garlic.jpg',
    category: 'Spices',
    description: 'Premium quality garlic with intense flavor and aroma.',
    features: ['High allicin content', 'Intense flavor', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 6,
    name: 'Onion',
    uses: 'Base for gravies, sauces',
    exportType: ['Fresh Red/White Onion', 'Dehydrated Flakes', 'Powder'],
    image: '/images/products/onion.jpg',
    category: 'Spices',
    description: 'Premium quality onions with intense flavor and aroma.',
    features: ['High flavor content', 'Clean and uniform', 'Export quality', 'Consistent quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 7,
    name: 'Fenugreek Seeds',
    uses: 'Bittersweet flavor for pickles, curry powders',
    exportType: ['Whole Seeds'],
    image: '/images/products/fenugreek.jpg',
    category: 'Spices',
    description: 'Premium quality fenugreek seeds with bittersweet flavor.',
    features: ['High flavor content', 'Clean and uniform', 'Export quality', 'Consistent quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 8,
    name: 'Mustard Seeds',
    types: ['Black', 'Yellow'],
    uses: 'Tempering, sauces, pickling',
    exportType: ['Whole Seeds'],
    image: '/images/products/mustard.jpg',
    category: 'Spices',
    description: 'Premium quality mustard seeds with intense flavor and aroma.',
    features: ['High oil content', 'Intense flavor', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 9,
    name: 'Fennel Seeds',
    uses: 'Sweet, refreshing flavor in spice mixes and sweets',
    exportType: ['Whole Seeds'],
    image: '/images/products/fennel.jpg',
    category: 'Spices',
    description: 'Premium quality fennel seeds with sweet, refreshing flavor.',
    features: ['High oil content', 'Sweet flavor', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 10,
    name: 'Black Pepper',
    uses: 'Pungent heat and aroma for seasoning',
    exportType: ['Whole', 'Cracked', 'Powder'],
    image: '/images/products/black-pepper.jpg',
    category: 'Spices',
    description: 'Premium black pepper with intense aroma and flavor.',
    features: ['High piperine content', 'Intense aroma', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 11,
    name: 'Clove',
    uses: 'Strong aromatic spice for rice, teas, and sweets',
    exportType: ['Whole Buds'],
    image: '/images/products/clove.jpg',
    category: 'Spices',
    description: 'Premium quality cloves with intense aroma and flavor.',
    features: ['High oil content', 'Intense aroma', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 12,
    name: 'Cardamom',
    types: ['Green', 'Black'],
    uses: 'Flavoring in sweets, curries, and tea',
    exportType: ['Pods', 'Seeds', 'Powder'],
    image: '/images/products/cardamom.jpg',
    category: 'Spices',
    description: 'Aromatic cardamom with sweet, intense flavor.',
    features: ['High oil content', 'Intense aroma', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 13,
    name: 'Cinnamon',
    uses: 'Sweet and savory dishes',
    exportType: ['Quills', 'Broken Sticks', 'Powder'],
    image: '/images/products/cinnamon.jpg',
    category: 'Spices',
    description: 'Premium quality cinnamon with sweet, intense flavor.',
    features: ['High oil content', 'Sweet flavor', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 14,
    name: 'Bay Leaves',
    uses: 'Aroma in rice, curries, and masala blends',
    exportType: ['Whole Leaves'],
    image: '/images/products/bay-leaves.jpg',
    category: 'Spices',
    description: 'Premium quality bay leaves with intense aroma.',
    features: ['High oil content', 'Intense aroma', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  },
  {
    id: 15,
    name: 'Asafoetida (Hing)',
    uses: 'Strong flavoring agent in dals and pickles',
    exportType: ['Compounded Powder or Lumps'],
    image: '/images/products/asafoetida.jpg',
    category: 'Spices',
    description: 'Premium quality asafoetida with intense aroma and flavor.',
    features: ['High flavor content', 'Intense aroma', 'Clean and uniform', 'Export quality'],
    icon: <RestaurantIcon />
  }
];

// Styled components
const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.3s ease-in-out',
  borderRadius: theme.shape.borderRadius * 2,
  overflow: 'hidden',
  position: 'relative',
  background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
  border: '1px solid rgba(255, 160, 0, 0.2)',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(255, 160, 0, 0.15)',
    '& img': {
      transform: 'scale(1.05)',
    },
    '& .product-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
  }
}));

const ProductIcon = styled(Avatar)(({ theme }) => ({
  position: 'absolute',
  top: theme.spacing(2),
  right: theme.spacing(2),
  backgroundColor: 'rgba(255, 255, 255, 0.9)',
  color: theme.palette.primary.main,
  width: 40,
  height: 40,
  transition: 'all 0.3s ease-in-out',
  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
  zIndex: 2,
}));

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [expandedProduct, setExpandedProduct] = useState(null);
  const [openQuoteDialog, setOpenQuoteDialog] = useState(false);
  const [quoteFormData, setQuoteFormData] = useState({
    name: '',
    email: '',
    company: '',
    quantity: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });

  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };

  const handleToggleExpand = (productId) => {
    setExpandedProduct(expandedProduct === productId ? null : productId);
  };

  const handleQuoteRequest = (product) => {
    setSelectedProduct(product);
    setOpenQuoteDialog(true);
  };

  const handleCloseQuoteDialog = () => {
    setOpenQuoteDialog(false);
    setQuoteFormData({
      name: '',
      email: '',
      company: '',
      quantity: '',
      message: '',
    });
  };

  const handleQuoteFormChange = (event) => {
    const { name, value } = event.target;
    setQuoteFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmitQuote = async (event) => {
    event.preventDefault();
    setLoading(true);

    try {
      const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID || 'service_y5ndcad';
      const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID || 'template_jwe6d1b';
      const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY || 'oQkq8ReYRtBAXH7qK';

      emailjs.init(publicKey);

      const quoteMessage = `Quote Request for: ${selectedProduct?.name || 'N/A'}

Product Details:
- Product: ${selectedProduct?.name || 'N/A'}
- Varieties: ${selectedProduct?.varieties ? selectedProduct.varieties.join(', ') : 'N/A'}
- Export Types: ${selectedProduct?.exportType.join(', ') || 'N/A'}

Customer Information:
- Name: ${quoteFormData.name}
- Email: ${quoteFormData.email}
- Company: ${quoteFormData.company}
- Required Quantity: ${quoteFormData.quantity}

Message:
${quoteFormData.message}`;

      await emailjs.send(serviceId, templateId, {
        from_name: quoteFormData.name,
        from_email: quoteFormData.email,
        subject: `Quote Request for ${selectedProduct?.name || 'Product'}`,
        message: quoteMessage,
        to_email: 'spices@maansindustries.com'
      });

      setSnackbar({
        open: true,
        message: 'Quote request sent successfully! We will contact you soon.',
        severity: 'success'
      });
      handleCloseQuoteDialog();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSnackbar({
        open: true,
        message: 'Failed to send quote request. Please try again.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar(prev => ({ ...prev, open: false }));
  };

  return (
    <Box sx={{
      py: { xs: 10, sm: 12 },
      backgroundColor: '#FFF8E1',
      position: 'relative',
      overflow: 'hidden',
    }}>
      <Box sx={{
        maxWidth: '1200px',
        mx: 'auto',
        px: { xs: 2, sm: 3, md: 4 },
        position: 'relative',
        zIndex: 1
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant="h3"
              component="h1"
              sx={{
                mb: 2,
                fontWeight: 700,
                color: '#B71C1C',
                fontSize: { xs: '2rem', md: '3rem' }
              }}
            >
              Our Premium Spices
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
              Discover our extensive range of premium spices sourced from the finest growing regions worldwide.
            </Typography>
          </Box>
        </motion.div>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: '1fr',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)'
            },
            gap: { xs: 2, sm: 2.5, md: 3 },
            width: '100%'
          }}
        >
          <AnimatePresence>
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                style={{ display: 'flex' }}
              >
                <StyledCard sx={{
                  width: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  minHeight: { xs: 'auto', sm: '550px', md: '580px' }
                }}>
                  <Box sx={{ position: 'relative', height: { xs: 200, sm: 220 } }}>
                    <CardMedia
                      component="img"
                      height="100%"
                      image={product.image}
                      alt={product.name}
                      sx={{ objectFit: 'cover', transition: 'transform 0.5s' }}
                    />
                    <ProductIcon className="product-icon">
                      {product.icon}
                    </ProductIcon>
                  </Box>

                  <CardContent sx={{
                    flexGrow: 1,
                    p: { xs: 2, sm: 2.5 },
                    display: 'flex',
                    flexDirection: 'column'
                  }}>
                    <Typography
                      variant="h6"
                      component="h2"
                      sx={{
                        fontWeight: 700,
                        color: '#5D4037',
                        mb: 1,
                        fontSize: { xs: '1.1rem', sm: '1.2rem' },
                        minHeight: { xs: 'auto', sm: '2.8em' },
                        lineHeight: 1.4,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {product.name}
                    </Typography>

                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{
                        mb: 2,
                        lineHeight: 1.6,
                        fontSize: { xs: '0.85rem', sm: '0.875rem' },
                        minHeight: { xs: 'auto', sm: '4.8em' },
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 3,
                        WebkitBoxOrient: 'vertical'
                      }}
                    >
                      {product.description}
                    </Typography>

                    <Box sx={{
                      display: 'flex',
                      flexWrap: 'wrap',
                      gap: 0.5,
                      mb: 1.5,
                      minHeight: { xs: 'auto', sm: '56px' },
                      alignItems: 'flex-start'
                    }}>
                      {product.exportType.slice(0, 2).map((type, idx) => (
                        <Chip
                          key={idx}
                          size="small"
                          label={type}
                          sx={{
                            fontSize: { xs: '0.7rem', sm: '0.75rem' },
                            bgcolor: 'rgba(183, 28, 28, 0.05)',
                            color: '#B71C1C',
                            border: '1px solid rgba(183, 28, 28, 0.2)'
                          }}
                        />
                      ))}
                    </Box>

                    <Box sx={{
                      display: 'flex',
                      gap: 1,
                      mt: 'auto',
                      flexDirection: { xs: 'column', sm: 'row' }
                    }}>
                      <Button
                        size="small"
                        onClick={() => handleToggleExpand(product.id)}
                        endIcon={expandedProduct === product.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                        sx={{
                          color: '#5D4037',
                          fontSize: { xs: '0.75rem', sm: '0.8rem' }
                        }}
                      >
                        {expandedProduct === product.id ? 'Less' : 'More'}
                      </Button>
                      <Button
                        size="small"
                        variant="contained"
                        onClick={() => handleProductClick(product)}
                        sx={{
                          bgcolor: '#B71C1C',
                          fontSize: { xs: '0.75rem', sm: '0.8rem' },
                          '&:hover': { bgcolor: '#D32F2F' }
                        }}
                      >
                        Details
                      </Button>
                    </Box>
                  </CardContent>

                  <Collapse in={expandedProduct === product.id} timeout="auto" unmountOnExit>
                    <Divider />
                    <Box sx={{ p: 2, bgcolor: 'rgba(255, 248, 225, 0.5)' }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                        Uses:
                      </Typography>
                      <Typography variant="body2" sx={{ mb: 2, color: '#5D4037', fontSize: '0.85rem' }}>
                        {product.uses}
                      </Typography>

                      {product.varieties && (
                        <>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                            Varieties:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mb: 2 }}>
                            {product.varieties.map((variety, idx) => (
                              <Chip key={idx} label={variety} size="small" variant="outlined" />
                            ))}
                          </Box>
                        </>
                      )}

                      {product.types && (
                        <>
                          <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                            Types:
                          </Typography>
                          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                            {product.types.map((type, idx) => (
                              <Chip key={idx} label={type} size="small" variant="outlined" />
                            ))}
                          </Box>
                        </>
                      )}
                    </Box>
                  </Collapse>
                </StyledCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </Box>
      </Box>

      {/* Product Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            overflow: 'hidden'
          }
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{
              p: 0,
              position: 'relative',
              height: 200,
            }}>
              <CardMedia
                component="img"
                height="100%"
                image={selectedProduct.image}
                alt={selectedProduct.name}
                sx={{ objectFit: 'cover' }}
              />
              <Box sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: 'linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.8) 100%)',
              }} />
              <IconButton
                onClick={handleCloseDialog}
                sx={{
                  position: 'absolute',
                  top: 16,
                  right: 16,
                  color: 'white',
                  bgcolor: 'rgba(0,0,0,0.3)',
                  '&:hover': { bgcolor: 'rgba(0,0,0,0.5)' }
                }}
              >
                <CloseIcon />
              </IconButton>
              <Typography variant="h4" sx={{
                position: 'absolute',
                bottom: 24,
                left: 24,
                color: 'white',
                fontWeight: 700,
                textShadow: '0 2px 4px rgba(0,0,0,0.3)'
              }}>
                {selectedProduct.name}
              </Typography>
            </DialogTitle>

            <DialogContent sx={{ p: 4 }}>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#444' }}>
                    {selectedProduct.description}
                  </Typography>
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#B71C1C', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Export Types
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {selectedProduct.exportType.map((type, idx) => (
                        <Chip
                          key={idx}
                          label={type}
                          sx={{
                            bgcolor: '#FFF3E0',
                            color: '#E65100',
                            fontWeight: 600,
                            borderRadius: 1
                          }}
                        />
                      ))}
                    </Box>
                  </Box>

                  {selectedProduct.varieties && (
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#B71C1C', textTransform: 'uppercase', letterSpacing: 1 }}>
                        Varieties
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedProduct.varieties.map((variety, idx) => (
                          <Chip
                            key={idx}
                            label={variety}
                            variant="outlined"
                            sx={{ borderColor: '#E0E0E0', color: '#666' }}
                          />
                        ))}
                      </Box>
                    </Box>
                  )}
                </Grid>

                <Grid item xs={12} md={6}>
                  <Box sx={{ mb: 3 }}>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#B71C1C', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Key Features
                    </Typography>
                    <List dense disablePadding>
                      {selectedProduct.features.map((feature, idx) => (
                        <ListItem key={idx} sx={{ px: 0, py: 0.5 }}>
                          <ListItemIcon sx={{ minWidth: 32 }}>
                            <CheckCircleIcon sx={{ color: '#4CAF50', fontSize: 20 }} />
                          </ListItemIcon>
                          <ListItemText primary={feature} sx={{ '& .MuiTypography-root': { fontWeight: 500, color: '#444' } }} />
                        </ListItem>
                      ))}
                    </List>
                  </Box>

                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 700, mb: 1.5, color: '#B71C1C', textTransform: 'uppercase', letterSpacing: 1 }}>
                      Common Uses
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#666', lineHeight: 1.6 }}>
                      {selectedProduct.uses}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
            </DialogContent>

            <DialogActions sx={{ p: 3, bgcolor: '#FAFAFA', borderTop: '1px solid #F0F0F0' }}>
              <Button
                onClick={handleCloseDialog}
                sx={{ color: '#666', fontWeight: 600 }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                onClick={() => handleQuoteRequest(selectedProduct)}
                size="large"
                sx={{
                  bgcolor: '#B71C1C',
                  px: 4,
                  '&:hover': { bgcolor: '#D32F2F' }
                }}
              >
                Request Quote
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Quote Request Dialog */}
      <Dialog open={openQuoteDialog} onClose={handleCloseQuoteDialog} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ bgcolor: '#B71C1C', color: 'white' }}>
          Request Quote
          <IconButton onClick={handleCloseQuoteDialog} sx={{ position: 'absolute', right: 8, top: 8, color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmitQuote}>
          <DialogContent sx={{ pt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="subtitle2">Product: <strong>{selectedProduct?.name}</strong></Typography>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={quoteFormData.name}
                  onChange={handleQuoteFormChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Your Email"
                  name="email"
                  type="email"
                  value={quoteFormData.email}
                  onChange={handleQuoteFormChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Company Name"
                  name="company"
                  value={quoteFormData.company}
                  onChange={handleQuoteFormChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Required Quantity"
                  name="quantity"
                  value={quoteFormData.quantity}
                  onChange={handleQuoteFormChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  label="Additional Details"
                  name="message"
                  multiline
                  rows={4}
                  value={quoteFormData.message}
                  onChange={handleQuoteFormChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ p: 2 }}>
            <Button onClick={handleCloseQuoteDialog}>Cancel</Button>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{ bgcolor: '#B71C1C', '&:hover': { bgcolor: '#D32F2F' } }}
            >
              {loading ? <CircularProgress size={24} /> : 'Send Request'}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbar.severity}>
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Products;