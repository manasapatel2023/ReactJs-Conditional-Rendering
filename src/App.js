import {Component} from 'react'

import Welcome from './components/Welcome'

import './App.css'

class App extends Component {
  state = {
    isLoggedIn: true,
  }
  // using if-else statement

  //   renderAuthButton = () => {
  //     const {isLoggedIn} = this.state
  //     if (isLoggedIn === true) {
  //       return <button>Logout </button>
  //     }
  //     return <button>Login</button>
  //   }

  //   render() {
  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {this.renderAuthButton()}
  //       </div>
  //     )
  //   }

  // using Element variables

  //   render() {
  //     const {isLoggedIn} = this.state
  //     let authButton
  //     if (isLoggedIn === true) {
  //       authButton = <button>Logout </button>
  //     } else {
  //       authButton = <button>Login</button>
  //     }

  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {authButton}
  //       </div>
  //     )
  //   }

  // using Ternary Operator

  //   render() {
  //     const {isLoggedIn} = this.state

  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn ? (
  //           <button>Yes, U can Logout</button>
  //         ) : (
  //           <button>Login first </button>
  //         )}
  //       </div>
  //     )

  // using Logical && operator

  //   render() {
  //     const {isLoggedIn} = this.state

  //     return (
  //       <div className="container">
  //         <Welcome greeting="Hello" name="User" />
  //         {isLoggedIn && <button>Yes, U can Logout..</button>}
  //         {!isLoggedIn && <button>Login first.. </button>}
  //       </div>
  //     )
  //   }

  // Default Props
  render() {
    return (
      <div className="container">
        <Welcome />
      </div>
    )
  }
}

export default App
