import React, { useEffect } from 'react'
import './App.css'
import { useState } from 'react';

export default function App() {
  // let users = [];
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilterUsers] = useState([]);
  const [isLodder, setIsLodder] = useState(false)
  const [message, setMessage] = useState("")



  async function fetchUsers() {
    try {
      // showLoader();
      setIsLodder(true);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      const data = await response.json();
      console.log(data)
      setUsers(data);
      // displayUsers(users);

    } catch (error) {
      console.error('Error fetching users:', error);
      // showNoResults('Failed to load users. Please try again later.');
      setMessage('Failed to load users. Please try again later.');
    } finally {
      setIsLodder(false);
    }
  }
  useEffect(() => { fetchUsers() }, [])
  // // Display users in the grid
  //   function displayUsers(usersToDisplay) {
  //     if (!usersToDisplay.length) {
  //       // showNoResults('No users found matching your search.');
  //       setMessage('No users found matching your search.');
  //       return;
  //     }
  //
  //     // userMatrix.style.display = 'flex';
  //     // userMatrix.innerHTML = usersToDisplay.map(createUserCard).join('');
  //   }
  //
  useEffect(() => { setFilterUsers(users); console.log("transfer filter data dn",filteredUsers,users) }, [users])
  // // Filter users based on search input
  function filterUsers(searchTerm) {
    const filteredUsers = users.filter(user =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilterUsers(filteredUsers);
  }
  //
  // // Event Listeners
  // searchInput.addEventListener('input', (e) => {
  //     filterUsers(e.target.value);
  // });
  //
  // // Initialize the app
  // fetchUsers();
  return (
    <div className='body'>
      <div className="container">
        <header className='header'>
          <h1>RoboGang</h1>
          <div className="search-container">
            <i className="fas fa-search"></i>
            <input onChange={(e) => {filterUsers(e.target.value)}} type="text" id="searchInput" placeholder="Search users..." />
          </div>
        </header>
        {isLodder ? <div id="userLoader" >
          <p>Loading users...</p>
        </div> : <></>}


        <main id="userMatrix" className={`${message && "flex"}`} >
          {message ? <div className="no-results">
            <i className="fas fa-search"></i>
            <p>${message}</p>
          </div> : <></>}
        </main>
        <div id='userMatrix'>
          {filterUsers?
          filteredUsers.map(user => {
            return <div className="user-card">
              <img
                src={`https://robohash.org/4${user.id}?set=set2&size=200x200`}
                alt={user.name}
                className="user-image"
                loading="lazy"
              />
              <div className="user-info">
                <h2 className="user-name">{user.name}</h2>
                <div className="user-details">
                  <p><i className="fas fa-envelope"></i> {user.email}</p>
                  <p><i className="fas fa-map-marker-alt"></i> {user.address.city}, {user.address.street}</p>
                  <p><i className="fas fa-phone"></i> {user.phone}</p>
                </div>
              </div>
            </div>
          }):null}
        </div>
      </div>
    </div>
  )
}

