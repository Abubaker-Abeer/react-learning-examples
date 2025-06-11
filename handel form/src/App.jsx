import { useState } from 'react';

export default function App() {
  const [formInputs, setFormInputs] = useState({
    name: '',
    email: '',
    age: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInputs({
      ...formInputs,
      [name]: value,
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    console.log(formInputs);
  };

  return (
    <>
      <form onSubmit={submitForm}>
        <label>user name</label>
        <input
          type="text"
          value={formInputs.name}
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>user email</label>
        <input
          type="email"
          value={formInputs.email}
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>user age</label>
        <input
          type="text"
          value={formInputs.age}
          name="age"
          onChange={handleChange}
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </>
  );
}
 