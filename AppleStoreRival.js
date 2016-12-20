import React from 'react';

class AppleStoreRival extends React.Component {

	render() {
		let div_table = {
			width:"100%",
			fontSize:0,
			display:"table",
			textAlign:"center",
			borderSpacing:"5px 5px"

		}
		let div_table_row = {
			display:"table-row",
		}
		let div_table_cell = {
			width:"45%",
			display:"table-cell",
			fontSize:10,
			textAlign:"center",

		}

		let example = {
			border:"4px solid #BEDAF0"
		}
		
		return(
			<div>
				<div style={div_table}>
					<div style={div_table_row}>
						<div style={div_table_cell}>
							<div style={example}>mine</div>
						</div>
						<div style={div_table_cell}>
							rival
						</div>
					</div>
				</div>	
			</div>
		);
	}
}

export default AppleStoreRival