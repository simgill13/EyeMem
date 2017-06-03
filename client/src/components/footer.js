import React from 'react';
import {connect} from 'react-redux';
import $ from 'jquery';
import FontAwesome from 'react-fontawesome';

class Footer extends React.Component {
	constructor(props) {
		super(props);
	}
    render() { 
        return (
        	<div className="Nav2"> 
                <div className="imgicon">
                <p>  <FontAwesome className='fa fa-envelope-square' size='3x' aria-hidden='true'/> </p>
                <FontAwesome className='fa fa-envelope-square' size='3x' aria-hidden='true'/>
              <FontAwesome className='fa fa-facebook-square' size='3x' aria-hidden='true'/>
                </div>      		
        		<div className=" div1">
        			 
        		</div>
                <div className="div1">
              
                </div>
        	</div>
        );
    }
}
   
const mapStateToProps = (state) => ({
	displayName: state.displayName,
	currentUser: state.currentUser,
});

export default connect(mapStateToProps)(Footer);