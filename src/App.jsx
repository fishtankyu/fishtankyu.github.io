import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <header>
        <h1>Welcome to My Portfolio</h1>
        <p>This is a space where I showcase my projects and skills.</p>
      </header>

      <section className="projects">
        <h2>My Projects</h2>
        <ul>
          <li>Project 1</li>
          <li>Project 2</li>
          <li>Project 3</li>
        </ul>
      </section>

      <section className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate developer with experience in Python, JavaScript, and Cybersecurity. Here are a few things I've worked on.
        </p>
      </section>

      <footer>
        <p>Made with ❤️ using React and Vite.</p>
      </footer>
    </div>
  );
}

export default App;
