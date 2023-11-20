import React from 'react'
import './NotaryContent.css'
import notaryImg from '../../assets/images/notaryShake.png'
import { Button, Grid } from '@mui/material'
import Box from '@mui/material/Box'
import LoginIcon from '@mui/icons-material/Login'
import LockOpenIcon from '@mui/icons-material/LockOpen'
import { navigateTo } from '../../utils/helperFunctons'
import { useNavigate } from 'react-router-dom'

const NotaryContent = () => {
  const navigate = useNavigate()

  return (
    <div className="main-Cnt-bg-clr">
      <div>
        <div className="centered-image">
          <img src={notaryImg} alt="" className="mnImg" />
        </div>
        <div className="txtAliCnt">
          <h1>Notary Finder</h1>
          <h3>Simplify your needs with notary!</h3>
        </div>
        <div className="centered-button">
          <Button
            variant="contained"
            size="large"
            sx={{
              width: '30%',
              backgroundColor: '#708090',
              '&:hover': { backgroundColor: '#708090' },
            }}
            onClick={() => navigateTo(navigate, '/aboutUs')}
          >
            About Us
          </Button>
        </div>
        <Box sx={{ flexGrow: 1, padding: '20px' }}>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xs={6} className="centered-button">
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{
                  backgroundColor: '#93b0c2',
                  '&:hover': { backgroundColor: '#93b0c2' },
                }}
                endIcon={<LoginIcon />}
                onClick={() => navigateTo(navigate, '/login')}
              >
                Login
              </Button>
            </Grid>
            <Grid item lg={6} sm={6} xs={6} className="centered-button">
              <Button
                variant="contained"
                color="success"
                size="large"
                sx={{
                  backgroundColor: '#93b0c2',
                  '&:hover': { backgroundColor: '#93b0c2' },
                }}
                endIcon={<LockOpenIcon />}
                onClick={() => navigateTo(navigate, '/signUp')}
              >
                Sign up!
              </Button>
            </Grid>
          </Grid>
        </Box>
      </div>
    </div>
  )
}

export default NotaryContent
