import './App.css';

function App() {
  return (
    <>
      <main>
        <header>
          <a href='' className='logo'>
            My Blog
          </a>
          <nav>
            <a href=''>Login</a>
            <a href=''>Register</a>
          </nav>
        </header>
        <div className='entries'>
          <h1>Articles</h1>
          <div className='entry'></div>
        </div>
      </main>
    </>
  );
}

export default App;
