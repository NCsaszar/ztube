import { Stack } from '@mui/material';
import { categories } from '../utils/constants.js';

const Sidebar = ({ selectedCategory, setselectedCategory }) => (
  // Stack component with props applied
  <Stack
    direction='row' // set the direction of the stack to row
    sx={{
      overflowY: 'auto', // set the overflow-y style to 'auto'
      height: { sx: 'auto', md: '95%' }, // set the height style to 'auto' for small screens and '95%' for medium screens
      flexDirection: { md: 'column' }, // set the flex-direction style to 'column' for medium screens
    }}
  >
    {
      // Map over the categories array and return a button element for each item
      categories.map((category) => (
        <button
          className='category-btn' // set the className prop to 'category-btn'
          onClick={() => setselectedCategory(category.name)}
          style={{
            // set the background color to red and the text color to white if the current category's name is equal to the selectedCategory constant
            background: category.name === selectedCategory && '#5b585c',
            color: 'white',
          }}
          key={category.name} // set the key prop to the current category's name
        >
          <span
            style={{
              // set the color to white if the current category's name is equal to the selectedCategory constant, and set the margin-right to '15px'
              color: category.name === selectedCategory ? '#472c55' : '#272628',
              marginRight: '15px',
            }}
          >
            {category.icon}
          </span>
          <span
            style={{
              // set the opacity to 1 if the current category's name is equal to the selectedCategory constant, and set it to 0.8 otherwise
              opacity: category.name === selectedCategory ? '1' : '0.8',
            }}
          >
            {category.name !== 'New' ? category.name : 'Home'}
          </span>
        </button>
      ))
    }
  </Stack>
);

// Export the Sidebar functional component as the default export
export default Sidebar;
