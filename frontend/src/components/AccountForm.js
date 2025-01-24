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

    const userData = {
      name,
      email,
      address,
      password,
    };

    onSave(userData); // Assuming onSave is passed to save data
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>{existingUserData ? 'Edit Your Account' : 'Create Account'}</h2>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
      />
      <input
        type="text"
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        placeholder="Enter your address"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter your password"
      />
      <input
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        placeholder="Confirm your password"
      />
      <button type="submit">{existingUserData ? 'Update Account' : 'Create Account'}</button>
    </form>
  );
};

export default AccountForm;
