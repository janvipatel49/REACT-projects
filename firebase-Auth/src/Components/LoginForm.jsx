import React, { useEffect, useState } from 'react'
import { signInWithPopup,signOut,onAuthStateChanged } from 'firebase/auth';
import { auth,provider } from '../firebase';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [user,setUser] = useState("");
    const navigate = useNavigate();

    const authLogin = async()=>{
        try{
            await signInWithPopup(auth,provider);
            alert("Login successfully");
            navigate('/')
        }
        catch(err){
            console.error(err);
        }
    }

    const logout = async()=>{
        await signOut(auth);
        alert("Logout successfully.!!");
    }

    useEffect(()=>{
        const stop = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
        })
        return ()=> stop;
    })

    console.log(user)
  return (
    <div>
        <button onClick={authLogin}>Continue With Google</button>
        <button onClick={logout}>Logout</button>

        {
            user && <div>
                <h2>{user.displayName}</h2>
                <h3>{user.email}</h3>
                <img src={user.photoURL} alt="" />
            </div>
        }

    </div>
  )
}

export default LoginForm