import { Stack } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ListItemIcon } from '@mui/material';


export default function Sidebar() {
  return (
    <Stack 
    sx={{ 
      border: 1, 
      height: "100%", 
      borderColor:'grey',
    }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        sx={{ border: 1, height: "14.29%" }}>
       
        <FilterListIcon/>
        Filter
        <ArrowBackIcon/>
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%", alignItems:"left" }}>
        Status
        <ListItemIcon/>
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%" }}>
        Price
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%" }}>
        Collections
      </Stack>
      <Stack sx={{ border: 1, height: "14.29%" }}>
        Chain
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%" }}>
        Categories
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%" }}>
        On Sale In
      </Stack>
    </Stack>
  );
}
