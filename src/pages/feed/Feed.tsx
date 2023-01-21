import React, { useState, useEffect } from 'react'
import { Box, Stack, Typography } from '@mui/material'
import SideBar from '../../components/sidebar/SideBar'
import Videos from '../../components/videos/Videos'
import { fetchFromAPI } from '../../utils/api'
import { SearchAPIResponse, Item } from '../../utils/types/index'

const Feed = () => {

    const [selectedCategory, setSelectedCategory] = useState('New');
    const [videos, setVideos] = useState<Item[]>();

    useEffect(() => {
        fetchFromAPI(`search?part=snippet&q=${selectedCategory}`).then((data: SearchAPIResponse) => {
            setVideos(data.items)
        })
    }, [selectedCategory])

    return (
        <Stack sx={{ flexDirection: { sx: "column", md: "row" } }} >
            <Box sx={{
                height: {
                    sx: "auto",
                    md: "92vh",

                },
                borderRight: "1px solid #3d3d3d",
                px: {
                    sx: 0,
                    md: 2
                }
            }}>
                <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />

                <Typography className='copyright' variant='body2' sx={{
                    mt: 1.5,
                    color: "#fff"
                }}>
                    CopyRight
                </Typography>

            </Box>

            <Box p={2} sx={{
                overflowY: 'auto',
                height: "90vh",
                flex: 2

            }} >
                <Typography variant="h4" fontWeight={"bold"} mb={2} sx={{
                    color: "white"
                }}>
                    {selectedCategory} <span style={{
                        color: "#F31503"
                    }}>
                        videos
                    </span>
                    <Videos videos={videos} />
                </Typography>
            </Box>
        </Stack>
    )
}

export default Feed