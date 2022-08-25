import React from 'react';
import VideoItem from './VideoItem';

export default function VideoList({ videos, onVideoSelect }) {
  const videosList = videos.map((video) => (
    <VideoItem
      onVideoSelect={onVideoSelect}
      key={video.id.videoId}
      video={video}
    />
  ));
  return <div className="ui relaxed divided list">{videosList}</div>;
}
