import React from 'react';
import CardItem from './CardItem';
import './Cards.css'
function Cards() {
    return (
        <div className="cards">
            <h1>Our Creative Team!</h1>
            <div className="cards__container">
                <div className="cards__wrapper">
                    <ul className="cards__items">
                        <CardItem
                        src="https://media-exp1.licdn.com/dms/image/C5103AQEfvqCEgKxKlQ/profile-displayphoto-shrink_200_200/0/1582057579108?e=1625097600&v=beta&t=E1yPaCdLGS0J2yB2K2PlpoEh13seAlJ1g9eaMe_lRSg"
                        text="Himanshu Mandwal"
                        label="MERN developer"
                        path="/aboutUs"
                         />
                         <CardItem
                        src="https://media-exp1.licdn.com/dms/image/C5603AQFjbkzSL3BpDg/profile-displayphoto-shrink_200_200/0/1591102354840?e=1625097600&v=beta&t=rzwzFzJq0-mp_LIBg_a_TF7cPkYKTlQ1PzckaehVm00"
                        text="Dheeraj Khatri"
                        label="MERN developer"
                        path="/aboutUs"
                         />
                         <CardItem
                        src="data:image/jpeg;base64,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"
                        text="Harsh Gupta"
                        label="MERN developer"
                        path="/aboutUs"
                         />
                         <CardItem
                        src="https://yt3.ggpht.com/ytc/AAUvwnj3va5dW_XvS86-mSKyyOPXH1jzFdcBN-hX9GoG7Q=s900-c-k-c0x00ffffff-no-rj"
                        text="Ayush Barya"
                        label="MERN developer"
                        path="/aboutUs"
                         />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards