import React, { useState } from 'react';

// Tipando as Props que o componente vai receber de cima
interface PostProps {
  title: string;
  author: string;
  content: string;
}

// Aplicando a tipagem (PostProps) aos parâmetros da função
function Post({ title, author, content }: PostProps) {
  // Opcional, mas boa prática: Tipar o state como <number>
  const [likes, setLikes] = useState<number>(0);

  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div style={{ 
      border: '1px solid #ddd', 
      borderRadius: '8px', 
      padding: '16px', 
      marginBottom: '20px',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
    }}>
      <h2 style={{ marginTop: 0 }}>{title}</h2>
      <p style={{ color: '#555', fontSize: '0.9em' }}><strong>Autor:</strong> {author}</p>
      <p>{content}</p>
      
      <button 
        onClick={handleLike}
        style={{
          backgroundColor: '#007bff',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          borderRadius: '4px',
          cursor: 'pointer',
          fontWeight: 'bold'
        }}
      >
        👍 Like ({likes})
      </button>
    </div>
  );
}

export default Post;