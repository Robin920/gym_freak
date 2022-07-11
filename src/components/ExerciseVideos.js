import React from 'react';
import {Box, Stack, Typography} from '@mui/material';

function ExerciseVideos({exerciseVideos, name}) {
  return (
    <Box sx={{marginTop: {lg: '200px',xs: '20px'}}} p="20px">
      <Typography variant='h3' mb='33px' ml={3}>
        Watch <span style={{color: '#800000', textTransform: 'capitalize', fontWeight: 'bold'}}>{name}</span> exercise videos
      </Typography>
      <Stack justifyContent='flex-start' flexWrap='wrap' alignItems='center'
        sx={{
          flexDirection: {lg: 'row'},
          gap: {lg: '90px',xs: '0'},
          marginLeft: '2rem'
        }}
      >
        {exerciseVideos?.slice(0,4).map((item,index) => (
          <a 
            key={index}
            classname='exercise-video'
            href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
            target='_blank'
            rel='noreferrer'
            style={{textDecoration: 'none'}}
          >
            <img src={item.video.thumbnails[0].url} alt={item.video.title} style={{height: '200px', width: '400px'}}/>
            <Box>
              <Typography variant='h6' color='#000'>
                {item.video.title}
              </Typography>
              <Typography variant='h6' color='#000' style={{fontSize: '1rem'}}>
                {item.video.channelName}
              </Typography>
            </Box>
          </a>
        ))}
      </Stack>
    </Box>
  )
}

export default ExerciseVideos