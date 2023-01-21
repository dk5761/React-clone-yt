import React from 'react'
import { Item } from '../../utils/types'
import { Link, useNavigate } from 'react-router-dom'
import { Typography, Card, CardContent, CardMedia } from '@mui/material'
import { CheckCircle } from '@mui/icons-material'

import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from '../../utils/constants'

interface VideoCardProps {
    video: Item
}

const VideoCard: React.FC<VideoCardProps> = ({ video: { id: { videoId }, snippet } }) => {

    // const navigate = useNavigate();

    // const handleOnCardClick = () => {
    //     const url = videoId ? `/video/${videoId}` : demoVideoUrl;
    //     return navigate(url)
    // }

    return (
        <Card sx={{
            width: {
                md: '320px',
                xs: '100%'
            },
            boxShadow: "none",

        }}
        // onClick={handleOnCardClick}
        >

            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>

                <CardMedia
                    image={snippet?.thumbnails?.high?.url}
                    sx={{
                        width: 358,
                        height: 180
                    }}
                />
            </Link>
            <CardContent sx={{
                backgroundColor: `#1e1e1e`,
                height: "106px"
            }} >
                <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                    <Typography variant='subtitle1' fontWeight={"bold"} color={"#FFF"}>
                        {
                            snippet?.title.slice(0, 60) ||
                            demoVideoTitle.slice(0, 60)
                        }
                    </Typography>
                </Link>
                <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                    <Typography variant='subtitle2' fontWeight={"bold"} color={"gray"}>
                        {
                            snippet?.channelTitle ||
                            demoChannelTitle
                        }
                        <CheckCircle sx={{ fontSize: 12, color: 'gray', ml: "5px" }} />
                    </Typography>

                </Link>
            </CardContent>

        </Card>
    )
}

export default VideoCard