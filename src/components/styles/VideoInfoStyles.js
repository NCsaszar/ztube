import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';

export const StyledRoot = styled(Box)({
  marginTop: '8px',
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  boxSizing: 'border-box',
});

export const StyledInfoBox = styled(Box)({
  backgroundColor: 'rgb(65, 63, 66)',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  borderRadius: '20px',
  boxSizing: 'border-box',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
});

export const StyledDescriptionBox = styled(Box)({
  backgroundColor: 'rgb(65, 63, 66)',
  width: '100%',
  borderRadius: '20px',
  minHeight: '100px',
  boxSizing: 'border-box',
  marginTop: '8px',
  paddingLeft: '16px',
  paddingRight: '16px',
  paddingTop: '8px',
  paddingBottom: '8px',
});
