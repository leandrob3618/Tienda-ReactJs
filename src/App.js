
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';

// import "bulma/css/bulma.css"

function App() {
  return (
    <body>
      <header>
        <div className="App1">
          <NavBar />
        </div>
      </header>
      <footer>
        <div className="App2">
          <ItemListConteiner greeting={'Bienvenidos'} />
        </div>
      </footer>
    </body>
  );
}

export default App;
