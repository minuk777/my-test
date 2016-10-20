import React from 'react';
import style from './styles.css';
import { connect } from "react-redux"

import { fetchUser, setUserName } from "./userActions"

@connect((store) => {
	return {
		user: store.user.user,
	};
})
class App extends React.Component{

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
				<div className={style.wrap_box}>
					<div className={style.title_wrap}>
						<div className={style.title_content}>Title</div>
					</div>
					<div className={style.content_wrap}>
						<div className={style.content_cont}>Content{this.props.name}</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default App;