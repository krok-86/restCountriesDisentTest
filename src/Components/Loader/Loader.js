import { CircularProgress, Box } from '@mui/material';

const Loader = () => {
  return (
      <Box sx={{ display: 'flex', marginTop: '50px' }}>
        <CircularProgress sx={{  margin: 'auto' }}/>
      </Box>
    )
}

export default Loader;