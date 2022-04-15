import { Stack, Box } from "@mui/material";
import FilterListIcon from '@mui/icons-material/FilterList';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { ListItemIcon } from '@mui/material';

export default function Sidebar() {
  return (
    <Stack 
    sx={{ 
      border: 0, 
      height: "100%", 
      borderColor:'grey',
    }}>
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-around"
        borderRadius="5%"
        sx={{ border: 1, height: "14.29%" }}>
       
        <FilterListIcon/>
        <Box
                sx={{
                  textAlign: "center",
                  fontSize: 17,
                  fontWeight: "bolder",
                  height: "30%",
                  width: "100%",
                  
                }}
              >
                Filter
        </Box>
        <ArrowBackIcon/>
      </Stack>
      <Stack sx={{ border: 1, height:  "14.29%", alignItems:"left" }}>
      <Box
                sx={{
                  fontSize: 17,
                  fontWeight: "bolder",
                  height: "20%",
                  width: "100%",
                }}
              >
                Status
        </Box>
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

