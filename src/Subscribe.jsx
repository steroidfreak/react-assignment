import React, { useState } from "react";

export default function Subscribe() {
    const [fullName, setFullname] = useState("");
    const [email, setEmail] = useState("");
    const [favoriteColor, setFavoriteColor] = useState("blue");
    const [country, setCountry] = useState("sg");
    const [comments, setComments] = useState("");
    const [hobbies, setHobbies] = useState([]);

    const updateFullname = (e) => {
        setFullname(e.target.value);
    }
    return (
        <>
            <div>
                <label>Full Name</label>
                <input type="text" value={fullName} placeholder="Your full name here" onChange={updateFullname} />
            </div>

        </>
    )
}