import React, { Component } from 'react';
import Menu from "../Menu";
import MenuItem from "../MenuItem";
import MenuButton from "../MenuButton";
import logo from "./logo.png";
import navBar from "./navBar.css";


class NavBar extends Component {
    constructor(props){
        super(props);
        this.state={
          menuOpen:false,
        }
      }
      
      handleMenuClick() {
        this.setState({menuOpen:!this.state.menuOpen});
      }
      
      handleLinkClick() {
        this.setState({menuOpen: false});
      }
      
      render(){
        const styles= 
          {
            container:{
              position: 'absolute',
              top: 0,
              left: 0,
              zIndex: '99',
              opacity: 0.9,
              display:'flex',
              alignItems:'center',
              background: 'black',
              width: '100%',
              color: 'white',
        
            },
            logo: {
              margin: '0 auto', 
            },
            branding: {
                height: '50px',
                positon: 'absolute'
            },
            body: {
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'right',
              width: '100vw',
              height: '100vh',
              filter: this.state.menuOpen ? 'blur(2px)':null,
              transition: 'filter 0.5s ease',
            },
          }
        const menu = ['PORTFOLIO','Contact']
    
        const menuItems = menu.map((val,index)=>{
          return (
            <MenuItem 
              key={index} 
              delay={`${index * 0.1}s`}
              onClick={()=>{this.handleLinkClick();}}>{val}</MenuItem>)
              
        });
      
        return(
          <div>
            <div style={styles.container}>
              <MenuButton open={this.state.menuOpen} onClick={()=>this.handleMenuClick()} color='white'/>
              <div style={styles.logo}>
                  <img src={logo} style={styles.branding} alt="a black circle with a white letter j and 2 ! displayed inside" /> </div>
            </div>
            <Menu open={this.state.menuOpen}>
              {menuItems}
              
            </Menu>
          
          </div>
        )
      }
    }
    
    

    
    
  
    

export default NavBar;