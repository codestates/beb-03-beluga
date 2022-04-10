import { Stack } from "@mui/material";
import Box from '@mui/material/Box';

const NFTListShow = ({data}) => {

    return (
    <Box>
        <Stack>
            <img style={{"height": 400, borderRadius: "15px 15px 2px 2px"}} src={data.image} alt={data.name} />
            <p>{data.name}</p>
        </Stack>
    </Box>

    );
}


export default NFTListShow;