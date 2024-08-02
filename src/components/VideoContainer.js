import React, { useEffect, useState } from "react";
import { YOUTUBE_POPULAR_VIDEO_API } from "../utils/constants";
import VideoCards, { AdVideoCard } from "./VideoCards";
import { Link } from "react-router-dom";

const VideoContainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getYoutubePopularVideosData();
  }, []);

  const getYoutubePopularVideosData = async () => {
    const videoData = await fetch(YOUTUBE_POPULAR_VIDEO_API);
    const data = await videoData?.json();
    // console.log(data);
    setVideos(data?.items);
  };

  return (
    <div className="flex flex-wrap">
      {videos.length > 0 && <AdVideoCard info={videos[0]} />}
      {/* {console.log(videos[0])} */}
      {videos?.map((videos) => {
        // console.log(videos.id);
        return (
          <Link to={"/watch?v=" + videos.id} key={videos.id}>
            <VideoCards info={videos} />
          </Link>
        );
      })}
    </div>
  );
};

export default VideoContainer;
