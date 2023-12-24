import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { TubeCloneContext } from '../context/context';

const PlaylistCard = ({ img, videoId, title, chanelName, index }) => {
    const { setIframeVideo, setIndexVideo, getCaptions } = useContext(TubeCloneContext);

    const handleChangeVideo = () => {
        setIframeVideo(videoId);
        setIndexVideo(index);
        window.scrollTo(0, 0);
    };



    return (
        <Link onClick={handleChangeVideo} className='text-decoration-none text-white'>
            <div className="playlistCardVideo">
                <img src={img} alt="" />
                <div className='details'>
                    <h5 className='title_video'>{title}</h5>
                    <p className='chanel_name'>{chanelName}</p>
                    <span className='views_time'>1M views 3 years ago</span>
                </div>
            </div>      
        </Link>
    );
};

export default PlaylistCard;
