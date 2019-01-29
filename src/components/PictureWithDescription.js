import React from 'react';

function PictureWithDescription(props){
	/*
		props needed for this class:
			image props:
				pictureId: used for styling the image.
				src: img element source
				alt: description if img source can't display.
			caption props:
				captionId: used for styling the caption. 
	*/
	return(
	<div className={props.containerClass}>
		<img className={props.pictureClass} src={props.source} alt={props.altText}></img>	
		<div className={"caption-area"}>
			<p className={props.captionClass}>{props.caption}</p>
		</div>
	</div>
	)
}


export default PictureWithDescription;