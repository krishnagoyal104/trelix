import React from 'react';
import {fromWei} from '../utils/index';

const Asset = (props) => {

	const bool = props.fromDashboard;

	return(
		<div id="tradable-card" onClick={() => props.navigate(bool ? props.tokenId : props.orderId)}>
			<div id="tradable-card-top">
				<img id="asset-image" src={`https://trelix.s3.ap-south-1.amazonaws.com/icons/${props.tokenId}.png`}></img>
			</div>
			<div id="tradable-card-bottom">
				<div id="tradable-card-bottom-left">
					<span id="asset-issuer"><b>{bool ? props.item_details['Item name'] : props.metadata.item_details['Item name']}</b></span>
					<span id="asset-name">{bool ? props.item_details['Item type'] : props.metadata.item_details['Item type']}</span>
				</div>
				<div id="tradable-card-bottom-right">
					{!bool && <p id="asset-price">Ξ {props.price && fromWei(props.price)}</p>}
				</div>
			</div>
		</div>
	);
}

export default Asset;