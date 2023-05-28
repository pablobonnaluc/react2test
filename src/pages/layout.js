import '../styles/styles.css'
import MiniDrawer from '../components/minivariandrawer'

function Layout(props) {
 
    return (
        <div className="initialcontainer">
            <MiniDrawer />
            {/* <Header title='Titulo de Cabecera Modif'></Header>
            <Body title='Este es el cuerpo del contenedor principal'>
            </Body>
            <Footer title='Titulo de Pie'></Footer> */}
      </div>
      
    );
}

export default Layout;