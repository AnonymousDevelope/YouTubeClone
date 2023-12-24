import React, { useEffect, useContext } from 'react';
import { CardVideoTube, Loading } from '../components';
import avatar from '../assets/images/User-Avatar.png';
import VideoFront from '../assets/images/image 1.png';
import { TubeCloneContext } from '../context/context';
import { getDataFromAPI } from '../service/get';
import { getDate } from '../utils/constants';
const Main = () => {
    const { videos, setVideos,loading } = useContext(TubeCloneContext);
    useEffect(() => {
        const fetchDataAndUpdateVideos = async () => {
            try {
                const data = await getDataFromAPI('search?part=snippet&q=reactjs');
                console.log(data);
                setVideos(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchDataAndUpdateVideos();
    }, [setVideos]);

    return (
        <main className='tube__main'>
            {/* Check if 'videos' is defined and has 'items' property before mapping */}
            {videos && videos.items && !loading  && videos.items.length > 0 ? (
                videos.items.map((video, index) => (
                    <CardVideoTube 
                        key={index}
                        title={video.snippet.title}
                        // description={video.snippet.description}
                        avatar={avatar}
                        imageHard={video.snippet.thumbnails.high.url}
                        channelName={video.snippet.channelTitle}
                        views={"15M "}
                        time={getDate(video.snippet.publishedAt)}
                        videoId={video.snippet.channelId}
                    />
                ))
            ) : (
                <Loading />
            )}
        </main>
    );
};

export default Main;
