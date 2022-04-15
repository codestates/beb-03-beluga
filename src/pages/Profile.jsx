import { Stack, Button, Box } from "@mui/material";
import { Link, Switch, Route } from "react-router-dom";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HistoryIcon from "@mui/icons-material/History";
import UserNFTList from "./UserNFTList";
import Sidebar from "./component/Sidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Ready from "./component/Ready";

export default function Profile({ isLogin, account, web3, caver }) {
  return (
    <>
      <Stack sx={{ height: "120vh", width: "100%", mb: 10 }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{
            background: "linear-gradient(#bdc3c8 50%, #fff 50%)",
          }}
        >
          <Stack sx={{ width: 200, alignItems: "center", mt: 15 }}>
            <Stack sx={{ border: 1.5, color: "#fff", borderRadius: 50 }}>
              <img
                style={{
                  width: 150,
                  height: 150,
                }}
                alt="beluga_login_removebg"
                src="/beluga_login_removebg.png"
              />
            </Stack>

            <Stack
              direction="column"
              sx={{
                height: "30%",
                width: "100%",
                margin: 2,
                padding: 2,
              }}
            >
              <Box
                sx={{
                  textAlign: "center",
                  fontSize: 22,
                  fontWeight: "bolder",
                  height: "50%",
                  width: "100%",
                  mt:-1,
                }}
              >
                Unnamed
              </Box>
              <Box
                title={account}
                onClick={() => {
                  navigator.clipboard.writeText(account);
                  alert("주소가 복사되었습니다.");
                }}
                sx={{
                  height: "50%",
                  width: "100%",
                  fontSize: 20,
                  overflow: "hidden",
                  textAlign: "center",
                  cursor: "pointer",
                  mt: 2,
                  border: 1,
                  borderRadius: 20,
                }}
              >
                <AccountCircleIcon />
                {account.slice(0, 4) +
                  "..." +
                  account.slice(account.length - 4, account.length)}
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          textAlign="center"
          sx={{
            height: "6%",
            width: "100%",
            margin: 1,
          }}
        >
          <Button
            component={Link}
            to="/profile/list"
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
          >
            <QueueOutlinedIcon />
            Collected
          </Button>

          <Button
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
            component={Link}
            to="/profile/ready"
          >
            <SaveAsOutlinedIcon />
            Created
          </Button>
          <Button
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
            component={Link}
            to="/profile/ready"
          >
            <FavoriteBorderOutlinedIcon />
            Favorited
          </Button>

          <Button
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
            component={Link}
            to="/profile/ready"
          >
            <VisibilityOffIcon />
            Hidden
          </Button>

          <Button
            component={Link}
            to="profile/activity"
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
          >
            <HistoryIcon />
            Activity
          </Button>
        </Stack>
        <Stack
          direction="row"
          sx={{
            height: "64%",
            boxShadow: "0 3px 5px 5px gray",
          }}
        >
          <Stack
            sx={{
              border:0,
              boxShadow: "0 2px 3px 3px gray",
              height: "100%",
              width: 150,
            }}
          >
            <Sidebar />
          </Stack>
          <Switch>
            <Stack
              sx={{
                height: "100%",
                width: "100%",
              }}
            >
              <Route path="/profile/list">
                <UserNFTList account={account} web3={web3} caver={caver} />
              </Route>
              <Route path="/profile/ready">
                <Ready />
              </Route>
            </Stack>
          </Switch>
        </Stack>
      </Stack>
    </>
  );
}
