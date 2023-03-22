import React from 'react';

function Signin() { 

    return (
        <div className="flex flex-col items-center justify-center h-screen">
            <h2 className="text-3xl font-bold mb-6">Login</h2>
            <form className="flex flex-col space-y-4">
                <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-400 rounded" />
                <input type="password" placeholder="Password" className="px-4 py-2 border border-gray-400 rounded" />
                <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition duration-300 ease-in-out">Sign In</button>
            </form>
        </div>
    );
}

export default Signin;
