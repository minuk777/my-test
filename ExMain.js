import React from 'react';
import style from './styles.css';
import { connect } from "react-redux"

import { fetchUser, setUserName } from "./userActions"

@connect((store) => {
	return {
		user: store.user.user,
	};
})
class ExMain extends React.Component{

	componentWillMount() {
		this.props.dispatch(fetchUser());
		//this.props.dispatch(setUserName("will"));
	}
	render(){
		const { user } = this.props; 
		console.log(user);
		return(
			<div>
				<h1>{user.name}</h1>
				<LinkBtn backcolor={"green"} btnName={"Wall Sit"} />
				<LinkBtn backcolor={"#8fc"} btnName={"Pull Up"} />
				<LinkBtn backcolor={"red"} btnName={"Push Up"} />
			</div>
		);
	}
}

class LinkBtn extends React.Component {
	
	render() {
		var divStyle = {
		  color: "white",
		  fontsize:15,
		};	
		return(
			<div style={{"width":100+"px",
					"height":100+"px",
					"lineHeight":100+"px",
					"textAlign":"center",
					"display":"inline-block",
					"fontSize":20,
					"color":"#fff",
					"borderRadius":50,
					"background":this.props.backcolor
				}}>{this.props.btnName}</div>
			);
	}
}

export default ExMain;