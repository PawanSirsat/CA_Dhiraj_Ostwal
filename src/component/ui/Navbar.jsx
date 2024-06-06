import CloseIcon from '@mui/icons-material/Close'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import MenuIcon from '@mui/icons-material/Menu'
import {
  Box,
  Button,
  Collapse,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { useTheme } from '@mui/material/styles'
import React, { useState } from 'react'
import logo from './assets/CALOGO.png'
import './navbar.css'

const Navbar = () => {
  const [open, setOpen] = React.useState(false)
  const theme = useTheme()

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const [showServicesDropdown, setShowServicesDropdown] = useState(false)
  const [showInsightsDropdown, setShowInsightsDropdown] = useState(false)

  const toggleServicesDropdown = () => {
    setShowServicesDropdown((prev) => !prev)
    if (showInsightsDropdown) {
      setShowInsightsDropdown(false)
    }
  }

  const toggleInsightsDropdown = () => {
    setShowInsightsDropdown((prev) => !prev)
    if (showServicesDropdown) {
      setShowServicesDropdown(false)
    }
  }

  const [openServices, setOpenServices] = React.useState(false)
  const [openInsights, setOpenInsights] = React.useState(false)

  const handleToggleServices = () => {
    setOpenServices(!openServices)
  }

  const handleToggleInsights = () => {
    setOpenInsights(!openInsights)
  }

  const DrawerList = (
    <Box sx={{ width: '50vw' }} role='presentation'>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          justifyContent: 'flex-end',
        }}
      >
        <IconButton
          onClick={handleDrawerClose}
          sx={{
            paddingRight: '40px',
          }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={handleToggleServices}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Services
            </ListItemText>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={openServices} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Business Strategist' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Advisory' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Startup Funding' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Consultation' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={handleToggleInsights}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Insights
            </ListItemText>
            <ListItemIcon>
              <KeyboardArrowDownIcon />
            </ListItemIcon>
          </ListItemButton>
        </ListItem>
        <Collapse in={openInsights} timeout='auto' unmountOnExit>
          <List component='div' disablePadding>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Apple' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Ball' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Cat' />
            </ListItemButton>
            <ListItemButton
              sx={{
                justifyContent: 'center',
                textAlign: 'center',
                width: '100%',
              }}
            >
              <ListItemText primary='Dog' />
            </ListItemButton>
          </List>
        </Collapse>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={() => setRaj((prev) => !prev)}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Career
            </ListItemText>
          </ListItemButton>
        </ListItem>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton
            sx={{
              height: '5rem',
              paddingLeft: '40px',
              '@media (max-width:600px)': {
                paddingLeft: '20px',
              },
            }}
            onClick={() => setRaj((prev) => !prev)}
          >
            <ListItemText
              primaryTypographyProps={{
                sx: {
                  fontWeight: 'bold',
                  fontSize: '1.2rem',
                  '@media (max-width:600px)': {
                    fontSize: '0.8rem',
                  },
                },
              }}
            >
              Contact
            </ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  )

  return (
    <div className='nav'>
      <img src={logo} alt='logo' className='nav-logo' />
      <div className='nav-cont'>
        <button className='nav-title'>Home</button>
        <button className='nav-title' onClick={toggleServicesDropdown}>
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
            Services
            {showServicesDropdown ? (
              <KeyboardArrowUpIcon sx={{ paddingLeft: '2px' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ paddingLeft: '2px' }} />
            )}
          </span>
        </button>
        {showServicesDropdown && (
          <div className='dropdownService'>
            <button className='dropdown-item'>Business Strategist</button>
            <button className='dropdown-item'>Advisory</button>
            <button className='dropdown-item'>Startup Funding</button>
            <button className='dropdown-item'>Consultation</button>
          </div>
        )}
        <button className='nav-title' onClick={toggleInsightsDropdown}>
          <span style={{ display: 'flex', alignItems: 'flex-end' }}>
            Insights
            {showInsightsDropdown ? (
              <KeyboardArrowUpIcon sx={{ paddingLeft: '2px' }} />
            ) : (
              <KeyboardArrowDownIcon sx={{ paddingLeft: '2px' }} />
            )}
          </span>
        </button>
        {showInsightsDropdown && (
          <div className='dropdownInsights'>
            <button className='dropdown-item'>apple</button>
            <button className='dropdown-item'>ball</button>
            <button className='dropdown-item'>cat</button>
            <button className='dropdown-item'>dog</button>
          </div>
        )}
        <button className='nav-title'>Career</button>
        <button className='nav-title'>Contact</button>
      </div>
      <div className='menu'>
        <Button onClick={toggleDrawer(true)}>
          <MenuIcon sx={{ color: 'black', fontSize: '3rem' }} />
        </Button>
      </div>
      <Drawer
        sx={{ marginTop: '4rem', height: `calc(100% - 4rem)` }}
        anchor='right'
        open={open}
        onClose={toggleDrawer(false)}
      >
        {DrawerList}
      </Drawer>
    </div>
  )
}

export default Navbar
