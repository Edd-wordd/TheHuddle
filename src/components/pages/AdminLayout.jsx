import * as React from 'react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import ButtonBase from '@mui/material/ButtonBase'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import ListItemIcon from '@mui/material/ListItemIcon'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import AccountCircle from '@mui/icons-material/AccountCircle'
import AccountBoxIcon from '@mui/icons-material/AccountBox'
import SettingsIcon from '@mui/icons-material/Settings'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { Outlet } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import Footer from '../layout/Footer'
import { AdminListItems } from '../layout/SideNavBar'
import { mainPaper, mainBackground } from '../../styles/adminStyles'

const drawerWidth = 240

const AppBar = styled(MuiAppBar, { shouldForwardProp: (p) => p !== 'open' })(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  background: 'linear-gradient(90deg, #0b0c0f 0%, #1c0b16 25%, #10141b 55%, #0c1714 100%)',
  color: '#e8ebf4',
  boxShadow: '0 10px 40px rgba(0,0,0,0.55)',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  backdropFilter: 'blur(12px)',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (p) => p !== 'open' })(({ theme, open }) => ({
  '& .MuiDrawer-paper': {
    position: 'relative',
    whiteSpace: 'nowrap',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'rgba(10, 10, 12, 0.95)',
    color: '#e9ecf5',
    borderRight: '1px solid rgba(255,255,255,0.08)',
    backdropFilter: 'blur(10px)',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: 'border-box',
    ...(!open && {
      overflowX: 'hidden',
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up('sm')]: { width: theme.spacing(9) },
    }),
  },
}))

export default function AdminLayout() {
  const [open, setOpen] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const navigate = useNavigate()

  const toggleDrawer = () => setOpen((o) => !o)
  const handleProfileOpen = (e) => setAnchorEl(e.currentTarget)
  const handleMenuClose = () => setAnchorEl(null)
  const handleLogout = async () => {
    try {
      await null()
      navigate('/signin')
    } catch (error) {
      console.error('Error during logout:', error)
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar position="absolute" open={open}>
        <Toolbar sx={{ pr: '24px' }}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ marginRight: '36px', ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
            {false ? `${false.displayName} — Admin` : 'Admin'}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <Toolbar sx={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', px: 1 }}>
          <IconButton onClick={toggleDrawer}>
            <ChevronLeftIcon />
          </IconButton>
        </Toolbar>
        <Divider />
        <List component="nav" sx={{ flex: 1, overflow: 'auto' }}>
          <AdminListItems />
        </List>
        <Divider sx={{ borderColor: 'rgba(255,255,255,0.08)' }} />
        <ButtonBase
          aria-label="account"
          aria-haspopup="true"
          onClick={handleProfileOpen}
          focusRipple
          sx={{
            width: '100%',
            py: 1.5,
            px: 1.5,
            display: 'flex',
            alignItems: 'center',
            justifyContent: open ? 'flex-start' : 'center',
            gap: 1.5,
            color: '#e9ecf5',
            borderRadius: 1,
            '&:hover': { bgcolor: 'rgba(255,255,255,0.08)' },
          }}
        >
          <AccountCircle sx={{ fontSize: 28, flexShrink: 0 }} />
          {open && (
            <Typography variant="body2" sx={{ color: 'rgba(233,236,245,0.9)', fontWeight: 500 }}>
              Account
            </Typography>
          )}
        </ButtonBase>
      </Drawer>
      <Box
        component="main"
        sx={{ ...mainBackground, flexGrow: 1, height: '100vh', overflow: 'auto' }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper sx={mainPaper}>
                <Outlet />
              </Paper>
            </Grid>
          </Grid>
          <Footer sx={{ pt: 4 }} />
        </Container>
      </Box>
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <AccountBoxIcon />
          </ListItemIcon>
          Profile
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          Settings
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          <ListItemIcon>
            <AccountCircle />
          </ListItemIcon>
          Logout
        </MenuItem>
      </Menu>
    </Box>
  )
}
