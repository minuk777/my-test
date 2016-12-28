import React from "react";
import { connect } from "react-redux"
import {setUserName} from "./userActions"
import ReactInterval from 'react-interval';

@connect((store) => {
	return {
		username: store.user.myname,
	};
})
class PollingTest extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			count:0,
			name:"first",
		};
	}

	pollThis(){
		this.props.dispatch(setUserName());
		this.setState({count:this.state.count+1,name:this.props.username});
	}

	render() {
		return(
			<div>{this.state.count}:{this.state.name}<ReactInterval timeout={3000} enabled={true} callback={this.pollThis.bind(this)} /></div>
		);
	}
}

export default PollingTest;