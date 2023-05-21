import './App.css';
import './styles/styles.css'
import Header from './components/header';
import Footer from './components/footer';
import Body from './components/body';

function App() {
  return (
    <div className="App">
      <div className="initialcontainer">
        <Header title='Titulo de Cabecera'></Header>
        <Body title='Este es el cuerpo del contenedor principal'></Body>
        <Footer title='Titulo de Pie'></Footer>
      </div>
    </div>
  );
}

export default App;
