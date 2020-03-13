import React from 'react'

const RightSideWeight = props => {
	const rand = props.rightSideWeight;
	const rightWeightSize =  `0 ${rand*15/2}px ${rand*15}px ${rand*15/2}px`;

	return(
		<div className="right-side">
			<div className="weight-box">
				<div
					className="weight-box__obj"
					style={{'borderWidth': rightWeightSize}}
				>
					<span>{rand}Kg</span>
				</div>
			</div>

			<div className="right-block-container">
				<div className="triangle-up">
					<span>30kg</span>
				</div>
				<div className="circle">
					<span>50kg</span>
				</div>
			</div>
		</div>
	)
}

export default RightSideWeight