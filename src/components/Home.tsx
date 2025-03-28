import { useSelector } from "react-redux";
import Videos from "./Videos";
import { RootState } from "../redux/store";

const Home = () => {
  const { videos, isLoading, error } = useSelector(
    (state: RootState) => state.videos
  );
  return (
    <div className="py-10">
      <h1 className="text-3xl container font-semibold">Recommended Videos</h1>
      {error ? (
        <div>{error}</div>
      ) : isLoading ? (
        <div className="text-5xl text-center py-20 text-white">
          <i className="fa fa-circle-notch fa-spin"></i>
        </div>
      ) : (
        videos != null && <Videos videos={videos} />
      )}
    </div>
  );
};

export default Home;
