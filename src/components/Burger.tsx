import { Link } from "react-router-dom";

interface BurgerMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const Burger: React.FC<BurgerMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-[#181818] shadow-lg transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out z-50`}
    >
      <button className="absolute top-4 right-4 text-white" onClick={onClose}>
        <i className="fa fa-times text-2xl"></i>
      </button>

      <div className="px-6 py-6">
        <div className="flex items-center gap-2">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
            alt="YouTube Logo"
            className="w-10"
          />
          <h2 className="text-white text-lg font-bold">YouTube</h2>
        </div>

        <nav className="mt-6">
          <ul className="text-white flex flex-col text-lg space-y-4">
            <Link
              to="/"
              className="cursor-pointer hover:text-red-500 flex items-center gap-4"
              onClick={onClose}
            >
              <i className="fa fa-home text-xl"></i>
              Home
            </Link>
            <Link
              to="/like"
              className="cursor-pointer hover:text-red-500 flex items-center gap-4"
              onClick={onClose}
            >
              <i className="fa fa-thumbs-up text-xl"></i>
              Liked
            </Link>
            <Link
              to="/added"
              className="cursor-pointer hover:text-red-500 flex items-center gap-4"
              onClick={onClose}
            >
              <i className="fa fa-plus-circle text-xl"></i>
              Added
            </Link>
            <Link
              to="/subscribe"
              className="cursor-pointer hover:text-red-500 flex items-center gap-4"
            >
              <i className="fa fa-bell text-xl"></i>
              Subscriptions
            </Link>
          </ul>
        </nav>

        {/* YouTube logo va account */}
        <div className="absolute bottom-0 left-0 p-6 w-full">
          <div className="cursor-pointer text-white flex items-center gap-4 hover:text-red-500">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/YouTube_icon_%282013-2017%29.png"
              alt="User Avatar"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm">Your Account</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Burger;
