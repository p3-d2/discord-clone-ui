import styled from 'styled-components';

// SL - Server List
// SN - Server Name
// CI - Channel Info
// CL - Channel List
// CD - Channel Data
// UL - User List
// UI - User Info

export const Grid = styled.div`
  display: grid;

  grid-template:
    'SL SN CI CI' 46px
    'SL CL CD UL' auto
    'SL UI CD UL' 52px
    / 71px 240px auto 240px
  ;
  
  height: 100vh;
`;
