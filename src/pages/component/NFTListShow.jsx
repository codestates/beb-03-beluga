import { Stack, Box } from "@mui/material";

const NFTListShow = ({ data, imgHeightSetting = 400 }) => {
  return (
    <Box>
      <Stack>
        <img
          style={{ height: imgHeightSetting, borderRadius: "15px 15px 2px 2px" }}
          src={data.image}
          alt={data.name}
        />
        <p>{data.name}</p>
      </Stack>
    </Box>
  );
};

export default NFTListShow;
