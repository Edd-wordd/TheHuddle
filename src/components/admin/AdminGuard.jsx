import React from 'react'
import Paper from '@mui/material/Paper'
import Skeleton from '@mui/material/Skeleton'
import { Navigate } from 'react-router-dom'

const glassySx = {
  p: 3,
  backgroundColor: 'rgba(15,15,17,0.9)',
  color: '#f5f7ff',
  borderRadius: 2.5,
  border: '1px solid rgba(255,255,255,0.08)',
  boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
  backdropFilter: 'blur(12px)',
}

/**
 * AdminGuard: loading -> skeleton; !user -> /signin; !isAdmin -> /dashboard; else children (AdminLayout with sidebar).
 */
export default function AdminGuard({ children }) {
  // TODO: useAuthState, isAdmin check — for now always render layout so sidebar is visible
  const loading = false
  const user = true
  const isAdmin = true

  if (loading) {
    return (
      <Paper sx={glassySx}>
        <Skeleton
          variant="text"
          width="60%"
          height={32}
          sx={{ bgcolor: 'rgba(255,255,255,0.12)', mb: 2 }}
        />
        <Skeleton
          variant="rectangular"
          height={56}
          sx={{ bgcolor: 'rgba(255,255,255,0.12)', borderRadius: 1, mb: 2 }}
        />
        <Skeleton
          variant="rectangular"
          height={56}
          sx={{ bgcolor: 'rgba(255,255,255,0.12)', borderRadius: 1, mb: 2 }}
        />
        <Skeleton variant="text" width="40%" height={24} sx={{ bgcolor: 'rgba(255,255,255,0.12)' }} />
      </Paper>
    )
  }

  if (!user) return <Navigate to="/signin" replace />
  if (!isAdmin) return <Navigate to="/dashboard" replace />

  return children
}
