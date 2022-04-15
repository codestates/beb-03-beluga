import { Stack } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

const Loading = () => {
  return (
    <Stack alignItems="center" sx={{ mt: 20, fontSize: 20 }}>
      로딩중입니다...
      <CircularProgress sx={{ fontSize: 40, mt: 10 }} />
    </Stack>
  );
};

export default Loading;
