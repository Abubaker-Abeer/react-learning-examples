import axios from 'axios';
import { useFormik } from 'formik';

export default function Register() {
  const formik = useFormik({
    initialValues: {
      userName: '',
      email: '',
      password: '',
    },
    onSubmit: RegisterUser,
  });

  async function RegisterUser() {
  const { data } = await axios.post(
    'http://localhost:3000/auth/register',
    formik.values
  );
  console.log(data);
}
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-floating mb-3">
        <input
          type="text"
          className="form-control"
          name="userName"
          id="userName"
          placeholder="User Name"
          value={formik.values.userName}
          onChange={formik.handleChange}
        />
        <label htmlFor="userName">User Name</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          placeholder="name@example.com"
          value={formik.values.email}
          onChange={formik.handleChange}
        />
        <label htmlFor="email">Email address</label>
      </div>

      <div className="form-floating mb-3">
        <input
          type="password"
          className="form-control"
          name="password"
          id="password"
          placeholder="Password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />
        <label htmlFor="password">Password</label>
      </div>

      <button type="submit" className="btn btn-outline-info">Register</button>
    </form>
  );
}
