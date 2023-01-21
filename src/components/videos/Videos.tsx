import React from 'react'
import { Item } from '../../utils/types/index'
import { Box, Stack } from '@mui/material'
import VideoCard from '../videocard/VideoCard'
import ChannelCard from '../channelcard/ChannelCard'


interface VideoProps {
    videos?: Item[],
    direction?: "row" | "row-reverse" | "column" | "column-reverse"
}

const Videos: React.FC<VideoProps> = ({ videos, direction }: VideoProps) => {
    return (
        <Stack direction={direction || "row"} flexWrap={"wrap"} justifyContent={"start"} gap={2}>
            {
                videos?.map((item, idx) => (
                    <Box key={idx}>
                        {
                            item.id.videoId && <VideoCard video={item} />
                        }
                        {
                            item.id.channelId && <ChannelCard channelDetail={item} />
                        }

                    </Box>
                ))
            }

        </Stack>
    )
}

export default Videos

