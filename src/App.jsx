function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      <header className="text-center">
        <h1 className="text-4xl font-bold mb-2">Hi, I'm [Your Name] 👋</h1>
        <p className="text-lg text-gray-600">I'm a [your role, e.g., Full-Stack Developer]</p>
      </header>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">About Me</h2>
        <p className="text-gray-700 max-w-md">
          [A short bio about you — e.g., I love building beautiful, fast websites and exploring new tech...]
        </p>
      </section>

      <section className="mt-10">
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <ul className="space-y-4">
          <li className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Project 1</h3>
            <p className="text-gray-600">Description of project 1...</p>
          </li>
          <li className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-bold">Project 2</h3>
            <p className="text-gray-600">Description of project 2...</p>
          </li>
        </ul>
      </section>

      <footer className="mt-10 text-gray-500">
        <p>© [Your Name] {new Date().getFullYear()}</p>
      </footer>
    </div>
  )
}

export default App;
