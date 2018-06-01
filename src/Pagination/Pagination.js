import React, { Component } from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes

// material-ui components

import IconButton from '@material-ui/core/IconButton';
import NextIcon from '@material-ui/icons/ChevronRight';
import PrevIcon from '@material-ui/icons/ChevronLeft';



class Pagination extends  Component {
  constructor(props) {
    super(props);    
  }

  render(){
    return (
      <div>                                                                      
        <IconButton  disabled={!this.props.from>0} onClick={this.props.onPrev}>
            <PrevIcon />
        </IconButton>                                      
          <IconButton onClick={this.props.onNext} 
            disabled={!(this.props.from + this.props.dataLength<this.props.max)}>
            <NextIcon />
          </IconButton>
            <span style={{verticalAlign: 'top',lineHeight:'50px', marginTop:'30px'}}> ({(this.props.from+1)+"-"+(this.props.from+this.props.dataLength)}) of {this.props.max}</span>
      </div>     
    );
  }
}

Pagination.propTypes = {
  onPrev: PropTypes.func,
  onNext: PropTypes.func
};

Pagination.defaultProps = {
  onPrev: ()=>{},
  onNext: ()=>{}
};

export default Pagination;
