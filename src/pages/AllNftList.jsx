import { Stack, Pagination } from "@mui/material";
import NFTListShow from "./component/NFTListShow";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { erc721Abi, erc721addr } from "../erc721/erc721";
import fetchMetaData from "../fetchMetaData/fetchMetaData";
import Loading from "./component/Loading";

const AllNftList = ({ web3, caver }) => {
  const [lastPage, setLastPage] = useState(-1);
  const [page, setPage] = useState(1);
  const [nftData, setNftData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalTokenNum, setTotalTokenNum] = useState(0);

  useEffect(() => {
    async function setPagination() {
      const tokenContract = await new web3.eth.Contract(erc721Abi, erc721addr);
      const totalSupply = await tokenContract.methods.totalSupply().call();
      setTotalTokenNum(totalSupply);
      if (totalSupply % 10 === 0) {
        setLastPage(parseInt(totalSupply / 10));
      } else {
        setLastPage(parseInt(totalSupply / 10) + 1);
      }
    }
    if (web3) {
      setPagination();
    }
  }, [totalTokenNum, web3]);

  useEffect(() => {
    async function fetchData() {
      const getNFTData = [];
      setIsLoading(true);
      const tokenContract = await new web3.eth.Contract(erc721Abi, erc721addr);

      let arr = [];

      let lastNum = page === lastPage ? totalTokenNum : 10 * (page - 1) + 10;
      for (let i = 10 * (page - 1); i < lastNum; i++) {
        arr.push(i + 1);
      }

      for (let tokenId of arr) {
        let tokenURI = await tokenContract.methods.tokenURI(tokenId).call();
        const tokenMetaData = await fetchMetaData(tokenURI);
        const tokenMetaDataJSON = await tokenMetaData.json();
        getNFTData.push({
          ...tokenMetaDataJSON,
          tokenId,
        });
      }
      setIsLoading(false);
      setNftData(getNFTData);
    }
    if (web3) {
      // web3가 있을 때만
      if (lastPage !== -1) {
        // pagination 정리가 끝난 뒤 데이터를 불러온다.
        fetchData();
      }
    }
  }, [web3, page, lastPage, totalTokenNum]);

  const handlePage = (event) => {
    const nowPageInt = parseInt(event.target.outerText);
    setPage(nowPageInt);
  };

  return isLoading ? (
    <Loading />
  ) : (
    <Stack width="100vw" textAlign="center">
      <Stack
        display="grid"
        sx={{
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 500px))",
          gridTemplateRows: "repeat(auto-fit, minmax(400px, 500px))",
          width: "100%",
          justifyContent: "center",
        }}
      >
        {nftData.map((el) => {
          return (
            <Stack
              key={el.tokenId}
              sx={{
                border: 1,
                margin: 3,
                padding: -0.1,
                borderRadius: 4,
                boxShadow: "1px 1.5px gray",
                "&:hover": {
                  boxShadow: "2px 2px 2px 2px gray",
                  transform: "translate(-1px, -1px)",
                },
              }}
            >
              <Link
                to={`/list/${el.tokenId}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                }}
              >
                <NFTListShow data={el} />
              </Link>
            </Stack>
          );
        })}
      </Stack>
      <Stack width="100%" alignItems="center">
        <Pagination
          count={lastPage === -1 ? 1 : lastPage}
          defaultPage={1}
          page={page}
          boundaryCount={2}
          color="primary"
          size="large"
          sx={{
            margin: 2,
          }}
          onChange={(e) => handlePage(e)}
        />
      </Stack>
    </Stack>
  );
};

export default AllNftList;
