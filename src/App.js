import React,{useContext} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Header';
import CHeader from './Components/CHeader';
import CFunc_clk from './Components/CFunc_clk';
import Stylesheet from './Components/Stylesheet';
import Form from './Components/Form';
import Inline from './Components/Inline';
import './Appstyle.css';
import Style from './Appstyle.module.css';
import Routing from './Components/Routing';
import Lyfcyc_A from './Components/Lyfcyc_A';
import Lyfcyc_B from './Components/Lyfcyc_B';
import Product from './Components/Product';
import PostList from './Components/PostList';
import PostForm from './Components/PostForm';
import HookCounter from './Components/HookCounter';
import HookObj from './Components/HookObj';
import HookAry from './Components/HookAry';
import ClsCounter1 from './Components/ClsCounter1';
import FuncCounter1 from './Components/FuncCounter1';
import ClsMouse from './Components/ClsMouse';
import HookMouse from './Components/HookMouse';
import A from './Components/A';
import Ap from './Components/Ap';
import FormikYup from './Components/FormikYup';
class App extends React.Component
{
  render(){
    const numbers = [1,2,3,4];
    return(
      <div className='App'>
        <div className='container mt-3'>
        <div className='row'>
        <div className='col md-5'>

        <h1 className='success'>Green</h1>
        <h1 className='error'>Error</h1>
        {/* <Header fname='Raahi' lname='Rana'>
        <p>D A D D E - D I - B A N D O O K</p>  
        </Header>

        <Header fname='Ap' lname='Dhillon'>
        <p>E X C U S E S</p>  
        </Header>

        <Header fname='Gurinder' lname='Gill'>
        <p>A R R O G A N T</p>  
        </Header> */}

        <CHeader fname='Gurneet' lname='Dosanjh'>
        <p>I N S T A</p>  
        </CHeader>

        <br></br>
        <CFunc_clk Label='White Hill' numbers={numbers}/>

        <Stylesheet isvalue={true}></Stylesheet>

        <br></br>
        <Inline/>

        <br></br>
        <Form/>

        <br></br>
        <Routing/>

        <br></br>
        <Lyfcyc_A/>
        
        <br></br>
        <Lyfcyc_B/>

        <br></br>
        <Product/>

        <br></br>
        <PostList/>

        <br></br>
        <PostForm/>

        <br></br>
        <HookMouse/>

        <br></br>
        <HookCounter/>

        <br></br>
        <HookObj/>

        <br></br>
        <HookAry/>

        <br></br>
        <ClsCounter1/>

        <br></br>
        <FuncCounter1/>

        <br></br>
        <ClsMouse/>

        <br></br>
        <A/>

        <br></br>
        <Ap/>

        <br></br>
        <FormikYup/>
             
     </div>
    </div>
  </div>
</div>

    );
  }
}

export default App;
