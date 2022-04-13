import { Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import QueueOutlinedIcon from '@mui/icons-material/QueueOutlined';
import SaveAsOutlinedIcon from '@mui/icons-material/SaveAsOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import HistoryIcon from '@mui/icons-material/History';

export default function Profile (isLogin) {
  return (
    <> 
      <Stack 
        sx={{border: 0, height: 1000, width:"97%"}}>

          <Stack 
            sx={{border: 0, height: 100, width: "100%"}}
          >
            <img src="/wave2.png"/>
            {/* Here's background div */}
          </Stack>

          <Stack
            sx={{border: 0, borderColor:"none", height: 100 , width: "100%"}}>
            {/* Here's profile and info div */}
          </Stack>

          <Stack  
            position="absolute"
            direction="row" 
            //justifyContent="center"
            //alginItems= "center"
            sx={{border:0, borderRadius: "50%", height: 100, width: 100, marginTop:6, marginLeft:"43%"}}
          >
            {isLogin ? (
                <img src="/beluga_login_removebg.png" />
              ) : (
                <img src="/beluga(notlogin).png" />
              )}
            {/* Here's Profile Icon */}
          </Stack>

          <Stack  
            position="absolute"
            direction="column"
            alignItems="left"
            sx={{border: 0, height: 60, width: 200, marginTop:18, marginLeft:"40%"}}
          >
            Name
            Account info
            Joined Day
          </Stack>

          <Stack
            direction="row"
            justifyContent="space-around"
            sx={{border:0, height: 40, width:"100%"}}
          >
          {/* Here's Navigation Bar  */}
            <Link to="/collected" style={{textDecoration:"none"}}>
              <Button
                to="/collected"
                sx={{
                  height:70,
                  fontSize:17,
                  fontWeight:"bolder"
                }}
              >
                <QueueOutlinedIcon/>
                Collected
              </Button>

            </Link>
            <Link to="/created" style={{textDecoration:"none"}}>
              <Button
                to="/created"
                sx={{
                  height:70,
                  fontSize:17,
                  fontWeight:"bolder"
                }}
              >
                <SaveAsOutlinedIcon/>
                Created
              </Button>
            </Link>

            <Link to="/favorited" style={{textDecoration:"none"}}>
              <Button
                to="/favorited"
                sx={{
                  height:70,
                  fontSize:17,
                  fontWeight:"bolder"
                }}
              >
                <FavoriteBorderOutlinedIcon/>
                Favorited
              </Button>
            </Link>

            <Link to="/hidden" style={{textDecoration:"none"}}>
              <Button
                to="/hidden"
                sx={{
                  height:70,
                  fontSize:17,
                  fontWeight:"bolder"
                }}
              >
                <VisibilityOffIcon/>
                Hidden
              </Button>
            </Link>

            <Link to="/activity" style={{textDecoration:"none"}}>
              <Button
                to="/activity"
                sx={{
                  height:70,
                  fontSize:17,
                  fontWeight:"bolder"
                }}
              >
                <HistoryIcon/>
                Activity
              </Button>
            </Link>
          </Stack>

       
      </Stack>
    </>
  )
  


}