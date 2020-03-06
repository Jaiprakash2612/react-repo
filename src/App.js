import React from 'react';
import './App.css';
import {Switch,Route,Link} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import {auth} from './firebase/firebase.utils';


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
// function App() {
//   return ( 
//     <div>
//       <Header></Header>
//       <Switch>
//         {/* <Route  exact path='/' component={HomePage}/>
//         <Route exact path='/topics' component={TopicsLists}/>
//         <Route path='/topics/:topicId' component={Topic}/> */}
//         <Route  exact path='/' component={HomePage}/>
//         {/* <Route exact path='/shop/hats' component={Hatspage}/> */}
//         <Route exact path='/shop' component={ShopPage}/>
//         <Route exact path='/signin' component={SignInAndSignUp}/>
//         </Switch>
     
//     </div>
    
//   );
// }

class App extends React.Component {
  constructor(){
    super();
    
    this.state ={
      currentUser: null
    }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user)=> {
      this.setState({currentUser: user});
      console.log(user)
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return ( 
      <div>
        <Header currentUser={this.state.currentUser}></Header>
        <Switch>
          {/* <Route  exact path='/' component={HomePage}/>
          <Route exact path='/topics' component={TopicsLists}/>
          <Route path='/topics/:topicId' component={Topic}/> */}
          <Route  exact path='/' component={HomePage}/>
          {/* <Route exact path='/shop/hats' component={Hatspage}/> */}
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' component={SignInAndSignUp}/>
          </Switch>
       
      </div>
      
    );
  }
}
export default App;
