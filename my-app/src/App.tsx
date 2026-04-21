import React from 'react';
import Post from './components/Post';
// Definindo o formato dos dados dos nossos posts
interface PostData {
  id: number;
  title: string;
  author: string;
  content: string;
}

function App() {
  // Aplicando a tipagem ao array de posts
  const postsData: PostData[] = [
    {
      id: 1,
      title: 'Entendendo o Virtual DOM',
      author: 'Alice Silva',
      content: 'O Virtual DOM permite que o React otimize as atualizações na interface...'
    },
    {
      id: 2,
      title: 'Props vs State',
      author: 'Beto Souza',
      content: 'Props são dados passados de cima para baixo (do pai para o filho)...'
    }
  ];

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Feed de Publicações</h1>
      
      {postsData.map(post => (
        <Post 
          key={post.id} 
          title={post.title} 
          author={post.author} 
          content={post.content} 
        />
      ))}
    </div>
  );
}

export default App;