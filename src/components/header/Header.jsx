import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import AccountBalanceIcon from '@mui/icons-material/AccountBalance'
import { useNavigate } from 'react-router-dom'
import { navigateTo } from '../../utils/helperFunctons'

const Header = () => {
  const [anchorElUser, setAnchorElUser] = useState(false)
  const [parentEle, setParentEle] = useState(null)
  const [isLogged, setIsLogged] = useState(false)
  const navigate = useNavigate()
  const settings = ['Profile', 'Account', 'Logout']

  const setParentElement = (event) => {
    setParentEle(event.currentTarget)
  }

  return (
    <div>
      <AppBar position="static" sx={{ backgroundColor: '#36454F' }}>
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <AccountBalanceIcon
              sx={{ display: { md: 'flex' }, mr: 1, cursor: 'pointer' }}
              onClick={() => navigateTo(navigate, '/')}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: { md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.1rem',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
              }}
              onClick={() => navigateTo(navigate, '/')}
            >
              NotaryFinder
            </Typography>
            <Typography
              variant="h6"
              noWrap
              component="a"
              sx={{
                mr: 2,
                display: 'flex',
                color: 'inherit',
                textDecoration: 'none',
                cursor: 'pointer',
                flexGrow: 1,
                flexDirection: 'row-reverse',
              }}
              onClick={() => navigateTo(navigate, '/contactUs')}
            >
              contactUs
            </Typography>
            {isLogged ? (
              <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                <Tooltip title="Open settings">
                  <IconButton
                    onClick={(event) => {
                      setAnchorElUser(true)
                      setParentElement(event)
                    }}
                    sx={{ p: 0 }}
                  >
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: '45px' }}
                  id="menu-appbar"
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  anchorEl={parentEle}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  open={anchorElUser}
                  onClose={() => setAnchorElUser(false)}
                >
                  {settings.map((setting, index) => {
                    return (
                      <MenuItem
                        key={setting}
                        onClick={() => setAnchorElUser(false)}
                      >
                        <Typography textAlign="center">{setting}</Typography>
                      </MenuItem>
                    )
                  })}
                </Menu>
              </Box>
            ) : null}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  )
}

export default Header
