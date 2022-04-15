import { Button, Stack } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ExploreIcon from "@mui/icons-material/Explore";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

export default function Header({
  isLogin,
  handleLogOut,
  connectMetaMask,
  connectKaikas,
}) {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [searchName, setSearchName] = useState("");
  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleEnterSearch = (event) => {
    if (event.key === "Enter") {
      history.push(`/search/${searchName}`);
    }
  };

  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      sx={{
        height: 70,
        background: "white",
        mt: 1,
        paddingBottom: 1,
        boxShadow: "0 5px 5px -5px gray",
      }}
    >
      <Button
        justifyContent="space-around"
        sx={{ color: "black", ml: 3 }}
        component={Link}
        to="/"
      >
        <Stack sx={{ width: 40 }}>
          <img src="/Logo(beluga).png" alt="logo" />
        </Stack>
        <Stack
          sx={{
            width: 120,
            fontSize: 20,
            fontWeight: "bolder",
            marginLeft: 2,
          }}
        >
          BelugaSea
        </Stack>
      </Button>

      <Stack
        sx={{
          height: "100%",
          maxWidth: 700,
          width: "50%",
          justifyContent: "center",
          ml: 4,
          mr: 4,
        }}
      >
        <TextField
          placeholder="search value"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon
                  sx={{ cursor: "pointer" }}
                  onClick={() => history.push(`/search/${searchName}`)}
                />
              </InputAdornment>
            ),
          }}
          variant="standard"
          onChange={(e) => setSearchName(e.target.value)}
          onKeyDown={(e) => handleEnterSearch(e)}
        />
      </Stack>

      <Stack
        direction="row"
        sx={{
          height: "100%",
          width: 500,
          justifyContent: "space-around",
        }}
      >
        <Button
          to="/list"
          sx={{
            height: 70,
            width: 100,
            fontSize: 15,
            fontWeight: "bolder",
            color: "#666666 ",
          }}
          component={Link}
        >
          EXPLORE
          <ExploreIcon />
        </Button>
        <Button
          to="/create"
          sx={{
            height: 70,
            width: 100,
            fontSize: 15,
            fontWeight: "bolder",
            color: "#666666 ",
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
              width: 100,
              fontSize: 15,
              fontWeight: "bolder",
              color: "#666666 ",
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
              width: 100,
              fontSize: 15,
              fontWeight: "bolder",
              color: "#666666",
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
          {isLogin ? (
            <AccountBoxIcon sx={{ fontSize: 40, color: "005666" }} />
          ) : (
            <AccountBoxIcon sx={{ fontSize: 40, color: "gray" }} />
          )}
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
                history.push("/");
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
