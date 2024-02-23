
import './App.css';
import NavBar from './components/NavBar/Navbar';
import ItemListConteiner from './components/ItemListConteiner/ItemListConteiner';
import ItemCount from './components/ItemCount/ItemCount';

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
          <ItemCount initial={1} stock={100} onnAdd={(quantity) => console.log('cantidad agregada' ,quantity)}/>
        </div>
      </footer>
    </body>
  );
}

export default App;
