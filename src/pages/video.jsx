import React, { useContext, useEffect, useState } from 'react';
import { container as Container, Loading, PlaylistCard, Row } from '../components';
import { useParams } from 'react-router-dom';
import { TubeCloneContext } from '../context/context';
import imgVideo from '../assets/images/image 1.png';
import { dislike, like, save, share, threedot } from '../assets/svgs';

const Video = () => {
    const { id } = useParams();
    const { getVideo, iframeVideo, setIframeVideo, indexVideo,getCaptions } = useContext(TubeCloneContext);
    const [videoData, setVideoData] = useState(null);
    useEffect(() => {
        const fetchCaptions = async () => {
            try {
                const captions = await getCaptions(id);
                console.log("captions:",captions); // Log the fetched captions
            } catch (error) {
                console.error('Error fetching captions:', error);
            }
        };

        fetchCaptions();
    }, [getCaptions, id]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const fetchedData = await getVideo(id);
                console.log(fetchedData); // Log the fetched data
                setIframeVideo(fetchedData?.[indexVideo]?.id?.videoId);
                setVideoData(fetchedData); // Store fetched data in state
            } catch (error) {
                console.error('Error fetching video:', error);
            }
        };
        fetchData();
    }, [getVideo, id, setIframeVideo]);

    return (
        <Container className="w-100">
            <Row>
                <div className="video_details" id='video'>
                    <div className="row">
                        <div className="col-md-8 video_container">
                            {videoData && videoData.length > 0 ? (
                                <div className="videoPlaylists" key={videoData[indexVideo]?.id?.videoId}>
                                    <div className="video" key={videoData[indexVideo]?.id?.videoId}>
                                        <div className="video__">
                                            <iframe
                                                title="Video Player"
                                                src={`https://www.youtube.com/embed/${iframeVideo}`}
                                                frameBorder="0"
                                            ></iframe>
                                            <div className="details__">
                                                <h5>{videoData[indexVideo].snippet.title}</h5>
                                                <div className="row align-items-center">
                                                    <div className="col-md-6 px-0">
                                                        <p className='view_time'>
                                                            <div className="views">
                                                                <span>543,234 views</span>
                                                                <span>{new Date(videoData[indexVideo].snippet.publishedAt).toLocaleDateString()}</span>
                                                            </div>
                                                        </p>
                                                    </div>
                                                    <div className="col-md-6">
                                                        <div className="tools">
                                                            <span>
                                                                <a>
                                                                    <img src={like} alt="" />
                                                                </a>
                                                                <span>1.7K</span>
                                                            </span>
                                                            <span>
                                                                <a>
                                                                    <img src={dislike} alt="" />
                                                                </a>
                                                                <span>600</span>
                                                            </span>
                                                            <span>
                                                                <a>
                                                                    <img src={share} alt="" />
                                                                </a>
                                                                <span>share</span>
                                                            </span>
                                                            <span>
                                                                <a>
                                                                    <img src={save} alt="" />
                                                                </a>
                                                                <span>save</span>
                                                            </span>
                                                            <span>
                                                                <a>
                                                                    <img src={threedot} alt="" />
                                                                </a>
                                                            </span>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="about_of_video">
                                                    {videoData[indexVideo].snippet.description}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <Loading />
                            )}
                        </div>
                        <div className="col-md-4">
                            <div className="playLists">
                                {videoData && videoData.length > 0 ? (
                                    videoData.map((video, index) => (
                                        <PlaylistCard
                                            img={video?.snippet?.thumbnails?.default?.url || imgVideo}
                                            title={video?.snippet?.title || "Video Title"}
                                            chanelName={video?.snippet?.channelTitle || "Channel Name"}
                                            videoId={video?.id?.videoId || "videoId"}
                                            key={index}
                                            index={index}
                                        />
                                    ))
                                ) : (
                                    <Loading />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </Row>
        </Container >
    );
};

export default Video;
