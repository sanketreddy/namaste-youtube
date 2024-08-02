import React from "react";

const VideoCards = ({ info }) => {
  //   console.log(info);
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;

  return (
    <div className="p-2 m-2 w-72 shadow-lg">
      <img alt="thumbnail" src={thumbnails.medium.url} className="rounded-xl" />
      <ul>
        <li className="font-bold py-2">{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// HOC
export const AdVideoCard = ({ info }) => {
  // const { snippet, statistics } = info;
  // const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="p-1 m-1 border border-red-900">
      <VideoCards info={info} />
      <p>Adv:</p>
    </div>
  );
};

export default VideoCards;
