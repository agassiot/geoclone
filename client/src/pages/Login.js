import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useMutation } from "@apollo/client";
import { LOGIN_USER } from "../utils/mutations";

import Auth from "../utils/auth";

const Login = (props) => {
  const [formState, setFormState] = useState({ email: "", password: "" });
  const [login, { error, data }] = useMutation(LOGIN_USER);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: "",
      password: "",
    });
  };

  return (
    <main >
        <div className="card">
  <h4 className="card-header bg-dark text-light p-2">Login</h4>
    {data ? (
      <p>
        Success! We are heading <Link to="/clicktoplay">to play.</Link>
      </p>
    ) : (
          
<form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-96 justify-self-auto" onSubmit={handleFormSubmit}>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="email"> Email </label>
  <input className="form-input shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
    placeholder="Your email" id="email" name="email" type="text" value={formState.email}  onChange={handleChange} />
</div>

<div className="mb-6">
  <label className="block text-gray-700 text-sm font-bold mb-2" for="password">
    Password
  </label>
  <input className="form-input shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************" 
    name="password" value={formState.password} onChange={handleChange} />
</div>

<div className="flex items-center justify-between">
  <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
    Submit
  </button>
</div> 
</form>        
                
            )}

            {error && (
              <div className="my-3 p-3 bg-danger text-white">
                {error.message}
              </div>
            )}
          </div>
    </main>
  );
};

export default Login;
