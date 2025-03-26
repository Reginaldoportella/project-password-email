import React, { useState } from 'react';
import './App.css';

function App() {
  // Estados do componente
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Função de submissão do formulário
  const handleSubmit = (event) => {
    event.preventDefault();

    // Validações
    if (!email || !senha) {
      setError('Preencha email e senha');
      return;
    }

    if (senha.length < 6) {
      setError('Senha deve ter no mínimo 6 caracteres');
      return;
    }

    // Simulação de login
    setError('');
    setIsLoggedIn(true);
  };

  // Função de logout
  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail('');
    setSenha('');
  };

  // Renderização condicional
  return (
    <div className="container">
      {isLoggedIn ? (
        <div className="welcome-container">
          <h2>Bem-vindo!</h2>
          <p>Você está logado como: {email}</p>
          <button 
            onClick={handleLogout} 
            className="logout-button"
          >
            Sair
          </button>
        </div>
      ) : (
        <form className="login-form" onSubmit={handleSubmit}>
          <h1>Login</h1>
          
          {error && (
            <div className="error-message">
              {error}
            </div>
          )}

          <div className="form-group">
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="seu@email.com"
            />
          </div>

          <div className="form-group">
            <label htmlFor="senha">Senha</label>
            <input
              type="password"
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <button type="submit" className="login-button">
            Entrar
          </button>
        </form>
      )}
    </div>
  );
}

export default App;