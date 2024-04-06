import { NavLink } from 'react-router-dom';
import { signOut } from "firebase/auth";
import { auth } from "../api/firebase";


export const Home = () => {
    const handleSignOut = () => {
        signOut(auth).then(() => {
        }).catch((error) => {
          console.error('Error during logout:', error);
        });
      };
    
return (
  <>
    { auth?.currentUser?.email && <h1>Hello {auth?.currentUser?.email}</h1>}
    { !auth?.currentUser?.email && <h1>Hello</h1>}
  </>
)
}