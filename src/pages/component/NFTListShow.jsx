import { Stack, Box } from "@mui/material";

const NFTListShow = ({ data }) => {
  return (
    <Box>
      <Stack>
        <img
          style={{ height: 400, borderRadius: "15px 15px 2px 2px" }}
          src={data.image}
          alt={data.name}
        />
        <p>{data.name}</p>
      </Stack>
    </Box>
  );
};

export default NFTListShow;
