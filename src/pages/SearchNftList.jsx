import NFTListShow from "./component/NFTListShow";
import { Stack, Pagination } from "@mui/material";
import { useParams, Link } from "react-router-dom"
import { useState, useEffect } from "react";
import { erc721Abi, erc721addr } from "../erc721/erc721";
import fetchMetaData from "../fetchMetaData/fetchMetaData";
import Loading from "./component/Loading";

const SearchNFTList = ({web3, caver}) => {

    const search = useParams().name;
    const [lastPage, setLastPage] = useState(1);
    const [page, setPage] = useState(1);
    const [nftData, setNftData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [pageNftData, setPageNftData] = useState([]);

    useEffect(() => {
        async function fetchData() {
          const getNFTData = [];
            setIsLoading(true);
            const tokenContract = await new web3.eth.Contract(
                erc721Abi,
                erc721addr
            );
            const totalSupply = await tokenContract.methods.totalSupply().call();
    
            if(search){
              // 검색한 값으로 필터링한다.
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
                if(tokenMetaDataJSON.name.match(search)){
                    getNFTData.push({ ...tokenMetaDataJSON, tokenId });
                } 
              }
            }
          setIsLoading(false);
          setNftData(getNFTData);
    
          if(getNFTData.length % 10 === 0){
            setLastPage(parseInt(getNFTData.length / 10));
          } else{
            setLastPage(parseInt(getNFTData.length / 10) + 1);
          }
        }
        if(web3){
          // web3가 있을 때만
          fetchData();
        }
      }, [web3, search]);
    
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

      return (isLoading ? <Loading/> : 
      <Stack alignItems="center">
        <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap" }}>
          {pageNftData.length > 0 ? pageNftData.map((el) => {
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
          }) : <p>검색 결과가 없습니다.</p>}
        </Stack>
        <Pagination count={lastPage} defaultPage={1} boundaryCount={2} 
          color="primary" size="large" sx={{margin: 2}} onChange={(e) => handlePage(e)}/>
      </Stack>
    );
}

export default SearchNFTList;