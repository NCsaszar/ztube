import { useState, useEffect } from 'react';
import { fetchAPI, fetchRelatedAPI } from '../utils/fetchAPI';

export const useVideoData = (videoId) => {
  const [videoDetail, setVideoDetail] = useState(null);
  const [videos, setVideos] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetchAPI('videos', { part: 'snippet,statistics', id: videoId })
      .then((data) => {
        setVideoDetail(data.items[0]);
        return fetchRelatedAPI(videoId);
      })
      .then((data) => {
        setVideos(data.videos);
      })
      .finally(() => setLoading(false));
  }, [videoId]);

  return { videoDetail, videos, loading };
};
