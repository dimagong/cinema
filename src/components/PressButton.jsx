import React from 'react';


var classNames = require('classnames');

class PressButton extends React.Component {
  // ...
  render () {
    
    const {name, previousString, nextString} = this.props;

    const changeNumberPage =  previousString ? previousString : nextString ? nextString : 'counter_page';
    
    
    var btnClass = classNames({
      btn : true,
      'btn-danger btn-sm': nextString,
      'btn-dark btn-sm': previousString,
      'btn-secondary btn-sm': "counter_page"
    });
    return <button onClick={changeNumberPage} 
                    className={btnClass}
            >
            {name}
            </button>;
  }  
}

export default PressButton;