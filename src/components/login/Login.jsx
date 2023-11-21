import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import Typography from '@mui/material/Typography'
import { Button, TextField } from '@mui/material'
import Container from '@mui/material/Container'
import { navigateTo } from '../../utils/helperFunctons'
import { useNavigate } from 'react-router-dom'
import TermsAndPolicy from '../termsAndPolicy'
import BackButton from '../backButton'

const Login = () => {
  const navigate = useNavigate()
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <div>
      <BackButton />
      <Container maxWidth="xs" sx={{ padding: '50px' }}>
        <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: 700 }}>
          Login
        </Typography>
        <form onSubmit={handleSubmit(onSubmit)}>
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
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            style={{ marginTop: '16px' }}
          >
            Login
          </Button>
          <Typography variant="h6" gutterBottom sx={{textAlign: 'center', padding :'5px'}}>
            Or
          </Typography>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => navigateTo(navigate, '/signUp')}
          >
            SignUp
          </Button>
        </form>
      </Container>
      <TermsAndPolicy />
    </div>
  )
}

export default Login
