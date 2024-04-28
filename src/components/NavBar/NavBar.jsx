import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';


// --> takes prop from App Page (user, setUser)
export default function NavBar({ user, setUser }) { 
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <span>Hi {user.name}!!</span>
      &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}


/* === Notes === */
// &nbsp; = non-breaking space. space that will not break into a new line