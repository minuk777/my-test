import React from 'react';
import style from './styles.css';

import Dropzone from 'react-dropzone';
import request from 'superagent';

class DropzoneDemo extends React.Component {
	onDrop(acceptedFiles, rejectedFiles) {
		console.log('Accepted files: ', acceptedFiles);
      		console.log('Rejected files: ', rejectedFiles);
	}

	onImageDrop(acceptedFiles, rejectedFiles) {
		console.log('Accepted files: ', acceptedFiles);
      		console.log('Rejected files: ', rejectedFiles);
	}
	
	render() {
		return(
			<div>
		            <Dropzone onDrop={this.onDrop}>
		              <div>Try dropping some files here, or click to select files to upload.</div>
		            </Dropzone>
		            <Dropzone
			      multiple={false}
			      accept="image/*"
			      onDrop={this.onImageDrop.bind(this)}>
			      <p>Drop an image or click to select a file to upload.</p>
			    </Dropzone>
		          </div>
		);
	}	
}

export default DropzoneDemo;
