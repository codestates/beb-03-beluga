import { Stack, Pagination } from "@mui/material";
import NFTListShow from "./component/NFTListShow";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { erc721Abi, erc721addr } from "../erc721/erc721";
import fetchMetaData from "../fetchMetaData/fetchMetaData";
import Loading from "./component/Loading";

const NFTList = ({account = null, web3, caver}) => {

  const [lastPage, setLastPage] = useState(1);
  const [page, setPage] = useState(1);
  const [nftData, setNftData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [pageNftData, setPageNftData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const getNFTData = [];
      if(web3){
        setIsLoading(true);
        const tokenContract = await new web3.eth.Contract(
            erc721Abi,
            erc721addr
        );
        const totalSupply = await tokenContract.methods.totalSupply().call();

        if(totalSupply % 10 === 0){
          setLastPage(parseInt(totalSupply / 10));
        } else{
          setLastPage(parseInt(totalSupply / 10) + 1);
        }

        if(account){
          // 주소값으로 필터링
          let arr = [];
          for (let i = 1; i <= totalSupply; i++) {
              arr.push(i);
          }
          for (let tokenId of arr) {
              let tokenOwner = await tokenContract.methods
                  .ownerOf(tokenId)
                  .call();
              if (String(tokenOwner).toLowerCase() === account.toLowerCase()) {
                let tokenURI = await tokenContract.methods
                    .tokenURI(tokenId)
                    .call();
                const tokenMetaData = await fetchMetaData(tokenURI);
                const tokenMetaDataJSON = await tokenMetaData.json();
                getNFTData.push({ ...tokenMetaDataJSON, tokenId })
              }
          }
        } else {
          // 전부 보여준다.
          let arr = [];
          for (let i = 1; i <= totalSupply; i++) {
              arr.push(i);
          }
          for (let tokenId of arr) {
              let tokenURI = await tokenContract.methods
                  .tokenURI(tokenId)
                  .call();
              const tokenMetaData = await fetchMetaData(tokenURI);
              const tokenMetaDataJSON = await tokenMetaData.json();
              getNFTData.push({ ...tokenMetaDataJSON, tokenId })
          }
        }
      }
      setIsLoading(false);
      setNftData(getNFTData);
    }
    fetchData();
  }, [web3, account]);

  useEffect(() => {
    if(page === lastPage){
      setPageNftData(nftData.slice(10 * (page - 1)));
    } else {
      setPageNftData(nftData.slice(10 * (page - 1), 10 * (page - 1) + 10));
    }
  }, [page, lastPage, nftData]);

  const handlePage = (event) => {
    const nowPageInt = parseInt(event.target.outerText);
    setPage(nowPageInt);
  }

  if(isLoading){
    return (
    <Loading/>);
  }

  return (isLoading ? <Loading/> : 
    <Stack alignItems="center">
      <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap" }}>
        {pageNftData.map((el) => {
          return (
            <Stack
              key={el.tokenId}
              alignItems="center"
              textAlign="center"
              sx={{
                width: 450,
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
                style={{ textDecoration: "none", color: "black", width: "100%" }}
              >
                <NFTListShow data={el} />
              </Link>
            </Stack>
          );
        })}
      </Stack>
      <Pagination count={lastPage} defaultPage={1} boundaryCount={2} 
        color="primary" size="large" sx={{margin: 2}} onChange={(e) => handlePage(e)}/>
    </Stack>
  );
};

export default NFTList;
