import { Stack, Button } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Footer() {
  return (
    <Stack
      sx={{
        position: "absolute",
        left: 0,
        bottom: 0,
        height: 190,
        width: "100%",
      }}
    >
      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: 60, background: "#1C69DA" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-around"
          sx={{
            marginLeft: 1,
            marginRight: 1,
          }}
        >
          <Button sx={{ color: "white" }}>andressen</Button>
          <Button sx={{ color: "white" }}>coinbase</Button>
          <Button sx={{ color: "white" }}>Combinator</Button>
          <Button sx={{ color: "white" }}>Trust Wallet</Button>
          <Button sx={{ color: "white" }}>Dapper</Button>
          <Button sx={{ color: "white" }}>Quantstamp</Button>
          <Button sx={{ color: "white" }}>FOUNDERS FUND</Button>
          <Button sx={{ color: "white" }}>BLOCKCHAIN</Button>
        </Stack>
      </Stack>

      <Stack
        alignItems="center"
        justifyContent="center"
        sx={{ height: "80%", background: "#1552A8" }}
      >
        <Stack
          direction="row"
          alignItems="center"
          sx={{ height: "90%", width: "80%" }}
        >
<<<<<<< HEAD
          <Stack sx={{ margin: 1, width: 60 }}>
            <img
              src="/Logo(beluga).png
        "
            />
          </Stack>
          <Stack justifyContent="space-around" sx={{ margin: 1, width: "60%" }}>
            <Stack
              sx={{
                height: 15,
                marginLeft: 3,
                marginTop: 1,
                fontSize: 20,
                fontWeight: "bolder",
                color: "white",
              }}
            >
              BelugaSea
            </Stack>
            <Stack
              sx={{
                height: 30,
                alignItems: "start",
                marginRight: 1,
                marginTop: 2,
                color: "white",
              }}
            >
              Clone Opensea project
            </Stack>
          </Stack>
        </Stack>
        <Stack justifyContent="space-around" sx={{ height: 80, width: "50%" }}>
          <Stack
            sx={{
              marginLeft: 1,
              color: "white",
              fontSize: 20,
              fontWeight: "bolder",
            }}
          >
            Join the community
          </Stack>
=======
>>>>>>> 6abd74a254e232f8223d2adb1d65bc6b6011871d
          <Stack
            direction="row"
            justifyContent="center"
            sx={{ height: "70%", flexGrow: 2 }}
          >
            <Stack sx={{ margin: 1, width: 60 }}>
              <img
                src="/Logo(beluga).png
        "
              />
            </Stack>
            <Stack
              justifyContent="space-around"
              sx={{ margin: 1, width: "60%" }}
            >
              <Stack
                alignItems="start"
                sx={{
                  height: "30%",
                  marginLeft: 3,
                  marginTop: 1,
                  fontSize: 20,
                  fontWeight: "bolder",
                  color: "white",
                }}
              >
                BelugaSea
              </Stack>
              <Stack
                sx={{
                  height: "30%",
                  alignItems: "start",
                  marginLeft: 3,
                  marginTop: 2,
                  color: "white",
                }}
              >
                Clone Opensea project
              </Stack>
            </Stack>
          </Stack>
          <Stack
            justifyContent="space-around"
            sx={{ height: "70%", flexGrow: 1 }}
          >
            <Stack
              sx={{
                marginLeft: 1,
                color: "white",
                fontSize: 20,
                fontWeight: "bolder",
              }}
            >
              Join the community
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-around"
              sx={{ height: "50%", width: "100%" }}
            >
              <Button sx={{ width: "13%", background: "#317cec" }}>
                <TwitterIcon sx={{ color: "white" }} />
              </Button>
              <Button sx={{ width: "13%", background: "#317cec" }}>
                <FacebookIcon sx={{ color: "white" }} />
              </Button>
              <Button sx={{ width: "13%", background: "#317cec" }}>
                <InstagramIcon sx={{ color: "white" }} />
              </Button>
              <Button sx={{ width: "13%", background: "#317cec" }}>
                <YouTubeIcon sx={{ color: "white" }} />
              </Button>
              <Button sx={{ width: "13%", background: "#317cec" }}>
                <GitHubIcon sx={{ color: "white" }} />
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      <Stack
        justifyContent="center"
        sx={{
          height: 30,
          background: "#1552A8",
        }}
      >
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            marginLeft: 2,
            marginRight: 2,
            height: 25,
            borderTop: 2,
            borderColor: "#ffffffa1",
            fontSize: 10,
            alignItems: "center",
          }}
        >
          <Stack sx={{ color: "white" }}>2022.4.8 ~ 2022.4.15</Stack>
          <Stack sx={{ color: "white" }}>Develop by team Beluga</Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
