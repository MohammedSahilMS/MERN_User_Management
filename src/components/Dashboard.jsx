import React, { useState, useEffect } from 'react';
import axiosInstance from "../axiosInstance";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
    const [user, setUser] = useState(null);  // Corrected the useState syntax
    const navigate = useNavigate();

    useEffect(() => {
        const fetchUser = async () => {
            const token = localStorage.getItem("token");
            if (!token) {
                navigate("/login");
                return;
            }

            try {
                const res = await axiosInstance.get("/auth/user", {
                    headers: { "x-auth-token": token },
                });
                setUser(res.data);
            } catch (err) {
                console.error(err.response?.data?.msg || "An error occurred");
                localStorage.removeItem("token");
                navigate("/login");
            }
        };
        fetchUser();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate("/login");
    };

    return (
        <div>
            {user ? (
                <>
                    <h1>Welcome, {user.username}</h1>
                    <button onClick={handleLogout}>Logout</button>
                </>
            ) : (
                <p>Loading...</p> // Show a loading message while user data is being fetched
            )}
        </div>
    );
};

export default Dashboard;
