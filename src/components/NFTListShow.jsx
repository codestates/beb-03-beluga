import { Stack } from "@mui/material";
import Box from '@mui/material/Box';

const NFTListShow = ({data}) => {

    return (
    <Box>
        <Stack>
                <p>{data.name}</p>
                <img style={{"width": 400, "height": 400}} src={data.image} alt={data.name} />
        </Stack>
    </Box>

    );
}


export default NFTListShow;