import dummydata from "../dummydata/dummydata"
import { Stack } from "@mui/material";
import NFTListShow from "./NFTListShow";
import { Link } from "react-router-dom";

const NFTList = () => {

    return (dummydata.map((el) => {
        return (<Stack key={el.id} sx={{width: 450}}>
            <Link to={`/${el.id}`}>
                <NFTListShow data={el} />
            </Link>
        </Stack>);
    }));
}

export default NFTList;