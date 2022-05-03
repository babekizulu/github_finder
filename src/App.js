import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Navbar from './components/layouts/Navbar';
import User from './components/layouts/users/User';
import Alert from './components/Alert';
import Home from './components/pages/Home';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import GithubState from './context/github/GithubState';
import AlertState from './context/alert/AlertState';

import './App.css';


//render() is a Life Cycle Method 
// - It runs when the Component has loaded 
// - Special Methods that operate on Components throughout their duration
//   in the DOM
// EXAMPLES: mount, render, update, unmount

//We need one Main Parent Div for all of our JSX
//  - In this case it was the <div className='App'></div>

//If we don't want to use a Div as the Main Parent for our JSX,
// Then we can use <React.Fragment></React.Fragment> as the 
// Parent Div instead. 
//Note that if we import {Fragment}, we can use <Frament></Frament>
// or we could use empty tags <></> to represent Fragment tags

//EXPRESSIONS 
// - Using Variables in JSX 
//  const variableName = 'x';
//  <tag>Hello {variableName}</tag> --> Will output 'Hello x'
// - Using JS Operations in JSX 
//  <tag>{1+1}</tag> --> Will output 2
// - Using Methods in JSX
//  <tag>Hello {name.toUpperCase()}</tag> --> Will output 'Hello NAME'

// - Using Functions in JSX
//  const functionName = () => 'y';
//  <tag>Hello {functionName()}</tag> --> Will output 'Hello y'
//* WE CAN'T USE VARIABLES WHICH WERE DECLARED OUTSIDE OF RENDER METHOD
// In order to use a Function Declared outside of the Render Method, 
// and still within the Class, we can use "this"
// e.g: this.functionName()

//If Statements: 
// We can run If Statements above the return
// A Cleaner way to use If Statements with JSX is to 
// use a Ternary Operator
// {condition ? display something : display something else}

//PROPS
//- Properties that we can pass into a Component from Outside
// Inside the main App Component:
// <ComponentName propName="xyz"/>
// Inside the Specified Components Separate JS file
//  <tag>{this.props.propName}</tag> --> Will output 'xyz'

//DEFAULT PROPS 
//Inside your Specified Components Class, above Render:
// static defaultProps = {propName1:'property1', propName2: 'property2'}

//Component Level State 
// - State is Represented as a JS Object

//componentDidMount() Function 
// - This is where we can make Requests,
// - These Requests will be made when the component loads

//Hooks 
// - Functions that allow us to Hook into React State and Lifecycle,
//   from within a Functional Component 
// - We bring Hooks in by importing them from React 
// e.g: import {useState, useEffect} from 'react';
// useState: Allows us to Hook into React State within functional(fn) component
// useEffect: Allows us to Mimick some Life Cycle Methods
// useContext & useReducer: Used with the Context API 
//  -useContext makes it easy to bring our Context into any Component
//  -useReducer allows us to use a Reducer without having to use Redux
// Reducer: A Function which we can use to dispatch Actions that manipulate 
//          the App Level State
// useRef: Gives us a cleaner way to deal with React Refs 





const App = () => {
  
 
  //Search Github Users
  

  //Get a Specific User 
  

  //Get User's Repos
  

  //Clear Users from State 
  
  // Set Alert 
    return (
    <GithubState>
      <AlertState>
        <Router>
        <div className="App">
          <Navbar/>
          <div className="container">
            <Alert/>
            <Switch>
              <Route exact path='/' component={Home}/>
              <Route exact path='/about' component={About}/>
              <Route exact path='/user/:login' component={User}/>
              <Route component={NotFound}/>
            </Switch>
          </div>
        </div>
        </Router>
      </AlertState>  
    </GithubState>
   )
  
}

export default App;
