import {Stack} from "@mui/material";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import NFTList from './components/NFTList';
import NFT from "./components/NFT";

function App() {
    return (
      <>
        <Stack
            sx={{border: 1,
                height: 100,
                flexDirection: "row"}}>
                  시작
        </Stack>
            <BrowserRouter>
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
