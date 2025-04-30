import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    avatar: null,
  });

  const [preview, setPreview] = useState(null);

  // Handle form field changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'avatar') {
      setFormData({ ...formData, avatar: files[0] });
      setPreview(URL.createObjectURL(files[0])); // Image preview
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form Submitted! Check console for data.');
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>User Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ display: 'block', margin: '10px 0', padding: '8px', width: '100%' }}
        />
        <input
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleChange}
          style={{ display: 'block', margin: '10px 0' }}
        />
<br><br></br></br>
        {/* Show preview if avatar is selected */}
        {preview && (
          <img
            src={preview}
            alt="Avatar Preview"
            style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '50%', margin: '10px 0' }}
          />
        )}

        <button type="submit" style={{ padding: '10px 20px', backgroundColor: 'blue', color: 'white', border: 'none' }}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserForm;
