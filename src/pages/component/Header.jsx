import { Button, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";

export default function Header({ isLogin, connectWallet }) {
  return (
    <Stack
      direction="row"
      sx={{ height: 100, borderBottom: 3.5, borderColor: "gray" }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="left"
        sx={{ flexGrow: 0.7, marginLeft: 2 }}
      >
        <Link to="/" style={{ textDecoration: "none" }}>
          <Button sx={{ color: "black" }}>
            <Stack sx={{ width: 60 }}>
              <img
                src="/Logo(beluga).png
        "
              />
            </Stack>
            <Stack sx={{ marginLeft: 2, fontSize: 25, fontWeight: "bolder" }}>
              BelugaSea
            </Stack>
          </Button>
        </Link>
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        sx={{ flexGrow: 3 }}
      >
        <Stack sx={{ width: 600 }}>
          <TextField
            placeholder="search value"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon />
                </InputAdornment>
              ),
            }}
            variant="standard"
          />
        </Stack>
      </Stack>
      <Stack sx={{ flexGrow: 0.6 }}>
        <Stack
          direction="row"
          alignItems="center"
          sx={{ margin: 0.8, height: "5vh" }}
        >
          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{ flexGrow: 1 }}
          >
            <Link to="/create" style={{ textDecoration: "none" }}>
              <Button
                to="/create"
                sx={{
                  height: 70,
                  width: 200,
                  fontSize: 20,
                  fontWeight: "bolder",
                }}
              >
                CREATE
                <AddCircleIcon />
              </Button>
            </Link>
            <Link to="/profile" style={{ textDecoration: "none" }}>
              <Button
                sx={{
                  height: 70,
                  width: 200,
                  fontSize: 20,
                  fontWeight: "bolder",
                }}
              >
                PROFILE
                <AccountCircleIcon />
              </Button>
            </Link>
          </Stack>
          <Button
            onClick={() => {
              connectWallet();
            }}
          >
            <Stack sx={{ width: 50 }}>
              {isLogin ? (
                <img src="/beluga(login).png" />
              ) : (
                <img src="/beluga(notlogin).png" />
              )}
            </Stack>
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
