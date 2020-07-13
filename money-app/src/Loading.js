import React, {useRef, useEffect} from 'react';
import './Loading.css'

const Loading = props => {
	let timerID = useRef(null);
	
	useEffect(() => {
		return () => {
			clearTimeout(timerID)
		}
	}, []);
	
	const loadingFunc = () => {
		timerID = setTimeout(()=>{
			props.history.push('/');
		}, 2000);
	}
	return(
		<div className="App">
			<h1>Loading...</h1>
			<div className="loading"></div>
			{loadingFunc()}
		</div>
	)
}

export default Loading;