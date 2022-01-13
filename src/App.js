import './App.css';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import routes from './Routes';
import New from './test/New';
import NewsDetails from './Components/NewsDetails/NewsDetails';
import Test from './Test';
import Navbar from './Navbar';
import Footer from './Footer';
import FooterTest from './FooterTest';



function App() {
  console.log(routes)
  return (
<>
<Navbar/>
</>
  );
}

export default App;
{/* <div>
<Router>
<Switch>
{
  routes.map((route)=>{
    return <Route
     key={route.path}
     path={route.path}
     component={route.component}
     />
  })
}
</Switch>
</Router>  
  </div> */}