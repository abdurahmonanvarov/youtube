import { useEffect, useState } from "react";
import { YTService } from "../service/api.service";
import { VideoType } from "../types";

const Added = () => {
  const [addVideos, setAddVideos] = useState<VideoType[]>([]);

  useEffect(() => {
    const fetchLikedVideos = async () => {
      const storedId = localStorage.getItem("Add"); // LocalStorage-dan ID olish
      if (storedId) {
        try {
          const data = await YTService.getVideoDetails(storedId);
          setAddVideos([data]); // Bitta video bo‘lgani uchun array sifatida saqlaymiz
        } catch (error) {
          console.error("Error fetching liked videos:", error);
        }
      }
    };

    fetchLikedVideos();
  }, []);

  return (
    <div className="container py-10">
      <h2 className="text-xl font-bold mb-4">Liked Videos</h2>
      {addVideos.length > 0 ? (
        addVideos.map((video) => (
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

export default Added;
