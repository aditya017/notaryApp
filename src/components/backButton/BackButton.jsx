import React from 'react'
import { Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1)
  }

  return (
    <div>
      <Button
        sx={{
          textDecoration: 'underline',
          padding: '30px',
          textTransform: 'none',
        }}
        startIcon={<ArrowBackIcon />}
        onClick={handleGoBack}
      >
        Back
      </Button>
    </div>
  )
}

export default BackButton
