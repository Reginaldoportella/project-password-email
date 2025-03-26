import React from 'react';

function Botao({ texto, onClick }) {
  return (
    <button 
      onClick={onClick}
      style={{ 
        padding: '10px 20px', 
        backgroundColor: '#4CAF50', 
        color: 'white',
        border: 'none',
        borderRadius: '4px',
        cursor: 'pointer'
      }}
    >
      {texto}
    </button>
  );
}
