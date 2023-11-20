import React, { useState } from 'react'
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Link,
} from '@mui/material'

const TermsAndPolicy = () => {
  const [termsModalStatus, setTermsModalStatus] = useState(false)
  const [privatePolicyStatus, setPrivatePolicyStatus] = useState(false)

  const handleModalOpenStatus = (modelIdentifier) => {
    if (modelIdentifier === 'terms') {
      setTermsModalStatus(true)
    } else {
      setPrivatePolicyStatus(true)
    }
  }

  const handleModalCloseStatus = (modelIdentifier) => {
    if (modelIdentifier === 'terms') {
      setTermsModalStatus(false)
    } else {
      setPrivatePolicyStatus(false)
    }
  }

  const PrivacyPolicyModal = () => {
    return (
      <Dialog
        open={privatePolicyStatus}
        onClose={() => handleModalCloseStatus('privatePolicy')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{'Private Policy'}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Private Policy Content
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => handleModalCloseStatus('privatePolicy')}
            autoFocus
          >
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  const ServicesTermsModal = () => {
    return (
      <Dialog
        open={termsModalStatus}
        onClose={() => handleModalCloseStatus('terms')}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {'Terms and Services'}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Terms and services content
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleModalCloseStatus('terms')} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    )
  }

  return (
    <div>
      <Grid container spacing={2}>
        <Grid item lg={6} sm={6} xs={6} className="centered-button">
          <Link
            sx={{ cursor: 'pointer' }}
            underline="hover"
            onClick={() => handleModalOpenStatus('terms')}
          >
            Terms Of Service
          </Link>
        </Grid>
        <Grid item lg={6} sm={6} xs={6} className="centered-button">
          <Link
            sx={{ cursor: 'pointer' }}
            underline="hover"
            onClick={() => handleModalOpenStatus('privatePolicy')}
          >
            Privacy Policy
          </Link>
        </Grid>
      </Grid>
      <ServicesTermsModal />
      <PrivacyPolicyModal />
    </div>
  )
}

export default TermsAndPolicy
