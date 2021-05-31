import React from 'react';
import './App.css';
import Friend from './Friend';

function App() {
  const data = [
    {
      name: 'Bertie Yates',
      age: 29,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    },
    {
      name: 'Hester Hogan',
      age: 32,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
    },
    {
      name: 'Larry Little',
      age: 36,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
    },
    {
      name: 'Sean Walsh',
      age: 34,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
    },
    {
      name: 'Lola Gardner',
      age: 29,
      img: 'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
    },
  ]
  const [friends, setFriends] = React.useState(data)

  const clearState = () => {
    setFriends([])
  }

  const Restore = () => {
    setFriends(data)
  }
  return (<React.Fragment>
    <main className="main-box">
      <div className="container">
        <h2>{friends.length} birthdays today</h2>
        {friends.map((friend, index) => {
          return <Friend key={index} friendInfo={friend}/>
        })}
        <button className="btn" onClick={clearState}>Clear All</button>
        <button className="btn restore" onClick={Restore}>Restore</button>
      </div>
    </main>
    <p className='last-line'>Made with ReactJS<br></br>
Here is the Source Code : <a href="https://github.com/hellcatWahran/birthday-reminder-or-something-like-that" target='_blank' className="source-code">https://github.com/hellcatWahran/birthday-reminder-or-something-like-that</a></p>
  </React.Fragment>)
}

export default App;
