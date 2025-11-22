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
  CardActions,
  Paper,
  Divider,
  useTheme,
  useMediaQuery,
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
  Snackbar
} from '@mui/material';
import { motion, AnimatePresence } from 'framer-motion';
import CloseIcon from '@mui/icons-material/Close';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
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
    description: 'Premium quality red chillies with intense heat and rich color, perfect for culinary applications. Available in various heat levels to suit your specific needs.',
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
    description: 'Pure turmeric with high curcumin content, known for its vibrant color and health benefits. Sourced from the finest growing regions in India.',
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
    description: 'Aromatic cumin seeds with intense flavor, essential for many cuisines worldwide. Available in both bold and small varieties to suit your specific needs.',
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
    description: 'Fresh coriander seeds with citrus-like flavor, perfect for seasoning and spice blends. Available in both whole and ground forms.',
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
    description: 'Premium quality garlic with intense flavor and aroma, perfect for enhancing savory dishes and chutneys. Available in fresh, dehydrated, and powdered forms.',
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
    description: 'Premium quality onions with intense flavor and aroma, perfect for use as a base in gravies and sauces. Available in fresh, dehydrated, and powdered forms.',
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
    description: 'Premium quality fenugreek seeds with bittersweet flavor, perfect for use in pickles and curry powders. Known for its distinctive aroma and flavor.',
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
    description: 'Premium quality mustard seeds with intense flavor and aroma, perfect for tempering, sauces, and pickling. Available in both black and yellow varieties.',
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
    description: 'Premium quality fennel seeds with sweet, refreshing flavor, perfect for use in spice mixes and sweets. Known for its distinctive aroma and flavor.',
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
    description: 'Premium black pepper with intense aroma and flavor, sourced from the finest growing regions. Available in whole, cracked, and powdered forms.',
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
    description: 'Premium quality cloves with intense aroma and flavor, perfect for use in rice, teas, and sweets. Known for its distinctive aroma and flavor.',
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
    description: 'Aromatic cardamom with sweet, intense flavor, ideal for both sweet and savory dishes. Available in green and black varieties, in pods, seeds, and powdered forms.',
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
    description: 'Premium quality cinnamon with sweet, intense flavor, perfect for use in both sweet and savory dishes. Available in quills, broken sticks, and powdered forms.',
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
    description: 'Premium quality bay leaves with intense aroma, perfect for use in rice, curries, and masala blends. Known for its distinctive aroma and flavor.',
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
    description: 'Premium quality asafoetida with intense aroma and flavor, perfect for use as a flavoring agent in dals and pickles. Available in compounded powder or lumps.',
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
    '& .MuiCardMedia-root': {
      transform: 'scale(1.05)',
    },
    '& .product-overlay': {
      opacity: 1,
    },
    '& .product-icon': {
      transform: 'scale(1.1) rotate(5deg)',
      backgroundColor: theme.palette.primary.main,
      color: 'white',
    },
    '& .product-title': {
      color: theme.palette.primary.main,
    },
    '& .product-description': {
      color: theme.palette.text.primary,
    },
    '& .product-chip': {
      backgroundColor: 'rgba(183, 28, 28, 0.1)',
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
    }
  }
}));

const ProductImage = styled(CardMedia)(({ theme }) => ({
  height: 200,
  transition: 'transform 0.5s ease-in-out',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.2) 100%)',
  }
}));

const ProductOverlay = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  padding: theme.spacing(2),
  opacity: 0,
  transition: 'opacity 0.3s ease-in-out',
  zIndex: 1,
}));

