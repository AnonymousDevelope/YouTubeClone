import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { TubeCloneContext } from '../context/context'
const CardVideoTube = ({ imageHard, title, own, views,videoId, time, ownImage, time_video = "23:45" }) => {
    const {setIframeVideo} = useContext(TubeCloneContext)
    const handleChangeRouteParams = (params)=>{
        setIframeVideo(params)
    }
    return (
        <Link onClick={handleChangeRouteParams(videoId)} className='text-decoration-none' to={`/video/${videoId}`}>
            <div className="tubeCard">
                <div className="top">
                    <img src={imageHard} alt="" />
                    <div className="relesasetime">{time_video}</div>
                </div>
                <div className="row">
                    <div className="col-md-2">
                        <img src={ownImage} alt="" className="avatar" />
                    </div>
                    <div className="col-md-10">
                        <h5>{title}</h5>
                        <p>{own}</p>
                        <p>{views + "   Views"} {time + "   years ago"}</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default CardVideoTube