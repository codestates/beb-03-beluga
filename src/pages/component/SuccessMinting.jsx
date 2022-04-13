import { Stack, Button } from "@mui/material";

const SuccessMinting = ({ reset }) => {
  return (
    <Stack>
      민팅에 성공했습니다!
      <Button variant="contained" color="primary" onClick={reset}>
        민팅 페이지로
      </Button>
    </Stack>
  );
};

export default SuccessMinting;
