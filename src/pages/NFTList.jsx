import dummydata from "../dummydata/dummydata";
import { Stack, Pagination } from "@mui/material";
import NFTListShow from "./component/NFTListShow";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const NFTList = () => {
  const LAST_PAGE = parseInt(dummydata.length / 10) + 1;
  const [page, setPage] = useState(1);
  const [nftData, setNftData] = useState(dummydata.slice(0, 10));

  useEffect(() => {
    if(page === LAST_PAGE){
      setNftData(dummydata.slice(10 * (page - 1)));
    } else {
      setNftData(dummydata.slice(10 * (page - 1), 10 * (page - 1) + 10));
    }
  }, [page]);

  const handlePage = (event) => {
    const nowPageInt = parseInt(event.target.outerText);
    setPage(nowPageInt);
  }

  return (
    <Stack alignItems="center">
      <Stack direction="row" justifyContent="center" sx={{ flexWrap: "wrap" }}>
        {nftData.map((el) => {
          return (
            <Stack
              key={el.id}
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
                to={`/list/${el.id}`}
                style={{ textDecoration: "none", color: "black", width: "100%" }}
              >
                <NFTListShow data={el} />
              </Link>
            </Stack>
          );
        })}
      </Stack>
      <Pagination count={LAST_PAGE} defaultPage={1} boundaryCount={2} 
        color="primary" size="large" sx={{margin: 2}} onChange={(e) => handlePage(e)}/>
    </Stack>
  );
};

export default NFTList;
