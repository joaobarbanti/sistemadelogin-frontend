import { useState } from "react";
import api from "../services/api";
import { NavLink, useNavigate } from "react-router-dom";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 

  async function registerUser(event) {
		event.preventDefault()
const res = 
		 await api.post('/api/register', {
				name,
				email,
				password,
		})
   
const data = await res.data

if (data.status === 'ok') {
  navigate('/login')
}


  }
  return (
    <div className="supercard">
      <div class="container">
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <form class="row g-3" onSubmit={registerUser}>
              <div className="login">
                <NavLink to="/login">
                  {" "}
                  <h8 className="loginlink">Fazer Login</h8>{" "}
                </NavLink>
              </div>
              <h1>Fazer Registro</h1>
              <div class="col-md-6">
                <label for="inputEmail4" class="form-label">
                  Coloque seu E-mail
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
                  Coloque sua Senha
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
                <label class="form-label">Coloque seu Nome</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="insira seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col-12">
                <button type="submit" class="btn btn-primary">
                  Registre
                </button>
              </div>
            </form>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Register;
