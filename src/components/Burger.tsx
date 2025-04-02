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

      <nav className="mt-12">
        <ul className="text-white text-lg space-y-4 px-6">
          <li className="cursor-pointer hover:text-red-500">Home</li>
          <li className="cursor-pointer hover:text-red-500">Trending</li>
          <li className="cursor-pointer hover:text-red-500">Subscriptions</li>
          <li className="cursor-pointer hover:text-red-500">Library</li>
          <li className="cursor-pointer hover:text-red-500">History</li>
        </ul>
      </nav>
    </div>
  );
};

export default Burger;
