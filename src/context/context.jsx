import React, { useState, createContext } from "react";
import { getDataFromAPI } from "../service/get";
// Assuming axios is imported, and API URLs and configurations are defined
export const TubeCloneContext = createContext();
export const TubeCloneContextProvider = ({ children }) => {
  const [videos, setVideos] = useState();
  const [iframeVideo,setIframeVideo] = useState();
  const [loading, setLoading] = useState(false);
  const getVideos = async (category) => {
    const { items } = await getDataFromAPI(`search?part=snippet&q=${category}`);
    return items;
  };
  const getCaptions = async (id) => {
    const { items } = await getDataFromAPI(
      `captions?part=snippet&videoId=${id}`
    );
    return items;
  }
  const getVideo = async (id) => {
    const { items } = await getDataFromAPI(
      `search?channelId=${id}&part=snippet&order=date`
    );
    return items;
  };
  
  const getChannel = async (id) => {
    const data = await getDataFromAPI(`channels?part=snippet&id=${id}`);
    return data?.items[0];
  };
  
  const getVideoDetails = async (id) => {
    const data = await getDataFromAPI(`videos?part=snippet,statistics&id=${id}`);
    return data.items[0];
  };
  
  const getRelatedVideos = async (id) => {
    const { items } = await getDataFromAPI(
      `search?part=snippet&relatedToVideoId=${id}&type=video`
    );
    return items;
  };
  const [indexVideo,setIndexVideo] = useState(0)
  const videosService = {
    getVideos,
    getVideo,
    getChannel,
    getVideoDetails,
    getRelatedVideos,
    getCaptions,
  };
  
  // Function to fetch data from API using Axios (example)
  const contextValue = {
    videos,
    setVideos,
    setIframeVideo,
    iframeVideo,
    indexVideo,
    loading,
    setLoading,
    setIndexVideo,
    ...videosService,
    // You can add more state variables, functions, or data here
  };
  return (
    <TubeCloneContext.Provider value={contextValue}>
      {children}
    </TubeCloneContext.Provider>
  );
};



