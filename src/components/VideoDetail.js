import React from 'react';

export default function VideoDetail({ video }) {
  return <div>{video ? video.snippet.title : 'no video'}</div>;
}
