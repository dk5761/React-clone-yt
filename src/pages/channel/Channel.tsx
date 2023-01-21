import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/material'


import ChannelCard from '../../components/channelcard/ChannelCard'
import Videos from '../../components/videos/Videos'
import { fetchFromAPI } from '../../utils/api'
import { ChannelDetailsType, Item } from '../../utils/types/channelDetail'
import { SearchAPIResponse, Item as searchItem } from '../../utils/types'


const ChannelDetail = () => {

    const { id } = useParams();
    const [channelDetail, setChannelDetail] = useState<Item>()
    const [videos, setVideos] = useState<searchItem[]>()
    console.log(channelDetail, videos)

    useEffect(() => {
        // console.log('this is inside the useeffect')
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data: ChannelDetailsType) => {
            setChannelDetail(data?.items[0])
        })

        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data: SearchAPIResponse) => {
            setVideos(data?.items)
        })

    }, [id])

    return (
        <Box minHeight={"95vh"}>
            <Box>
                <div
                    style={{
                        // background: rgb(0,238,247),
                        background: "linear-gradient(90deg, rgba(0,238,247,1) 0%, rgba(206,3,184,1) 100%, rgba(0,212,255,1) 100%)",
                        zIndex: 10,
                        height: "300px"
                    }}

                />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
                <Box p={2} display="flex">
                    <Box sx={{ mr: { sm: '100px' } }} />
                    <Videos videos={videos} />
                </Box>

            </Box>
        </Box>
    )
}

export default ChannelDetail