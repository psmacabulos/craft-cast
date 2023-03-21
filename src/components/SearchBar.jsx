import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => (
  <Paper
    component='form'
    sx={{
      borderRadius: 20,
      border: '1px solid #e3e2e2',
      pl: 2,
      mr: { sm: 5 },
    }}
  >
    <input
      className='search-bar'
      placeholder='Search...'
      value=''
      onChange={() => {}}
    />
    <IconButton>
      <Search />
    </IconButton>
  </Paper>
);

export default SearchBar;
