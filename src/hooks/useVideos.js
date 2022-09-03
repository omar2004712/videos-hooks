import { useEffect, useState } from 'react';
import youtube from '../apis/youtube';

export default function useVideos(defaultSearchTerm) {
  const [videos, setVideos] = useState([]);

  const search = async (term) => {
    const response = await youtube.get('/search', {
      params: {
        q: term,
      },
    });

    setVideos(response.data.items);
  };

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  return [videos, search];
}
