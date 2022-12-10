import { useState } from "react";
import {  useNavigate } from "react-router-dom";
import api from "../services/api";


function Login() {

const navigate = useNavigate()

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

	async function loginUser(event) {
		event.preventDefault()

		const res = await api.post('/api/login', {
				email,
				password,
		})

    const data = await res.data

		if (data.finduser) {
			localStorage.setItem('token', data.finduser)
			alert('Login successful')
			navigate("/private")
		} else {
			alert('Please check your username and password')
		}
	}
  return (
    <div className="supercard">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <form class="row g-3" onSubmit={loginUser}>
              <h1>Fazer Login</h1>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Insira seu e-mail
                </label>
                <input
                  placeholder="insira seu e-mail"
                  type="email"
                  class="form-control"
                  id="inputEmail4"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="col-md-6">
                <label for="inputPassword4" class="form-label">
                  Insira sua Senha
                </label>
                <input
                  placeholder="insira sua senha"
                  type="password"
                  class="form-control"
                  id="inputPassword4"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div class="col-12">
        
                <button type="submit" class="btn btn-primary">
                  Entre
                </button>

              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Login;
