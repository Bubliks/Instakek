import React, {useEffect, useState} from "react";
import Image from "react-bootstrap/Image";

const customUser = {
    name: 'Vadim Efimenko',
    description: 'МГТУ',
    image: 'https://i.pinimg.com/originals/26/a2/0a/26a20a99d83cf280fe907a14674c1ad6.png',
}

const Profile = () => {
    const [user, setUser] = useState(customUser);

    useEffect(() => {
        // запрос
    })

    return (
        <div className='profile-wrapper'>
            <div>
                <Image height='300px' src={user.image} rounded />
            </div>
            <div>
                <h1><span className='first-symbol'>П</span>рофиль</h1>
                <h3>{user.name}</h3>
                <p>{user.description}</p>
            </div>
        </div>
    )

}

export { Profile };
