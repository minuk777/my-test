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
			ball:"./loading_ball1.gif",
			ball2:"./loading_ball2.gif"
		};
	}

	pollThis(){
		this.props.dispatch(setUserName());
		this.setState({count:this.state.count+1,name:this.props.username});
	}

	render() {
		return(
			<div style={{backgroundColor:"yellow"}}>{this.state.count}:{this.state.name}
			<img src={this.state.ball} /><img src={this.state.ball2} />
			<ReactInterval timeout={3000} enabled={true} callback={this.pollThis.bind(this)} />
			</div>
		);
	}
}

export default PollingTest;