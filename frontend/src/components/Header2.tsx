// Header2.tsx
import { useState } from 'react'
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  InputBase,
  Button,
  Box,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import SearchIcon from '@mui/icons-material/Search'
import CancelIcon from '@mui/icons-material/Cancel'

const Header: React.FC = () => {
  const [searchOpen, setSearchOpen] = useState(false)

  return (
    <Box sx={{ maxWidth: 1200, margin: 'auto', width: '100%' }}>
      <AppBar position="static" color="primary" sx={{ flexDirection: 'row' }}>
        <Toolbar
          sx={{
            justifyContent: 'space-between',
            width: '100%',
            paddingX: { xs: 1, sm: 2 },
          }}
        >
          <Typography variant="h6" noWrap component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          {searchOpen ? (
            <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center' }}>
              <InputBase
                placeholder="Search"
                fullWidth
                sx={{ ml: 1, flex: 1 }}
              />
              <IconButton onClick={() => setSearchOpen(false)} color="inherit">
                <CancelIcon />
              </IconButton>
            </Box>
          ) : (
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              <Button
                onClick={() => setSearchOpen(true)}
                startIcon={<SearchIcon />}
                color="inherit"
              >
                Search
              </Button>
              <IconButton color="inherit" sx={{ ml: 1 }}>
                <MenuIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
