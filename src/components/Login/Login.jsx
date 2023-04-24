import React, { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../firebase/firebase.inti'
const Login = () => {
    const auth = getAuth(app)
    const GoogleProvider = new GoogleAuthProvider();
    const GitHubProvider = new GithubAuthProvider();

    const [user, setUser] = useState(null);

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, GoogleProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser);
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    const handleGitHubSignIn = () => {
        signInWithPopup(auth, GitHubProvider)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser)
                setUser(loggedInUser)
            })
            .catch(error =>{
                console.log(error.message)
            })
    }


    const handleSignOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)
            })
            .catch(error => {
                console.log(error.message)
            })
    }



    return (
        <div>
            {
                user ?
                    <button onClick={handleSignOut}>Sign Out</button> :
                    <div>
                        <button onClick={handleGoogleSignIn}>Google Login</button>
                        <button onClick={handleGitHubSignIn}>GitHub Login</button>
                    </div>
            }
            {user && <div>
                <h2>User : {user?.displayName}</h2>
                <h4>Email : {user?.email}</h4>
                <img style={{ borderRadius: 50 }} src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;