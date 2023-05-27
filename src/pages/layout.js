import '../styles/styles.css'
import Header   from '../components/header';
import Body     from '../components/body';
import Footer   from '../components/footer';

function Layout(props) {
 
    return (
        <div className="initialcontainer">
            <Header title='Titulo de Cabecera Modif'></Header>
            <Body title='Este es el cuerpo del contenedor principal'>
            </Body>
            <Footer title='Titulo de Pie'></Footer>
      </div>
    );
}

export default Layout;