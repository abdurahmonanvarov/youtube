import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { VideoType } from "../types";

const Like = () => {
  const [likedVideos, setLikedVideos] = useState<VideoType[]>([]);
  const { videos } = useSelector((state: RootState) => state.videos); // Redux'dan videos olish

  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("Like") || "[]"); // LocalStorage'dan Like id larini olish

    if (storedIds.length > 0) {
      // Saqlangan id'lar asosida videolarni filtrlash
      const filteredVideos = videos.filter((video) =>
        storedIds.includes(video.video_id)
      );
      setLikedVideos(filteredVideos); // Filtrlangan videolarni likedVideos ga qo'shish
    }
  }, [videos]); // videos o'zgarganda qayta ishlaydi

  return (
    <div className="container py-10">
      <h2 className="text-xl font-bold mb-4">Liked Videos</h2>
      {likedVideos.length > 0 ? (
        likedVideos.map((video) => (
          <div key={video.video_id} className="flex gap-4 border-b py-4">
            <img
              src={video.thumbnails[0].url}
              alt={video.title}
              className="w-40 rounded-lg"
            />
            <div>
              <h3 className="text-lg font-bold">{video.title}</h3>
              <p className="text-sm opacity-70">{video.author}</p>
              <p className="text-sm opacity-70">
                {video.number_of_views} views - {video.published_time}
              </p>
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-400">No liked videos yet.</p>
      )}
    </div>
  );
};

export default Like;
