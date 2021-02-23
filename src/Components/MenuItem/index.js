import React, { Component } from 'react';

class MenuItem extends Component{
    constructor(props){
      super(props);
      this.state = {
        hover:false,
      }
    }
    
    handleHover(){
      this.setState({hover:!this.state.hover});
    }
    
    render(){
      const styles={
        container: {
          opacity: 0,
          animation: '1s appear forwards',
          animationDelay:this.props.delay,
        },
        menuItem:{
          fontFamily:`'Poppins', sans-serif`,
          fontSize: '1.2rem',
          padding: '0.5rem 0',
          textAlign: 'right',
          margin: '0 5%',
          cursor: 'pointer',
          color: this.state.hover? '#f85712':'#fafafa',
          transition: 'color 0.2s ease-in-out',
          animation: '0.5s slideIn forwards',
          animationDelay:this.props.delay,
  
        },

      }
      return(
        <div style={styles.container}>
          <div 
            style={styles.menuItem} 
            onMouseEnter={()=>{this.handleHover();}} 
            onMouseLeave={()=>{this.handleHover();}}
            onClick={this.props.onClick}
          >
            {this.props.children}  
          </div>
          
      </div>  
      )
    }
  }
  
export default MenuItem;