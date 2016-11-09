import React from 'react';

class Apples extends React.Component {
	render() {
		let apple_obj = [];
		let back_color ="red";
		for (var i = 1000 - 1; i >= 0; i--) {
			if(i>900){
				back_color = "green";
			}else{
				back_color="red";
			}
			apple_obj.push(<div key={i} style={{
								width:15,
								height:15,
								backgroundColor:back_color,
								display:"inline-block",
								marginLeft:1,
								marginTop:0,
								marginBottom:0,
								borderRadius:"50%"
								}}></div>);
		}	
		return (
			<div>{apple_obj}</div>
		);
	}
}
export default Apples;