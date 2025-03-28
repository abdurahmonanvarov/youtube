import React from "react"
import { VideoType } from "../types"
import VideoCard from "./VideoCard"

interface PropsTypes {
  videos: VideoType[]
}

const Videos: React.FC<PropsTypes> = ({videos}) => {
  return (
    <div className="grid max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 container grid-cols-4 gap-x-6 gap-y-10 py-10">
      {videos.map(v => (
        <VideoCard video={v} key={v.video_id}/>
      ))}
    </div>
  )
}

export default Videos
