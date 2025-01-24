import React, { useState } from 'react';
import AccountForm from './AccountForm'; // Ensure this is correct

const AccountPage = () => {
  const [user, setUser] = useState(null); // Store logged-in user data (if available)

  // Function to handle saving user data (new or updated)
  const saveAccountData = (userData) => {
    if (user) {
      // If user is logged in, update their information
      alert('Account updated successfully!');
      setUser({ ...user, ...userData });
    } else {
      // If no user, create a new account
      alert('Account created successfully!');
      setUser(userData);
    }
  };

  return (
    <div>
      <h1>Account</h1>
      <AccountForm onSave={saveAccountData} existingUserData={user} />
      {user && (
        <div>
          <h3>Account Info:</h3>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Address: {user.address}</p>
        </div>
      )}
    </div>
  );
};

export default AccountPage;
