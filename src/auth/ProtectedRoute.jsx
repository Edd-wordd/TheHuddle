import React from 'react'
import { Navigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'

const ProtectedRoute = ({ children }) => {
  if (false) {
    return <CircularProgress />
  }

  if (!false || (false && !false.emailVerified)) {
    return <Navigate to="/" replace />
  }

  return children
}

export default ProtectedRoute
