import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";

const SuccessMinting = ({ reset }) => {
  return (
    <Stack>
      <Stack>민팅에 성공했습니다!</Stack>
      <Button
        variant="contained"
        color="primary"
        onClick={reset}
        sx={{ marginTop: "10%", marginBottom: "10%" }}
      >
        민팅 페이지로
      </Button>
      <Button
        component={Link}
        to="/profile"
        variant="contained"
        color="primary"
        onClick={reset}
      >
        프로필 페이지로
      </Button>
    </Stack>
  );
};

export default SuccessMinting;
