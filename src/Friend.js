import React from 'react'

function Friend(props) {
    return (
        <div className="friend-component">
            <img src={props.friendInfo.img} alt="just a friend" className="profile_pic"/>
            <div className="name-age">
                <h4>{props.friendInfo.name}</h4>
                <p>{props.friendInfo.age}</p>
            </div>

        </div>
    )
}



export default Friend;
