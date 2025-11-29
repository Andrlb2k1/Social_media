import React, { useState } from 'react'
import axios from 'axios'

function ChangePassword() {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");

    const changePassword = () => {
        axios.put("http://localhost:3001/auth/changepassword", {
            oldPassword: oldPassword,
            newPassword: newPassword
        },
            {
                headers: {
                    accessToken: localStorage.getItem("accessToken")
                }
            }
        ).then((response) => {
            if (response.data.error) {
                alert(response.data.error);
            } else {
                alert("Password Changed Successfully!");
            }
        });
    };

    return (
        <div className="changePasswordContainer">
            <h1>Change Your Password</h1>
            <label>Old Password:</label>
            <input type="password" onChange={(event) => {
                setOldPassword(event.target.value);
            }} />
            <label>New Password:</label>
            <input type="password" onChange={(event) => {
                setNewPassword(event.target.value);
            }} />
            <button onClick={changePassword}>Save Changes</button>
        </div>
    )
}

export default ChangePassword