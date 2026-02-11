import React from 'react'
import { Card, CardContent, Typography, Stack } from '@mui/material'
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents'
import { glassyCard } from '../../styles/adminStyles'

const StatRow = ({ label, value }) => (
  <Stack direction="row" justifyContent="space-between" sx={{ mb: 1.25 }}>
    <Typography
      variant="body2"
      sx={{ color: 'rgba(233,236,245,0.5)', fontSize: '0.75rem', fontWeight: 500 }}
    >
      {label}
    </Typography>
    <Typography variant="body2" sx={{ color: '#e9ecf5', fontWeight: 600, fontSize: '0.875rem' }}>
      {value}
    </Typography>
  </Stack>
)

const UserRecapCard = ({ lastWeekRecord, seasonRecord, currentRank }) => (
  <Card sx={glassyCard}>
    <CardContent sx={{ color: '#e9ecf5', py: 2.5, px: 2.5 }}>
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
        <EmojiEventsIcon sx={{ fontSize: 18, color: 'rgba(233,236,245,0.5)' }} />
        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: 'rgba(233,236,245,0.95)' }}>
          Your Recap
        </Typography>
      </Stack>
      <StatRow label="Last week" value={lastWeekRecord} />
      <StatRow label="Season" value={seasonRecord} />
      <StatRow label="Current rank" value={currentRank} />
    </CardContent>
  </Card>
)

export default UserRecapCard
