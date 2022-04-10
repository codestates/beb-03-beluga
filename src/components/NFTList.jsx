import dummydata from "../dummydata/dummydata"
import { Stack } from "@mui/material";
import NFTListShow from "./NFTListShow";
import { Link } from "react-router-dom";

const NFTList = () => {

    return (
    <Stack direction="row" justifyContent="center" sx={{flexWrap: "wrap"}}>
        {dummydata.map((el) => {
                return (
                <Stack key={el.id} alignItems="center" textAlign="center"
                        sx={{width: 450, border: 1, margin: 3, padding: -0.1, borderRadius: 4, boxShadow: "1px 1.5px gray", 
                        '&:hover': {"boxShadow": "2px 2px 2px 2px gray", "transform": "translate(-1px, -1px)"}}}>
                    <Link to={`/${el.id}`} style={{textDecoration: "none", color: "black", width:"100%"}}>
                        <NFTListShow data={el} />
                    </Link>
                </Stack>);
            })}
    </Stack>);
}

export default NFTList;