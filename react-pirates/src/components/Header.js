import React from 'react';
import '../assets/css/Header.css'
import logo from '../assets/img/anchor.svg';

// import MyProvider from '../MyProvider';

// const Header = (props) => {
class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <img src={logo} className="logo" alt="logo" />
        {/* <MyContext.Consumer > */}
          <h1>{this.props.headline}</h1>
        {/* </MyContext.Consumer> */}
      </div>)
    }
  }
  
  
export default Header;

// import React from 'react';
// import '../assets/css/Header.css'
// import logo from '../assets/img/anchor.svg';

// const Header = (props) => {
//   return (
//     <div className="header">
//       <img src={logo} className="logo" alt="logo" />
//       <MyContext.Consumer >
//         {/* {(context) => ( */}
//           <h1>{props.headline}</h1>
//         {/* )} */}
//         </MyContext.Consumer>
//     </div>)
//   }
  
// export default Header;