import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';


const Hatspage = (props) => {
  console.log(props);
  return (
    <div>
      <h1>Hats</h1>
    </div>
  )
}
const TopicsLists = (props) => {
  console.log(props);
  const topicId = 7
  return (
    <div>
      <Link to={'/topics/'+topicId }> To Topic 7</Link>
      <Link to={`${props.match.url}/9`}> To Topic 9</Link>
      <h1>TopicsLists</h1>
    </div>
  )
}
const Topic  = (props) => {
  console.log(props);
return  (
  <div>
    <h1>Topic Details : {props.match.params.topicId}</h1>
  </div>
)
}
function App() {
  return ( 
    <div>
      <Switch>
        {/* <Route  exact path='/' component={HomePage}/>
        <Route exact path='/topics' component={TopicsLists}/>
        <Route path='/topics/:topicId' component={Topic}/> */}
        <Route  exact path='/' component={HomePage}/>
        {/* <Route exact path='/shop/hats' component={Hatspage}/> */}
        <Route exact path='/shop' component={ShopPage}/>
        </Switch>
     
    </div>
    
  );
}

export default App;