const ProductChip = styled(Chip)(({ theme }) => ({
  margin: theme.spacing(0.5),
  borderRadius: theme.shape.borderRadius,
  fontWeight: 600,
  transition: 'all 0.3s ease-in-out',
  '&.MuiChip-colorPrimary': {
    backgroundColor: 'rgba(183, 28, 28, 0.05)',
    color: theme.palette.primary.main,
    borderColor: 'rgba(183, 28, 28, 0.2)',
  },
  '&.MuiChip-colorSecondary': {
    backgroundColor: 'rgba(93, 64, 55, 0.05)',
    color: theme.palette.secondary.main,
    borderColor: 'rgba(93, 64, 55, 0.2)',
  },
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const isTablet = useMediaQuery(theme.breakpoints.down('md'));
  
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
  
  // Handle product click
  const handleProductClick = (product) => {
    setSelectedProduct(product);
    setOpenDialog(true);
  };
  
  // Handle dialog close
  const handleCloseDialog = () => {
    setOpenDialog(false);
    setSelectedProduct(null);
  };
  
  // Handle expand/collapse product details
  const handleToggleExpand = (productId) => {
    if (expandedProduct === productId) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(productId);
    }
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

    // Prepare email data
    const emailData = {
      to: 'spices@maansindustries.com',
      subject: `Quote Request for ${selectedProduct?.name}`,
      data: {
        productName: selectedProduct?.name,
        customerName: quoteFormData.name,
        customerEmail: quoteFormData.email,
        companyName: quoteFormData.company,
        quantity: quoteFormData.quantity,
        message: quoteFormData.message,
        exportTypes: selectedProduct?.exportType.join(', '),
        varieties: selectedProduct?.varieties ? selectedProduct?.varieties.join(', ') : 'N/A'
      }
    };

    try {
      // Here you would typically send this data to your backend API
      // For example:
      // await fetch('/api/send-quote', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(emailData)
      // });

      // For now, we'll simulate the API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setSnackbar({
        open: true,
        message: 'Quote request sent successfully! We will contact you soon.',
        severity: 'success'
      });
      handleCloseQuoteDialog();
    } catch (error) {
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
              Discover our extensive range of premium spices sourced from the finest growing regions worldwide. Each product undergoes rigorous quality testing to ensure purity, flavor, and aroma.
            </Typography>
          </Box>
        </motion.div>
        
        {/* Products Grid - Fixed 3 columns */}
        <Grid container spacing={3} justifyContent="center">
          <AnimatePresence>
            {products.map((product, index) => (
              <Grid item key={product.id} xs={12} sm={6} md={4} sx={{ width: '33.33%' }}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  <StyledCard>
                    <Box sx={{ position: 'relative', height: 200 }}>
                      <ProductImage
                        component="img"
                        image={product.image}
                        alt={product.name}
                        sx={{ 
                          objectFit: 'cover',
                          height: '100%',
                          width: '100%'
                        }}
                      />
                      <ProductIcon className="product-icon">
                        {product.icon}
                      </ProductIcon>
                      <ProductOverlay className="product-overlay">
                        <Button 
                          variant="contained" 
                          color="primary"
                          onClick={() => handleProductClick(product)}
                          sx={{ 
                            fontWeight: 600,
                            borderRadius: 2,
                            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                            background: 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 100%)',
                          }}
                        >
                          View Details
                        </Button>
                      </ProductOverlay>
                    </Box>
                    <CardContent sx={{ flexGrow: 1, p: 2, display: 'flex', flexDirection: 'column' }}>
                      <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2" 
                        className="product-title"
                        sx={{ 
                          fontWeight: 700,
                          color: '#5D4037',
                          mb: 1,
                          fontSize: '1.2rem',
                          position: 'relative',
                          display: 'inline-block',
                          transition: 'color 0.3s ease-in-out',
                          '&::after': {
                            content: '""',
                            position: 'absolute',
                            bottom: -5,
                            left: 0,
                            width: '50%',
                            height: 2,
                            backgroundColor: 'rgba(183, 28, 28, 0.3)',
                            borderRadius: 1,
                            transition: 'width 0.3s ease-in-out',
                          },
                          '&:hover::after': {
                            width: '100%',
                          }
                        }}
                      >
                        {product.name}
                      </Typography>
                      <Typography 
                        variant="body2" 
                        color="text.secondary"
                        className="product-description"
                        sx={{ 
                          mb: 2,
                          lineHeight: 1.6,
                          height: '3.2em',
                          overflow: 'hidden',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          flexGrow: 1,
                          fontSize: '0.875rem',
                          transition: 'color 0.3s ease-in-out',
                        }}
                      >
                        {product.description}
                      </Typography>
                      
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', mb: 2 }}>
                        {product.exportType && product.exportType.slice(0, 2).map((type, idx) => (
                          <ProductChip
                            key={idx}
                            size="small"
                            label={type}
                            color="primary"
                            variant="outlined"
                            className="product-chip"
                            sx={{ fontSize: '0.75rem' }}
                          />
                        ))}
                      </Box>
                      
                      <Box sx={{ 
                        display: 'flex', 
                        justifyContent: 'space-between', 
                        alignItems: 'center', 
                        mt: 'auto',
                        borderTop: '1px solid rgba(0, 0, 0, 0.05)',
                        pt: 1,
                      }}>
                        <Button 
                          size="small" 
                          color="primary"
                          onClick={() => handleToggleExpand(product.id)}
                          endIcon={expandedProduct === product.id ? <ExpandLessIcon /> : <ExpandMoreIcon />}
                          sx={{ 
                            fontWeight: 600, 
                            fontSize: '0.75rem',
                            color: '#5D4037',
                            '&:hover': {
                              backgroundColor: 'rgba(183, 28, 28, 0.05)',
                            }
                          }}
                        >
                          {expandedProduct === product.id ? 'Less' : 'More'}
                        </Button>
                        <Button 
                          size="small" 
                          variant="contained" 
                          color="primary"
                          onClick={() => handleProductClick(product)}
                          sx={{ 
                            fontWeight: 600,
                            borderRadius: 2,
                            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                            fontSize: '0.75rem',
                            background: 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 100%)',
                          }}
                        >
                          Details
                        </Button>
                      </Box>
                    </CardContent>
                    
                    <Collapse in={expandedProduct === product.id} timeout="auto" unmountOnExit>
                      <Divider />
                      <Box sx={{ 
                        p: 2, 
                        bgcolor: 'rgba(255, 248, 225, 0.5)',
                        borderTop: '1px solid rgba(255, 160, 0, 0.1)',
                      }}>
                        <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C', fontSize: '0.8rem' }}>
                          Uses:
                        </Typography>
                        <Typography variant="body2" sx={{ mb: 2, fontSize: '0.75rem', color: '#5D4037' }}>
                          {product.uses}
                        </Typography>
                        
                        {product.varieties && (
                          <>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C', fontSize: '0.8rem' }}>
                              Varieties:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {product.varieties.map((variety, idx) => (
                                <Chip 
                                  key={idx} 
                                  size="small" 
                                  label={variety} 
                                  variant="outlined"
                                  className="product-chip"
                                  sx={{ 
                                    borderColor: 'rgba(255, 160, 0, 0.3)',
                                    color: '#5D4037',
                                    fontSize: '0.7rem',
                                    backgroundColor: 'rgba(255, 248, 225, 0.5)',
                                  }}
                                />
                              ))}
                            </Box>
                          </>
                        )}
                        
                        {product.types && (
                          <>
                            <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 1, mt: 2, color: '#B71C1C', fontSize: '0.8rem' }}>
                              Types:
                            </Typography>
                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                              {product.types.map((type, idx) => (
                                <Chip 
                                  key={idx} 
                                  size="small" 
                                  label={type} 
                                  variant="outlined"
                                  className="product-chip"
                                  sx={{ 
                                    borderColor: 'rgba(255, 160, 0, 0.3)',
                                    color: '#5D4037',
                                    fontSize: '0.7rem',
                                    backgroundColor: 'rgba(255, 248, 225, 0.5)',
                                  }}
                                />
                              ))}
                            </Box>
                          </>
                        )}
                      </Box>
                    </Collapse>
                  </StyledCard>
                </motion.div>
              </Grid>
            ))}
          </AnimatePresence>
        </Grid>
      </Container>
      
      {/* Product Detail Dialog */}
      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 2,
            overflow: 'hidden',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(135deg, #FFF8E1 0%, #FFECB3 100%)',
          }
        }}
      >
        {selectedProduct && (
          <>
            <DialogTitle sx={{ 
              color: 'white',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              background: 'linear-gradient(135deg, #B71C1C 0%, #D32F2F 100%)',
            }}>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {selectedProduct.name}
              </Typography>
              <IconButton 
                onClick={handleCloseDialog}
                sx={{ color: 'white' }}
              >
                <CloseIcon />
              </IconButton>
            </DialogTitle>
            <DialogContent sx={{ p: 0 }}>
              <Box sx={{ position: 'relative' }}>
                <CardMedia
                  component="img"
                  height="300"
                  image={selectedProduct.image}
                  alt={selectedProduct.name}
                  sx={{ objectFit: 'cover' }}
                />
                <Box sx={{ 
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '100px',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)',
                }} />
                <ProductIcon 
                  className="product-icon"
                  sx={{ 
                    position: 'absolute',
                    top: 16,
                    right: 16,
                    width: 50,
                    height: 50,
                    backgroundColor: 'white',
                    color: '#B71C1C',
                    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.2)',
                  }}
                >
                  {selectedProduct.icon}
                </ProductIcon>
              </Box>
              
              <Box sx={{ p: 3 }}>
                <Typography variant="body1" paragraph sx={{ lineHeight: 1.8, color: '#5D4037' }}>
                  {selectedProduct.description}
                </Typography>
                
                <Grid container spacing={3}>
                  <Grid item xs={12} md={6}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 248, 225, 0.5)',
                        border: '1px solid rgba(255, 160, 0, 0.15)',
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                        Uses
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#5D4037' }}>
                        {selectedProduct.uses}
                      </Typography>
                    </Paper>
                  </Grid>
                  
                  <Grid item xs={12} md={6}>
                    <Paper 
                      elevation={0} 
                      sx={{ 
                        p: 2, 
                        borderRadius: 2,
                        bgcolor: 'rgba(255, 248, 225, 0.5)',
                        border: '1px solid rgba(255, 160, 0, 0.15)',
                      }}
                    >
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                        Export Types
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {selectedProduct.exportType.map((type, idx) => (
                          <Chip 
                            key={idx} 
                            label={type} 
                            color="primary"
                            variant="outlined"
                            sx={{ 
                              borderColor: 'rgba(255, 160, 0, 0.3)',
                              color: '#5D4037',
                              backgroundColor: 'rgba(255, 248, 225, 0.5)',
                            }}
                          />
                        ))}
                      </Box>
                    </Paper>
                  </Grid>
                  
                  {selectedProduct.varieties && (
                    <Grid item xs={12}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 248, 225, 0.5)',
                          border: '1px solid rgba(255, 160, 0, 0.15)',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                          Varieties
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {selectedProduct.varieties.map((variety, idx) => (
                            <Chip 
                              key={idx} 
                              label={variety} 
                              color="primary"
                              variant="outlined"
                              sx={{ 
                                borderColor: 'rgba(255, 160, 0, 0.3)',
                                color: '#5D4037',
                                backgroundColor: 'rgba(255, 248, 225, 0.5)',
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  )}
                  
                  {selectedProduct.types && (
                    <Grid item xs={12}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 248, 225, 0.5)',
                          border: '1px solid rgba(255, 160, 0, 0.15)',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                          Types
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                          {selectedProduct.types.map((type, idx) => (
                            <Chip 
                              key={idx} 
                              label={type} 
                              color="primary"
                              variant="outlined"
                              sx={{ 
                                borderColor: 'rgba(255, 160, 0, 0.3)',
                                color: '#5D4037',
                                backgroundColor: 'rgba(255, 248, 225, 0.5)',
                              }}
                            />
                          ))}
                        </Box>
                      </Paper>
                    </Grid>
                  )}
                  
                  {selectedProduct.features && (
                    <Grid item xs={12}>
                      <Paper 
                        elevation={0} 
                        sx={{ 
                          p: 2, 
                          borderRadius: 2,
                          bgcolor: 'rgba(255, 248, 225, 0.5)',
                          border: '1px solid rgba(255, 160, 0, 0.15)',
                        }}
                      >
                        <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 1, color: '#B71C1C' }}>
                          Features
                        </Typography>
                        <List dense>
                          {selectedProduct.features.map((feature, idx) => (
                            <ListItem key={idx} sx={{ py: 0.5 }}>
                              <ListItemIcon sx={{ minWidth: 36 }}>
                                <CheckCircleIcon sx={{ color: '#B71C1C' }} fontSize="small" />
                              </ListItemIcon>
                              <ListItemText primary={feature} sx={{ color: '#5D4037' }} />
                            </ListItem>
                          ))}
                        </List>
                      </Paper>
                    </Grid>
                  )}
                </Grid>
              </Box>
            </DialogContent>
            <DialogActions sx={{ p: 2, bgcolor: 'rgba(255, 248, 225, 0.5)' }}>
              <Button 
                onClick={handleCloseDialog}
                sx={{ 
                  fontWeight: 600,
                  color: '#5D4037',
                  '&:hover': {
                    backgroundColor: 'rgba(255, 160, 0, 0.05)',
                  }
                }}
              >
                Close
              </Button>
              <Button
                variant="contained"
                onClick={() => handleQuoteRequest(selectedProduct)}
                sx={{
                  background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
                  color: 'white',
                  '&:hover': {
                    background: 'linear-gradient(45deg, #932121 30%, #FF8F00 90%)',
                  }
                }}
              >
                Request Quote
              </Button>
            </DialogActions>
          </>
        )}
      </Dialog>

      {/* Quote Request Dialog */}
      <Dialog
        open={openQuoteDialog}
        onClose={handleCloseQuoteDialog}
        maxWidth="sm"
        fullWidth
      >
        <DialogTitle sx={{ 
          background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
          color: 'white',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}>
          Request Quote for {selectedProduct?.name}
          <IconButton
            aria-label="close"
            onClick={handleCloseQuoteDialog}
            sx={{ color: 'white' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <form onSubmit={handleSubmitQuote}>
          <DialogContent sx={{ pt: 3 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  label="Your Name"
                  name="name"
                  value={quoteFormData.name}
                  onChange={handleQuoteFormChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#FF8F00',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#B71C1C',
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
                  value={quoteFormData.email}
                  onChange={handleQuoteFormChange}
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#FF8F00',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#B71C1C',
                      },
                    },
                  }}
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
                  variant="outlined"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#FF8F00',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#B71C1C',
                      },
                    },
                  }}
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
                  variant="outlined"
                  placeholder="e.g., 100 kg"
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#FF8F00',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#B71C1C',
                      },
                    },
                  }}
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
                  variant="outlined"
                  placeholder="Please specify any additional requirements or questions..."
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      '&:hover fieldset': {
                        borderColor: '#FF8F00',
                      },
                      '&.Mui-focused fieldset': {
                        borderColor: '#B71C1C',
                      },
                    },
                  }}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions sx={{ px: 3, pb: 3 }}>
            <Button 
              onClick={handleCloseQuoteDialog} 
              color="inherit"
              disabled={loading}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              variant="contained"
              disabled={loading}
              sx={{
                background: 'linear-gradient(45deg, #B71C1C 30%, #FF8F00 90%)',
                color: 'white',
                '&:hover': {
                  background: 'linear-gradient(45deg, #932121 30%, #FF8F00 90%)',
                },
              }}
            >
              {loading ? (
                <CircularProgress size={24} color="inherit" />
              ) : (
                'Send Quote Request'
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>

      {/* Success/Error Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
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

export default Products; 