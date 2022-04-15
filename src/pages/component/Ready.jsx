import { Stack } from "@mui/material";

export default function Ready() {
  return (
    <Stack
      sx={{
        fontSize: 30,
        fontWeight: "bold",
        alignItems: "center",
        mt: 10,
      }}
    >
      Coming soon...
      <br />
      <br />
      <br />
      <img style={{ height: 250, width: 250 }} src="/blockchain.png" />
    </Stack>
  );
}
