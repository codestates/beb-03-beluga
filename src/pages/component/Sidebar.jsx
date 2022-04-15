import { Stack, Box } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Sidebar() {
  const [state, setState] = React.useState({
    Filter: false,
  });

  const sidebarDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'left' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={sidebarDrawer(anchor, false)}
      onKeyDown={sidebarDrawer(anchor, false)}
    >
      <List>
        {['Status', 'Price', 'Collections', 'Chains', 'Categories', 'On Sale In'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
    </Box>
  );

  return (
    <Stack>
      {['Filter'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={sidebarDrawer(anchor, true)}>
          <FilterListIcon/>

            {anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={sidebarDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
      
    </Stack>
  );
}

// export default function Sidebar() {

//   return (
//     <Stack 
//     sx={{ 
//       border: 0, 
//       height: "100%", 
//       borderColor:'grey',
//     }}>
//       <Stack
//         direction="row"
//         alignItems="center"
//         justifyContent="space-around"
//         borderRadius="5%"
//         sx={{ border: 1, height: "14.29%" }}>
       
//         <FilterListIcon/>
//         <Box
//                 sx={{
//                   textAlign: "center",
//                   fontSize: 17,
//                   fontWeight: "bolder",
//                   height: "30%",
//                   width: "100%",
                  
//                 }}
//               >
//                 Filter
//         </Box>
//         <ArrowBackIcon/>
//       </Stack>
//       <Stack sx={{ border: 1, height:  "14.29%", alignItems:"left" }}>
//       <Box
//                 sx={{
//                   fontSize: 17,
//                   fontWeight: "bolder",
//                   height: "20%",
//                   width: "100%",
//                 }}
//               >
//                 Status
//         </Box>
//         <ListItemIcon/>
//       </Stack>
//       <Stack sx={{ border: 1, height:  "14.29%" }}>
//         Price
//       </Stack>
//       <Stack sx={{ border: 1, height:  "14.29%" }}>
//         Collections
//       </Stack>
//       <Stack sx={{ border: 1, height: "14.29%" }}>
//         Chain
//       </Stack>
//       <Stack sx={{ border: 1, height:  "14.29%" }}>
//         Categories
//       </Stack>
//       <Stack sx={{ border: 1, height:  "14.29%" }}>
//         On Sale In
//       </Stack>
//     </Stack>
//   );
// }

