import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


// --> takes prop from App Page (user, setUser)
export default function NavBar({ user, setUser }) { 
  function handleSignUp() {
    userService.signUp();
  }


  function handleLogin() {
    userService.login();
  }


  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  
  return (
    <nav> 
      {/* //logged in/out users */}
      <Link to="/">home</Link>
      &nbsp; | &nbsp;
      <Link to="/about">about</Link>
      &nbsp; | &nbsp;
      <Link to="/bakeries">bakeries</Link>
      &nbsp; | &nbsp;
      <Link to="/notes">notes</Link>
      &nbsp; --- &nbsp;

      {user ? ( 
        <>
          {/* Logged-in user */}
          <span>Hi {user.name}!!</span>
          &nbsp; | &nbsp;
          <Link to="/search">find bakeries</Link>
          &nbsp; | &nbsp;
          <Link to="/profile">profile</Link>
          &nbsp; | &nbsp;
          <Link to="/" onClick={handleLogOut}>log out</Link>
        </>
      ) : (

        <>
          {/* Logged-out user */}
          <Link to="/signup" onClick={handleSignUp}>sign up</Link>
          &nbsp; | &nbsp;
          <Link to="/login" onClick={handleLogin}>login</Link>
        </>

      )}
    </nav>


  );
}


/* === Notes === */
// &nbsp; = non-breaking space. space that will not break into a new line