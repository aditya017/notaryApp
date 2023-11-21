import React from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { Controller, useForm } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import { navigateTo } from '../../utils/helperFunctons'
import { useNavigate } from 'react-router-dom'
import TermsAndPolicy from '../termsAndPolicy'
import BackButton from '../backButton'

const SignUp = () => {
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()
  const navigate = useNavigate()
  const password = watch('password')

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <BackButton />
      <Container maxWidth="md" sx={{ padding: '20px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }}>
          Sign Up
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="firstName"
                control={control}
                defaultValue=""
                rules={{ required: 'First name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="First Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.firstName}
                    helperText={
                      errors.firstName ? errors.firstName.message : ''
                    }
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="lastName"
                control={control}
                defaultValue=""
                rules={{ required: 'Last name is required' }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Last Name"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.lastName}
                    helperText={errors.lastName ? errors.lastName.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="dob"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Date of birth is required',
                  pattern: {
                    value: /^\d{4}-\d{2}-\d{2}$/,
                    message: 'Enter a valid date in the format YYYY-MM-DD',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Date of Birth"
                    type="date"
                    InputLabelProps={{ shrink: true }}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.dob}
                    helperText={errors.dob ? errors.dob.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: 'Enter a valid email address',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Email"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.email}
                    helperText={errors.email ? errors.email.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                rules={{
                  required: 'Password is required',
                  minLength: {
                    value: 6,
                    message: 'Password must have at least 6 characters',
                  },
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.password}
                    helperText={errors.password ? errors.password.message : ''}
                  />
                )}
              />
            </Grid>
            <Grid item lg={6} sm={6} xs={12}>
              <Controller
                name="confirmPassword"
                control={control}
                defaultValue=""
                rules={{
                  validate: (value) =>
                    value === password || 'The passwords do not match',
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    label="Confirm Password"
                    type="password"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    error={!!errors.confirmPassword}
                    helperText={
                      errors.confirmPassword
                        ? errors.confirmPassword.message
                        : ''
                    }
                  />
                )}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            SignUp
          </Button>
          <Typography variant="h6" gutterBottom sx={{textAlign: 'center', padding :'5px'}}>
            Or
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigateTo(navigate, '/login')}
          >
            Login
          </Button>
        </form>
      </Container>
      <TermsAndPolicy />
    </div>
  )
}

export default SignUp
