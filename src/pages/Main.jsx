import { Stack } from "@mui/material";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";
import PlayCircleFilledWhiteIcon from "@mui/icons-material/PlayCircleFilledWhite";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import LoyaltyIcon from "@mui/icons-material/Loyalty";
import AppsIcon from "@mui/icons-material/Apps";
import ImageIcon from "@mui/icons-material/Image";
import NFTListShow from "./component/NFTListShow";

export default function Main() {
  let data = {
    name: "nft",
    description: "test nft",
    image: "https://t1.daumcdn.net/cfile/tistory/24283C3858F778CA2E",
    attributes: [
      {
        external_link: "externalLink",
        blockchain: "etherium",
        token_type: "erc721",
      },
    ],
  };

  return (
    <Stack
      sx={{
        height: 3500,
        width: "100%",
        scrollBehavior: "smooth",
        overflowY: "scroll",
      }}
    >
      {/* 1번섹션 */}
      <Stack
        sx={{
          height: "20%",
          backgroundColor: "#e8f0fcd7",
          alignItems: "center",
        }}
      >
        <Stack
          direction="row"
          sx={{ height: "100%", width: "100%", maxWidth: 1700 }}
        >
          <Stack sx={{ height: "100%", width: "50%" }}>
            <Stack
              sx={{
                height: "30%",
                mt: 10,
                ml: 8,
                mr: 3,
                fontSize: 55,
                fontWeight: "bold",
              }}
            >
              Discover, collect, and sell <br /> extraordinary NFTs
            </Stack>
            <Stack sx={{ height: "20%", fontSize: 30, ml: 8, mt: 10 }}>
              BelugaSea is the world's first and <br />
              largest NFT marketplace
            </Stack>
            <Stack
              direction="row"
              justifyContent="start"
              sx={{ height: "10%", ml: 8, mr: 20, mt: 10 }}
            >
              <Button
                sx={{ width: "30%", borderRadius: 3 }}
                component={Link}
                to="/list"
                variant="contained"
              >
                Explore
              </Button>
              <Button
                component={Link}
                to="/create"
                sx={{ width: "30%", ml: 3, borderRadius: 3 }}
                variant="outlined"
              >
                Create
              </Button>
            </Stack>
            <Stack alignItems="start" sx={{ height: "8%", mt: 4, ml: 8 }}>
              <Button href="#youtube">
                <PlayCircleFilledWhiteIcon />
                Learn more about OpenSea
              </Button>
            </Stack>
          </Stack>
          <Stack
            sx={{
              border: 1,
              borderRadius: 15,
              ml: 8,
              mt: 4,
              height: "80%",
              width: "35%",
              overflow: "hidden",
              cursor: "pointer",
              boxShadow: "1px 1px 1px 1px gray",
              "&:hover": {
                boxShadow: "2px 2px 2px 2px gray",
                transform: "translate(-1px, -1px)",
              },
            }}
          >
            <Link
              style={{
                textDecoration: "none",
                color: "black",
                width: "100%",
              }}
              to="/list/35"
            >
              <NFTListShow data={data} />
            </Link>
          </Stack>
        </Stack>
      </Stack>

      {/* 2번섹션 */}
      <Stack
        sx={{
          mt: 15,
          height: "12%",

          alignItems: "center",
        }}
      >
        <Stack sx={{ height: "100%", width: "100%", maxWidth: 1700 }}>
          <Stack
            sx={{
              height: "20%",
              width: "100%",
              fontSize: 30,
              fontWeight: "bold",
              textAlign: "center",
              alignItems: "center",
            }}
          >
            Create and sell your NFTs
          </Stack>
          <Stack direction="row" sx={{ height: "80%", width: "100%", mt: 2 }}>
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
      </Stack>

      {/* 3번섹션 */}
      <Stack
        sx={{
          mt: 3,
          height: "40%",
          alignItems: "center",
        }}
      >
        <Stack sx={{ height: "100%", width: "100%", maxWidth: 1700 }}>
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
          <Stack sx={{ height: "70%", justifyContent: "space-around" }}>
            <Stack
              direction="row"
              sx={{
                height: "30%",
                justifyContent: "space-around",
              }}
            >
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/art.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Art
                </Stack>
              </Stack>
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/collectibles.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Collectibles
                </Stack>
              </Stack>
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/domain-names.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Domain Names
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                height: "30%",
                justifyContent: "space-around",
              }}
            >
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/music.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Music
                </Stack>
              </Stack>
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/photography-category.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Photography
                </Stack>
              </Stack>
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/sports.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Sports
                </Stack>
              </Stack>
            </Stack>
            <Stack
              direction="row"
              sx={{
                height: "30%",
                justifyContent: "space-around",
              }}
            >
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/trading-cards.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Tradding Card
                </Stack>
              </Stack>
              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/utility.png"
                  />
                </Stack>
                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Utility
                </Stack>
              </Stack>

              <Stack
                sx={{
                  border: 1,
                  width: "25%",
                  borderRadius: 4,
                  overflow: "hidden",
                }}
              >
                <Stack
                  sx={{
                    border: 1,
                    height: "70%",
                    position: "relative",
                  }}
                >
                  <img
                    style={{
                      position: "absolute",
                      objectFit: "cover",
                      height: "100%",
                      width: "100%",
                    }}
                    src="https://opensea.io/static/images/categories/virtual-worlds.png"
                  />
                </Stack>

                <Stack
                  sx={{
                    border: 1,
                    height: "30%",
                    fontSize: 30,
                    fontWeight: "bold",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  Virtual worlds
                </Stack>
              </Stack>
            </Stack>
          </Stack>
        </Stack>
      </Stack>

      {/* 마지막섹션 */}
      <Stack
        sx={{
          mt: 3,
          height: "30%",
          alignItems: "center",
          backgroundColor: "#e8f0fcd7",
        }}
      >
        <Stack sx={{ height: "100%", width: "100%", maxWidth: 1700 }}>
          <Stack
            id="youtube"
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
    </Stack>
  );
}
