import { Stack, Button, Box } from "@mui/material";
import { Link, Switch, Route } from "react-router-dom";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HistoryIcon from "@mui/icons-material/History";
import UserNFTList from "./UserNFTList";
import Sidebar from "./component/Sidebar";

export default function Profile({ isLogin, account, web3, caver }) {
  return (
    <>
      <Stack sx={{ height: "150vh", width: "100%" }}>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: "15%" }}
        >
          <Stack
            sx={{
              flexGrow: 1,
              width: "100%",
              backgroundColor: "#DFE2E6",
            }}
          ></Stack>
          <Stack sx={{ flexGrow: 1, width: "100%" }}></Stack>
          <Stack
            position="absolute"
            sx={{
              height: 320,
              width: 270,
            }}
          >
            <Box
              sx={{
                borderRadius: "50%",

                height: "100%",
                width: "100%",
                position: "relative",
              }}
            >
              <img
                style={{
                  position: "absolute",
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                }}
                src="/beluga_login_removebg.png"
              />
            </Box>

            <Stack
              direction="column"
              sx={{
                height: "30%",
                width: "100%",
              }}
            >
              <Box
                sx={{
                  textAlign: "center",

                  fontSize: 25,
                  fontWeight: "bolder",
                  height: "50%",
                  width: "100%",
                }}
              >
                Unnamed
              </Box>
              <Box
                sx={{
                  height: "50%",
                  width: "100%",
                  fontSize: 20,
                  overflow: "hidden",
                }}
              >
                {account}
              </Box>
            </Stack>
          </Stack>
        </Stack>
        <Stack
          direction="row"
          justifyContent="space-around"
          sx={{ height: "6%", width: "100%" }}
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
          >
            <SaveAsOutlinedIcon />
            Created
          </Button>
          <Button
            to="/favorited"
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
          >
            <FavoriteBorderOutlinedIcon />
            Favorited
          </Button>

          <Button
            to="/hidden"
            sx={{
              height: "100%",
              fontSize: 17,
              fontWeight: "bolder",
            }}
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
          sx={{ border: 1, height: "64%", borderTop: 2, borderColor: "gray" }}
        >
          <Stack sx={{ height: "100%", width: "20%", border: 1 }}>
            <Sidebar />
          </Stack>
          <Switch>
            <Stack sx={{ height: "100%", width: "80%", border: 1 }}>
              <Route path="/profile/list">
                <UserNFTList account={account} web3={web3} caver={caver} />
              </Route>
            </Stack>
          </Switch>
        </Stack>
      </Stack>
    </>
  );
}
