import * as React from 'react'
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  Alert,
  Backdrop,
  CircularProgress,
  Stack,
  Grid,
  IconButton,
  InputAdornment,
} from '@mui/material'
import SportsFootballIcon from '@mui/icons-material/SportsFootball'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/Facebook'
import { Visibility, VisibilityOff } from '@mui/icons-material'
import Footer from '../layout/Footer'
import { glassyCard, mainBackground } from '../../styles/adminStyles'

const glassAuthCard = {
  ...glassyCard,
  maxWidth: 440,
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
    '&.Mui-error fieldset': {
      borderColor: 'rgba(255,82,82,0.5)',
    },
  },
  '& .MuiInputLabel-root': { color: 'rgba(233,236,245,0.6)' },
  '& .MuiInputBase-input': { color: '#e9ecf5' },
  '& .MuiFormHelperText-root': { color: 'rgba(233,236,245,0.5)', fontSize: '0.75rem' },
}

export default function SignUp() {
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
        py: 4,
        px: 2,
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
            Create your account
          </Typography>
          <Typography
            variant="body2"
            sx={{
              color: 'rgba(233,236,245,0.55)',
              fontSize: '0.8125rem',
              textAlign: 'center',
            }}
          >
            Join your league and start making picks.
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
          {false && (
            <Alert
              severity="success"
              sx={{
                mb: 2,
                bgcolor: 'rgba(0,200,83,0.1)',
                color: '#81c784',
                '& .MuiAlert-icon': { color: '#81c784' },
                border: '1px solid rgba(0,200,83,0.2)',
              }}
            >
              {false}
            </Alert>
          )}

          <Grid container spacing={1.5}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstName"
                required
                fullWidth
                id="firstName"
                label="First name"
                autoFocus
                variant="outlined"
                size="small"
                onChange={() => {}}
                helperText={false}
                error={false}
                value={false}
                sx={inputSx}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="lastName"
                label="Last name"
                name="lastName"
                autoComplete="family-name"
                variant="outlined"
                size="small"
                onChange={() => {}}
                helperText={false}
                error={false}
                value={false}
                sx={inputSx}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Email address"
                name="email"
                type="email"
                autoComplete="email"
                variant="outlined"
                size="small"
                onChange={() => {}}
                helperText={false}
                error={false}
                value={false}
                sx={inputSx}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Password"
                type={false ? 'text' : 'password'}
                id="password"
                autoComplete="new-password"
                variant="outlined"
                size="small"
                onChange={() => {}}
                helperText={false}
                error={false}
                value={false}
                sx={inputSx}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={() => {}}
                        edge="end"
                        sx={{ color: 'rgba(233,236,245,0.6)' }}
                      >
                        {false ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            </Grid>
          </Grid>

          <Button
            type="submit"
            fullWidth
            variant="contained"
            size="medium"
            disabled={false}
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
              '&.Mui-disabled': {
                bgcolor: 'rgba(124,77,255,0.15)',
                color: 'rgba(233,236,245,0.4)',
                borderColor: 'rgba(255,255,255,0.06)',
              },
            }}
          >
            {false ? 'Creating account...' : 'Create account'}
          </Button>

          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ mt: 2 }}>
            <Link
              href="/signin"
              variant="body2"
              sx={{
                color: 'rgba(233,236,245,0.55)',
                fontSize: '0.8rem',
                textDecoration: 'none',
                '&:hover': { color: 'rgba(183,148,246,0.9)', textDecoration: 'underline' },
              }}
            >
              Already have an account? Sign in
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
