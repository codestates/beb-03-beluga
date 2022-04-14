import {Stack, Button, Box} from "@mui/material";
import {Link, Switch, Route} from "react-router-dom";
import QueueOutlinedIcon from "@mui/icons-material/QueueOutlined";
import SaveAsOutlinedIcon from "@mui/icons-material/SaveAsOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HistoryIcon from "@mui/icons-material/History";
import UserNFTList from "./UserNFTList";
import Sidebar from "./component/Sidebar";

export default function Profile({isLogin, account, web3, caver}) {
    return (
      <> 
        < Stack sx = {{ height: "100%", width: "100%" }} > 
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
                height: "30%",
                background: "linear-gradient(#bdc3c8 50%, #fff 50%)"
            }}>
            <Stack
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    backgroundColor: "#DFE2E6"
                }}></Stack>
            <Stack
                sx={{
                    flexGrow: 1,
                    width: "100%"
                }}></Stack>
            <Stack sx={{alignItems: "center"}}>
                    <img
                        style={{
                            width: "20rem",
                            height: "20rem"
                        }}
                        alt= "beluga_login_removebg"
                        src="/beluga_login_removebg.png"/>
                <Stack
                    direction="column"
                    sx={{
                        height: "30%",
                        width: "100%",
                        border: 1,
                        margin: 2,
                        padding: 2,
                        borderRadius: 10
                    }}>
                    <Box
                        sx={{
                            textAlign: "center",
                            fontSize: 25,
                            fontWeight: "bolder",
                            height: "50%",
                            width: "100%"
                        }}>
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
                            cursor: "pointer"
                        }}>
                        {account.slice(0, 4) + "..." + account.slice(account.length - 4, account.length)}
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
                margin: 1
            }}>
            <Button
                component={Link}
                to="/profile/list"
                sx={{
                    height: "100%",
                    fontSize: 17,
                    fontWeight: "bolder"
                }}>
                <QueueOutlinedIcon/>
                Collected
            </Button>

            <Button
                sx={{
                    height: "100%",
                    fontSize: 17,
                    fontWeight: "bolder"
                }}>
                <SaveAsOutlinedIcon/>
                Created
            </Button>
            <Button
                to="/favorited"
                sx={{
                    height: "100%",
                    fontSize: 17,
                    fontWeight: "bolder"
                }}>
                <FavoriteBorderOutlinedIcon/>
                Favorited
            </Button>

            <Button
                to="/hidden"
                sx={{
                    height: "100%",
                    fontSize: 17,
                    fontWeight: "bolder"
                }}>
                <VisibilityOffIcon/>
                Hidden
            </Button>

            <Button
                component={Link}
                to="profile/activity"
                sx={{
                    height: "100%",
                    fontSize: 17,
                    fontWeight: "bolder"
                }}>
                <HistoryIcon/>
                Activity
            </Button>
        </Stack>
        <Stack
            direction="row"
            sx={{
                border: 1,
                height: "64%",
                borderTop: 2,
                borderColor: "gray"
            }}>
            <Stack
                sx={{
                    height: "100%",
                    width: "20%",
                    border: 1
                }}>
                <Sidebar/>
            </Stack>
            <Switch>
                <Stack
                    sx={{
                        height: "100%",
                        width: "80%",
                        border: 1
                    }}>
                    <Route path="/profile/list">
                        <UserNFTList account={account} web3={web3} caver={caver}/>
                    </Route>
                </Stack>
            </Switch>
        </Stack>
    </Stack>
</>
    );
}
