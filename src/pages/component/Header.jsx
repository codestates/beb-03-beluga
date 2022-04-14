import { Button, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link } from "react-router-dom";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";

export default function Header({
  isLogin,
  handleLogOut,
  connectMetaMask,
  connectKaikas,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-around"
      sx={{
        flexWrap: "wrap",
        height: "auto",
        marginTop: 3,
        marginLeft: 2.5,
        marginRight: 2.5,
        paddingBottom: 1,
        borderBottom: 3.5,
        borderColor: "gray",
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        sx={{ flexWrap: "wrap", flexGrow: 0.6, marginLeft: 2 }}
      >
        {/* <Link to="/" style={{ textDecoration: "none" }}> */}
        <Button
          justifyContent="space-around"
          sx={{ color: "black" }}
          component={Link}
          to="/"
        >
          <Stack sx={{ width: 50 }}>
            <img
              src="/Logo(beluga).png
        "
            />
          </Stack>
          <Stack
            sx={{
              flexWrap: "wrap",
              fontSize: 25,
              fontWeight: "bolder",
              marginLeft: 2,
            }}
          >
            BelugaSea
          </Stack>
        </Button>
        {/* </Link> */}
      </Stack>
      <Stack
        alignItems="center"
        justifyContent="center"
        direction="row"
        sx={{ flexGrow: 6 }}
      >
        <Stack sx={{ height: "auto", maxWidth: 700, flexGrow: 0.8 }}>
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
      <Stack
        direction="row"
        justifyContent="end"
        sx={{ flexGrow: 0.6, flexWrap: "wrap" }}
      >
        <Button
          to="/create"
          sx={{
            height: 70,
            width: 200,
            fontSize: 20,
            fontWeight: "bolder",
          }}
          component={Link}
        >
          CREATE
          <AddCircleIcon />
        </Button>
        {isLogin ? (
          <Button
            sx={{
              height: 70,
              width: 200,
              fontSize: 20,
              fontWeight: "bolder",
            }}
            component={Link}
            to="/profile"
          >
            PROFILE
            <AccountCircleIcon />
          </Button>
        ) : (
          <Button
            sx={{
              height: 70,
              width: 200,
              fontSize: 20,
              fontWeight: "bolder",
            }}
            onClick={() => {
              alert("로그인 해주세요");
            }}
          >
            PROFILE
            <AccountCircleIcon />
          </Button>
        )}

        <Button
          id="demo-positioned-button"
          aria-controls={open ? "demo-positioned-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Stack sx={{ width: 50 }}>
            {isLogin ? (
              <img src="/beluga(login).png" />
            ) : (
              <img src="/beluga(notlogin).png" />
            )}
          </Stack>
        </Button>
        {isLogin ? (
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={() => {
                handleLogOut();
                handleClose();
              }}
            >
              Logout
            </MenuItem>
          </Menu>
        ) : (
          <Menu
            id="demo-positioned-menu"
            aria-labelledby="demo-positioned-button"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "left",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "left",
            }}
          >
            <MenuItem
              onClick={() => {
                handleClose();
                connectMetaMask();
              }}
            >
              MetaMask
            </MenuItem>
            <MenuItem
              onClick={() => {
                handleClose();
                connectKaikas();
              }}
            >
              Kaikas
            </MenuItem>
          </Menu>
        )}
      </Stack>
    </Stack>
  );
}
