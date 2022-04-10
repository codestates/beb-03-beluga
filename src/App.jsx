import {Stack} from "@mui/material";
import { BrowserRouter, Route, Switch, Link } from "react-router-dom";
import NFTList from './components/NFTList';
import NFT from "./components/NFT";
import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";

function App() {
    return (
      <>
        <BrowserRouter>
            <Stack
                sx={{border: 1,
                    height: 100,
                    flexDirection: "row"}}>
                    시작
                    <Link to='/'><AccessibilityNewIcon/></Link>
            </Stack>
            <Switch>
                <Route exact path="/">
                    <NFTList sx={{height: 600}}/>
                </Route>
                <Route path="/:id">
                    <NFT/>
                </Route>
            </Switch>
        </BrowserRouter>
      </>
    );
}

export default App;
