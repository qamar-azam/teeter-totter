import React, {useEffect, useState} from 'react'
import useInterval from "../../helper/UseInterval";

const LeftSideWeight = props => {
	const
		min = 1,
		max = 10,
		delayDuration = 4000,
		colors = ['red', 'green', 'blue', 'grey'],
		blockTypes = ['triangle', 'circle', 'rectangle'];

	const
		[weightBlocks, setWeightBlocks] = useState([]),
		[delay, setDelay] = useState(true);

	useInterval(() => {
		createBlock()
	}, delay && props.isPlay ? delayDuration : null );

	const createBlock = () => {
		let
			randNum = Math.round(min + Math.random() * (max - min)),
			blockType = blockTypes[ Math.round(Math.random() * (2 - 0))],
			color = colors[ Math.round(Math.random() * (3 - 0))],
			weight = [...weightBlocks],
			totalWeight = 0;

		// styling for circle and rectangle
		let inlineStyle = {
			'backgroundColor': color,
			'width': randNum * 15,
			'height': randNum * 15,
		}

		// styling for triangle
		if(blockType === "triangle"){
			inlineStyle = {
				'borderWidth': `0 ${randNum*15/2}px ${randNum*15}px ${randNum*15/2}px`,
				'borderColor': `transparent transparent ${color} transparent`
			}
		}
		weightBlocks.map(block => {
			totalWeight = totalWeight + block.num
		});

		if(totalWeight >= props.rightSideWeight){
			props.setEqualWeight(true);
			setDelay(false)
		}else{
			weight.push({
					type: blockType,
					style: inlineStyle,
					num: randNum
			})

			props.setLefSideWeight(totalWeight);
			setWeightBlocks(weight)
		}
	}

	return(
		<div className="left-side">
			{/* map block elements */}
			{weightBlocks.map( block => {
				return (
					<div className="weight-box">
						<div
							className={"weight-box__obj "+block.type}
							style={block.style}
						>
							<span>{block.num}Kg</span>
						</div>
					</div>
				)
			})}
		</div>
	)
}

export default LeftSideWeight