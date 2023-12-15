import { Paper } from '@mui/material';
import React from 'react'

const EmptyScreen = () => {
  return (
    <Paper
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '32px', height: '768px' }}
    >
      There are no data
    </Paper>
  )
}

export default EmptyScreen;