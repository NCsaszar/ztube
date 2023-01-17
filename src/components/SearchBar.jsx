import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component='form'
      onSubmit={(e) => {
        handleSubmit(e);
      }}
      sx={{
        borderRadius: 20,
        border: '1px solid gray',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: '5px' },
        background: '#413F42',
        display: 'flex',
        direction: 'row',
      }}
    >
      <input
        style={{
          background: '#413F42',
          color: 'white',
        }}
        className='search-bar'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
      <IconButton
        type='submit'
        sx={{
          p: '10px',
          color: 'white',
          background: '#272628',
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
          ':hover': {
            background: '#272628',
          },
        }}
      >
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
