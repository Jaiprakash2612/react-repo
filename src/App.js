import React from 'react';
import './App.css';
import {Switch,Route,Link, Redirect} from 'react-router-dom';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUp from './pages/signin-and-signup/signin-and-signup.component';
import Header from './components/header/header.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import setCurrentUser from './redux/user/user.actions';

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
    
    // this.state ={
    //   currentUser: null   // no need as we are using redux 
    // }
  }
  unsubscribeFromAuth = null;
  
  componentDidMount() {
    const {setCurrentUser} = this.props;
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth)=> {
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          // this.setState({
          //   currentUser:{
          //     id: snapShot.id,                    ///  no need as we are using redux 

          //     ...snapShot.data()
          //   }
          // }, () => console.log("user state change",this.state.currentUser));
          setCurrentUser({
                id: snapShot.id,
                ...snapShot.data()
              })
        });


      }
      setCurrentUser(userAuth);
    });
    
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render(){
    return ( 
      <div>
        {/* <Header currentUser={this.state.currentUser}></Header>   //without redux */}
        <Header ></Header>   { /* with redux */}
        <Switch>
          {/* <Route  exact path='/' component={HomePage}/>
          <Route exact path='/topics' component={TopicsLists}/>
          <Route path='/topics/:topicId' component={Topic}/> */}
          <Route  exact path='/' component={HomePage}/>
          {/* <Route exact path='/shop/hats' component={Hatspage}/> */}
          <Route exact path='/shop' component={ShopPage}/>
          <Route exact path='/signin' render={()=> this.props.currentUser? <Redirect to='/'/>: (<SignInAndSignUp/>) }/>
          </Switch>
       
      </div>
      
    );
  }
}
const mapStateToProps = ({user}) => ({
  currentUser : user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser : user => dispatch(setCurrentUser(user))
})
export default connect(mapStateToProps,mapDispatchToProps)(App);
