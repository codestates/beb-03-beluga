import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Main() {
  return (
    <Stack sx={{ border: 1, height: "150vh", width: "100%" }}>
      <Stack direction="row" sx={{ height: "20%" }}>
        <Stack sx={{ border: 1, height: "100%", flexGrow: 1 }}>
          <Button component={Link} to="/list" variant="contained">
            Explore
          </Button>
          <Button variant="outlined">Outlined</Button>
        </Stack>
        <Stack
          sx={{ border: 1, borderRadius: 15, height: "100%", flexGrow: 1 }}
        >
          영역 1
        </Stack>
      </Stack>
      <Stack sx={{ marginTop: 3, border: 1, height: "10%" }}>
        Create and sell your NFTs
      </Stack>
      <Stack sx={{ marginTop: 3, border: 1, height: "30%" }}>
        Browse by category
      </Stack>
      <Stack sx={{ marginTop: 3, border: 1, height: "30%" }}>
        Meet OpenSea
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ marginTop: 3, border: 1, height: "5%" }}
      >
        <Button
          component={Link}
          to="/list"
          sx={{ height: "45%" }}
          variant="contained"
        >
          Explore the marketplace
        </Button>
      </Stack>
    </Stack>
  );
}
