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
      <Link to="/about">about</Link>
      &nbsp; | &nbsp;
      <Link to="/bakeries">bakeries</Link>
      &nbsp; | &nbsp;
      {user ? (
        <>
          <Link to="/bakeries/new">add bakery</Link>
          &nbsp; | &nbsp;
          <Link to="/profile">profile</Link>
          &nbsp; | &nbsp;
          <span>Hi {user.name}!!</span>
          &nbsp; | &nbsp;
          <Link to="/" onClick={handleLogOut}>log out</Link>
        </>
      ) : (
        <>
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