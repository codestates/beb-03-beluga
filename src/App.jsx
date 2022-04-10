import AccessibilityNewIcon from "@mui/icons-material/AccessibilityNew";
import { Stack } from "@mui/material";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Create from "./Create";

function App() {
  return (
    <BrowserRouter>
      <Link to="/create">Create</Link>
      <Switch>
        <Route path="/create">
          <Create></Create>
        </Route>
      </Switch>
      {/*
        <Stack sx={{ background: "black", border: 1, height: 600 }}>
          <AccessibilityNewIcon></AccessibilityNewIcon>
        </Stack>
  */}
    </BrowserRouter>
  );
}

export default App;
