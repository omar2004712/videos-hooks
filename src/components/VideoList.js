import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos }) {
  const videosList = videos.map((video) => (
    <VideoItem key={video.id.videoId} video={video} />
  ));
  return <div>{videosList}</div>;
}
