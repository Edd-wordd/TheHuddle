import React from 'react'
import {
  Box,
  Button,
  TextField,
  Link,
  Typography,
  Stack,
  Alert,
  Backdrop,
  CircularProgress,
} from '@mui/material'
import SportsFootballIcon from '@mui/icons-material/SportsFootball'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { glassyCard, mainBackground } from '../../styles/adminStyles'
import Footer from '../layout/Footer'

const glassAuthCard = {
  ...glassyCard,
  maxWidth: 400,
  width: '100%',
  borderRadius: 2.5,
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 24px 64px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.04)',
  backdropFilter: 'blur(16px)',
}

const inputSx = {
  '& .MuiOutlinedInput-root': {
    bgcolor: 'rgba(255,255,255,0.04)',
    borderRadius: 1.5,
    '& fieldset': { borderColor: 'rgba(255,255,255,0.12)' },
    '&:hover fieldset': { borderColor: 'rgba(255,255,255,0.18)' },
    '&.Mui-focused fieldset': {
      borderColor: 'rgba(124,77,255,0.5)',
      boxShadow: '0 0 0 1px rgba(124,77,255,0.25)',
    },
  },
  '& .MuiInputLabel-root': { color: 'rgba(233,236,245,0.6)' },
  '& .MuiInputBase-input': { color: '#e9ecf5' },
}

const handleSignIn = () => {
  console.log('Sign in')
}

export default function SignIn() {
  return (
    <Box
      sx={{
        ...mainBackground,
        width: '100vw',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
      }}
    >
      <Backdrop
        sx={{
          color: '#fff',
          zIndex: (theme) => theme.zIndex.drawer + 1,
          bgcolor: 'rgba(0,0,0,0.6)',
        }}
        open={false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box
        component="div"
        sx={{
          ...glassAuthCard,
          p: 3,
        }}
      >
        <Stack alignItems="center" spacing={1.5} sx={{ mb: 2.5 }}>
          <Box
            sx={{
              width: 44,
              height: 44,
              borderRadius: 2,
              bgcolor: 'rgba(124,77,255,0.2)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <SportsFootballIcon sx={{ fontSize: 24, color: 'rgba(183,148,246,0.95)' }} />
          </Box>
          <Typography
            component="h1"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 700,
              color: '#e9ecf5',
              letterSpacing: '-0.02em',
            }}
          >
            Sign in to The Huddle
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(233,236,245,0.55)',
              fontSize: '0.8125rem',
              textAlign: 'center',
            }}
          >
            Access your picks and league dashboard
          </Typography>
        </Stack>

        <Box component="form" noValidate onSubmit={() => {}}>
          {false && (
            <Alert
              severity="error"
              sx={{
                mb: 2,
                bgcolor: 'rgba(255,82,82,0.1)',
                color: '#ff8a80',
                '& .MuiAlert-icon': { color: '#ff8a80' },
                border: '1px solid rgba(255,82,82,0.2)',
              }}
            >
              {false}
            </Alert>
          )}

          <Stack spacing={1.5}>
            <TextField
              required
              fullWidth
              id="email"
              label="Email address"
              name="email"
              type="email"
              autoComplete="email"
              autoFocus
              variant="outlined"
              size="small"
              onChange={() => {}}
              sx={inputSx}
            />
            <TextField
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              variant="outlined"
              size="small"
              onChange={() => {}}
              sx={inputSx}
            />
          </Stack>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="medium"
            sx={{
              mt: 2,
              py: 1.25,
              fontWeight: 600,
              fontSize: '0.9rem',
              textTransform: 'none',
              bgcolor: 'rgba(124,77,255,0.4)',
              color: '#e9ecf5',
              border: '1px solid rgba(255,255,255,0.12)',
              '&:hover': {
                bgcolor: 'rgba(124,77,255,0.5)',
                borderColor: 'rgba(255,255,255,0.18)',
              },
            }}
            onClick={handleSignIn}
          >
            Sign in
          </Button>

          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
            gap={1}
            sx={{ mt: 2 }}
          >
            <Link
              href="/forgot-password"
              variant="body2"
              sx={{
                color: 'rgba(233,236,245,0.55)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(183,148,246,0.9)', textDecoration: 'underline' },
              }}
            >
              Forgot password?
            </Link>
            <Link
              href="/Signup"
              variant="body2"
              sx={{
                color: 'rgba(233,236,245,0.55)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(183,148,246,0.9)', textDecoration: 'underline' },
              }}
            >
              Create account
            </Link>
          </Stack>

          <Stack direction="row" alignItems="center" spacing={1.5} sx={{ my: 2 }}>
            <Box sx={{ flex: 1, height: 1, bgcolor: 'rgba(255,255,255,0.08)' }} />
            <Typography
              variant="caption"
              sx={{ color: 'rgba(233,236,245,0.4)', fontSize: '0.75rem' }}
            >
              or
            </Typography>
            <Box sx={{ flex: 1, height: 1, bgcolor: 'rgba(255,255,255,0.08)' }} />
          </Stack>

          <Stack direction="row" spacing={1.5}>
            <Button
              fullWidth
              variant="outlined"
              size="small"
              startIcon={<GoogleIcon sx={{ fontSize: 18 }} />}
              onClick={() => {}}
              sx={{
                py: 1,
                textTransform: 'none',
                fontSize: '0.8rem',
                fontWeight: 500,
                bgcolor: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'rgba(233,236,245,0.8)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.2)',
                  bgcolor: 'rgba(255,255,255,0.06)',
                },
              }}
            >
              Google
            </Button>
            <Button
              fullWidth
              variant="outlined"
              size="small"
              startIcon={<FacebookIcon sx={{ fontSize: 18 }} />}
              onClick={() => {}}
              sx={{
                py: 1,
                textTransform: 'none',
                fontSize: '0.8rem',
                fontWeight: 500,
                bgcolor: 'rgba(255,255,255,0.04)',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'rgba(233,236,245,0.8)',
                '&:hover': {
                  borderColor: 'rgba(255,255,255,0.2)',
                  bgcolor: 'rgba(255,255,255,0.06)',
                },
              }}
            >
              Facebook
            </Button>
          </Stack>
        </Box>
      </Box>

      <Footer sx={{ mt: 3, color: 'rgba(233,236,245,0.4)', fontSize: '0.75rem' }} />
    </Box>
  )
}
