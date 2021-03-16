import React, { useState } from "react";
import NavigationBar from "../Layout/NavigationBar";
 
export default function Login(props) {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    })

    const handleInputChange = (e) => {
        e.preventDefault();
        const { target: { name, value } } = e;
        setFormData({
            [name]: value
        })
    }

    return (
        <>
        <NavigationBar />
        <div className="flex h-screen bg-gray-100">
        <div className="w-full max-w-xs m-auto bg-gray-50 rounded p-5">   
        <header>
            <img className="w-20 mx-auto mb-5" src="https://i.imgur.com/SgyiNSp.png" alt="logo" />
        </header>   
        <form>
            <div>
            <label className="block mb-2 text-blue-500" for="username">Username</label>
                        <input className="w-full p-2 mb-6 text-blue-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300"
                            type="text" name="username" onChange={handleInputChange} value={formData.username} />
            </div>
            <div>
            <label className="block mb-2 text-blue-500" for="password">Password</label>
                        <input className="w-full p-2 mb-6 text-blue-700 border-b-2 border-blue-500 outline-none focus:bg-gray-300" type="password" name="password"
                             onChange={handleInputChange} value={formData.password}
                        />
            </div>
            <div>          
            <input className="w-full bg-blue-700 hover:bg-pink-700 text-white font-bold py-2 px-4 mb-6 rounded" type="submit" />
            </div>       
        </form>  
        <footer>
            <a className="text-blue-700 hover:text-pink-700 text-sm float-left" href="/">Forgot Password?</a>
            <a className="text-blue-700 hover:text-pink-700 text-sm float-right" href="/">Create Account</a>
        </footer>   
            </div>
            </div>
            </>
    )
}
