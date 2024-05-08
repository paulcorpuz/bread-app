// import * as userService from '../utilities/users-service';
// import { Link as RouterLink, Outlet } from 'react-router-dom';

// import NavBar from "../components/NavBar/NavBar"

// import { Grid, GridItem, } from "@chakra-ui/react"
// import Sidebar from '../components/SideBar/SideBar';
// // import {Grid} from "@chakra-ui/icons"


// export default function RootLayOut({ user, setUser }) {
//   function handleSignUp() {
//     userService.signUp();
//   }

//   function handleLogin() {
//     userService.login();
//   }

//   function handleLogOut() {
//     userService.logOut();
//     setUser(null);
//   }

//   const NavStyle = {
//     textAlign: 'center',
//     ':hover': {
//       bg: 'yellow.400',
//     }
//   }
//   return (
//     <Grid templateColumns='repeat(6, 1fr)' bg='gray.50'>
//       <GridItem
//         as='aside'
//         colSpan={{ base: 6, lg:2, xl:1 }}
//         bg='purple.400'
//         minHeight={{lg:'100vh'}}
//         p={{base:'20px', lg:'30px'}}
//       >
//         <Sidebar user={user} setUser={setUser} />
//       </GridItem>

//       <GridItem 
//         as='main' 
//         colSpan={{ base: 6, lg:4, xl:5 }}
//         p='40px'>
//       <NavBar />
//         <Outlet />


//       </GridItem>



//     </Grid>
//   )
// }