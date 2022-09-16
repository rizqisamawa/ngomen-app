import Navbar from "./Navbar";
import Search from "./Search";
import Chats from "./Chats";

const Sidebar = () => {
  return (
    <div className="flex-[1] border-r bg-pink-500">
      <Navbar />
      <Search />
      <Chats />
    </div>
  );
};

export default Sidebar;
