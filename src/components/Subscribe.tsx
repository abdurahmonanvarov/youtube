import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { useEffect, useState } from "react";
import { VideoType } from "../types";
import { Link } from "react-router-dom";

const Subscribe = () => {
  const [subscribedVideos, setSubscribedVideos] = useState<VideoType[]>([]);
  const { videos } = useSelector((state: RootState) => state.videos); // Redux'dan videos olish

  // LocalStorage'dan Subscribe id'larini olish
  useEffect(() => {
    const storedIds = JSON.parse(localStorage.getItem("Subscribe") || "[]");

    if (storedIds.length > 0) {
      // Saqlangan id'lar asosida videolarni filtrlash
      const filteredVideos = videos.filter((video) =>
        storedIds.includes(video.video_id)
      );
      setSubscribedVideos(filteredVideos); // Filtrlangan videolarni subscribedVideos ga qo'shish
    }
  }, [videos]); // Redux store'dagi videos o'zgarganda qayta ishlaydi

  // Sahifani yangilaganda 'localStorage'ga yangi obuna videolarini qo'shish
  const updateLocalStorage = (newVideoId: string) => {
    const currentSubscribedIds = JSON.parse(
      localStorage.getItem("Subscribe") || "[]"
    );

    if (!currentSubscribedIds.includes(newVideoId)) {
      currentSubscribedIds.push(newVideoId);
      localStorage.setItem("Subscribe", JSON.stringify(currentSubscribedIds)); // Yangilangan ma'lumotni localStorage'ga saqlash
    }
  };

  const handleSubscribe = (videoId: string) => {
    updateLocalStorage(videoId); // Obunani yangilash
  };

  return (
    <div className="container py-10">
      <h2 className="text-xl font-bold mb-4">Subscribed Channel</h2>
      {subscribedVideos.length > 0 ? (
        subscribedVideos.map((video) => (
          <Link
            to={`/videos/${video.video_id}`}
            key={video.video_id}
            className="flex gap-4 border-b py-4"
          >
            <img
              src={video.thumbnails[1].url}
              alt={video.title}
              className="w-40 rounded-lg"
            />
            <div>
              <p className="text-5xl opacity-70">{video.author}</p>
              <p className="text-sm opacity-70">
                {video.number_of_views} views - {video.published_time}
              </p>
              <button
                onClick={() => handleSubscribe(video.video_id)}
                className="text-sm text-blue-500 mt-2"
              >
                Subscribe
              </button>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-gray-400">No subscribed videos yet.</p>
      )}
    </div>
  );
};

export default Subscribe;
