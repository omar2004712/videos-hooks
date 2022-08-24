import React from 'react';

export default function VideoItem({ video }) {
  return <div>{video.snippet.title}</div>;
}
