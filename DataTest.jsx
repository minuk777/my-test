import React from 'react';
import style from './styles.css';

class DataTest extends React.Component{

	loadCommentsFromServer: function() {
	    $.ajax({
	      url: this.props.url,
	      dataType: 'json',
	      cache: false,
	      success: function(data) {
	        this.setState({data: data});
	      }.bind(this),
	      error: function(xhr, status, err) {
	        console.error(this.props.url, status, err.toString());
	      }.bind(this)
	    });
	  },
	  getInitialState: function() {
	    return {data: []};
	  },
	componentDidMount: function() {
	    this.loadCommentsFromServer();
    		setInterval(this.loadCommentsFromServer, this.props.pollInterval);
	},
	render(){
		return(
			<div>
				<div className={style.wrap_box}>
					<div className={style.title_wrap}>
						<div className={style.title_content}>Title</div>
					</div>
					<div className={style.content_wrap}>
						<div className={style.content_cont} >Content{this.props.name}</div>
						<div className={style.content_cont} data={this.state.data}>Content{this.props.name}</div>
					</div>	
				</div>
			</div>
		);
	}
}

export default DataTest;