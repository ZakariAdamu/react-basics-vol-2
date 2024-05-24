import React from "react";
import ReactPlayer from "react-player/youtube";

const MyIntroVideo = () => {
	const vidUrl = "https://www.youtube.com/watch?v=KCrXgy8qtjM";
	return (
		<div>
			<hr />
			<h3>Video Intro to Vite + React</h3>
			<ReactPlayer url={vidUrl} controls={true}></ReactPlayer>

			<hr />
		</div>
	);
};

export default MyIntroVideo;
