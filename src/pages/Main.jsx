import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AppsIcon from "@mui/icons-material/Apps";
import ImageIcon from "@mui/icons-material/Image";
import { borderRadius } from "@mui/system";

export default function Main() {
  return (
    <Stack
      sx={{
        height: "200vh",
        width: "100%",
        maxWidth: 1700,
      }}
    >
      <Stack
        direction="row"
        sx={{ height: "25%", backgroundColor: "#e8f0fcd7" }}
      >
        <Stack sx={{ height: "100%", width: "50%" }}>
          <Stack
            sx={{
              height: "30%",
              mt: 10,
              ml: 8,
              fontSize: 60,
              fontWeight: "bold",
            }}
          >
            Discover, collect, and sell <br /> extraordinary NFTs
          </Stack>
          <Stack sx={{ height: "20%", fontSize: 40, ml: 8, mt: 4 }}>
            BelugaSea is the world's first and <br />
            largest NFT marketplace
          </Stack>
          <Stack
            direction="row"
            justifyContent="start"
            sx={{ height: "10%", ml: 8, mr: 20, mt: 4 }}
          >
            <Button
              sx={{ width: "30%", borderRadius: 5 }}
              component={Link}
              to="/list"
              variant="contained"
            >
              Explore
            </Button>
            <Button
              component={Link}
              to="/create"
              sx={{ width: "30%", ml: 6, borderRadius: 5 }}
              variant="outlined"
            >
              Create
            </Button>
          </Stack>
          <Stack alignItems="start" sx={{ height: "8%", mt: 4, ml: 8 }}>
            <Button>
              <PlayCircleFilledWhiteIcon />
              Learn more about OpenSea
            </Button>
          </Stack>
        </Stack>
        <Stack
          sx={{
            border: 1,
            borderRadius: 15,
            mr: 1,
            height: "100%",
            width: "50%",
            overflow: "hidden",
            cursor: "pointer",
            boxShadow: "1px 1px 1px 1px gray",
            "&:hover": {
              boxShadow: "3px 3px 3px 3px gray",
              transform: "translate(-2px, -2px, -2px, -2px)",
            },
          }}
        >
          <Stack
            sx={{
              border: 1,
              height: "85%",
              position: "relative",
            }}
          >
            <img
              style={{
                objectFit: "cover",
                width: "100%",
                height: "100%",
                position: "absolute",
              }}
              src="https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"
            />
          </Stack>
          <Stack
            direction="row"
            sx={{ height: "11%", width: "40%", mt: 1, ml: 8 }}
          >
            <Stack
              sx={{
                height: "100%",
                width: "30%",
                position: "relative",
              }}
            >
              <img
                style={{
                  objectFit: "cover",
                  width: "100%",
                  height: "100%",
                  position: "absolute",
                }}
                src="/beluga_login_removebg.png"
              />
            </Stack>
            <Stack
              sx={{
                height: "100%",
                width: "70%",
                ml: 1,
                justifyContent: "center",
                fontSize: 25,
              }}
            >
              NFT
              <br />
              team Beluga
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 15, height: "12%" }}>
        <Stack
          sx={{
            height: "20%",
            fontSize: 30,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Create and sell your NFTs
        </Stack>
        <Stack direction="row" sx={{ height: "80%", mt: 2 }}>
          <Stack
            sx={{
              height: "100%",
              width: "25%",
              fontSize: 23,
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <AccountBalanceWalletIcon sx={{ fontSize: 80, color: "blue" }} />
            Set up your wallet
            <Stack
              sx={{
                textAlign: "center",
                width: "100%",
                height: "50%",
                fontSize: 20,
                fontWeight: "medium",
                mt: 1,
              }}
            >
              Once you've set up your wallet
              <br />
              of choice, connect it to OpenSea
              <br />
              by clicking the wallet icon in the
              <br />
              top right corner. Learn about the
              <br />
              wallets we support
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "100%",
              width: "25%",
              fontSize: 23,
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <AppsIcon sx={{ fontSize: 80, color: "blue" }} />
            Create your collection
            <Stack
              sx={{
                textAlign: "center",
                width: "100%",
                height: "50%",
                fontSize: 20,
                fontWeight: "medium",
                mt: 1,
              }}
            >
              Click My collections and set up
              <br />
              your collection. Add social links,
              <br />
              a description, profile & banner
              <br />
              images, and set a secondary
              <br />
              sales fee.
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "100%",
              width: "25%",
              fontSize: 23,
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <ImageIcon sx={{ fontSize: 80, color: "blue" }} />
            Add your NFTs
            <Stack
              sx={{
                textAlign: "center",
                width: "100%",
                height: "50%",
                fontSize: 20,
                fontWeight: "medium",
                mt: 1,
              }}
            >
              Upload your work (image, video,
              <br />
              audio, or 3D art), add a title and
              <br />
              description, and customize your
              <br />
              NFTs with properties, stats, and
              <br />
              unlockable content.
            </Stack>
          </Stack>
          <Stack
            sx={{
              height: "100%",
              width: "25%",
              fontSize: 23,
              fontWeight: "bold",
              alignItems: "center",
            }}
          >
            <LoyaltyIcon sx={{ fontSize: 80, color: "blue" }} />
            List them for sale
            <Stack
              sx={{
                textAlign: "center",
                width: "100%",
                height: "50%",
                fontSize: 20,
                fontWeight: "medium",
                mt: 1,
              }}
            >
              Choose between auctions,
              <br />
              fixed-price listings, and
              <br /> declining-price listings. You
              <br />
              choose how you wnat to sell
              <br />
              your NFTs, and we help you sell them!
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack sx={{ mt: 5, height: "40%" }}>
        <Stack
          sx={{
            height: "20%",
            fontSize: 30,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Browse by category
        </Stack>
        <Stack sx={{ border: 1, height: "70%" }}></Stack>
      </Stack>
      <Stack sx={{ mt: 5, height: "30%", backgroundColor: "#e8f0fcd7" }}>
        <Stack
          sx={{
            height: "8%",
            fontSize: 40,
            fontWeight: "bold",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          Meet OpenSea
        </Stack>
        <Stack
          sx={{
            height: "5%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          The NFT marketplace with everything for everyone
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ height: "65%" }}
        >
          <ReactPlayer
            controls
            width="80%"
            height="100%"
            url="https://youtu.be/gfGuPd1CELo?list=TLGG0LpIW2LMI8cxNDA0MjAyMg"
          />
        </Stack>
        <Stack
          alignItems="center"
          justifyContent="center"
          sx={{ marginTop: 3, height: "15%" }}
        >
          <Button
            component={Link}
            to="/list"
            sx={{ height: "45%" }}
            variant="contained"
          >
            Explore the marketplace
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
