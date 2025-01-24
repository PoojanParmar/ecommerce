import React, { useState } from 'react';

const AccountForm = ({ onSave, existingUserData }) => {
  const [name, setName] = useState(existingUserData ? existingUserData.name : '');
  const [email, setEmail] = useState(existingUserData ? existingUserData.email : '');
  const [address, setAddress] = useState(existingUserData ? existingUserData.address : '');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation for password match
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    // Account creation or updating the existing user data
    const userData = {
      name,
      email,
      address,
      password, // password would only be used during account creation
    };

    onSave(userData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingUserData ? 'Edit Your Account' : 'Create Account'}</h2>
      
      <label>Name</label>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />
      
      <label>Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <label>Shipping Address</label>
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
        required
      />

      <label>Password</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
        required={!existingUserData}
      />

      <label>Confirm Password</label>
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
        required={!existingUserData}
      />

      <button type="submit">{existingUserData ? 'Update Account' : 'Create Account'}</button>
    </form>
  );
};

export default AccountForm;
