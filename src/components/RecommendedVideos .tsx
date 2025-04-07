import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Link } from "react-router-dom";

const RecommendedVideos = () => {
  // Redux dan videos ni olish
  const { videos } = useSelector((state: RootState) => state.videos);

  // O'xshash videolarni topish uchun, masalan, tasodifiy videos olish (bu faqat misol)
  const relatedVideos = videos.slice(0, 5); // yoki, masalan, videos`ning birinchi 5 ta videosini ko'rsatish

  return (
    <div className="">
      {relatedVideos.length > 0 ? (
        relatedVideos.map((video) => (
          <Link
            key={video.video_id}
            to={`/videos/${video.video_id}`}
            className="flex gap-6 cursor-pointer hover:bg-white/10 rounded p-2 transition-all"
          >
            <img
              src={video.thumbnails[0].url}
              alt={video.title}
              className="w-24 h-16 rounded-lg object-cover"
            />
            <div>
              <p className="text-sm font-semibold line-clamp-2">
                {video.title}
              </p>
              <p className="text-xs text-gray-400">{video.author}</p>
            </div>
          </Link>
        ))
      ) : (
        <p className="text-sm text-gray-500">No recommendations found.</p>
      )}
    </div>
  );
};

export default RecommendedVideos;
