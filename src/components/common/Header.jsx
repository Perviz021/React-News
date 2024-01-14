import { FiLogOut, FiSearch, FiUser } from "react-icons/fi";
import Dropdown from "../ui/dropdown";
import menus from "@/routers/menus";

function Header() {
  const profileMenus = [
    { key: "profile", name: "Profile", icon: <FiUser /> },
    { key: "logout", name: "Logout", icon: <FiLogOut /> },
  ];

  const handleItemClick = (i) => {
    console.log(i);
  };
  return (
    <div className="pt-[15px] pb-[40px] flex justify-between items-center">
      <div className="flex items-center space-x-6">
        <div className="flex items-center bg-[#ECF5F8] w-[495px] h-[46px] rounded-theme">
          <input
            type="text"
            className="bg-transparent flex-1 focus:outline-none px-3"
            placeholder="Search for news..."
          />
          <span className="w-[46px] h-full flex justify-center items-center cursor-pointer">
            <FiSearch />
          </span>
        </div>
        <div className="flex items-center">
          {menus.map((menu, index) => (
            <a href="#" key={index} className="flex items-center p-3 space-x-2">
              {menu.icon && <span>{menu.icon}</span>}
              <span>{menu.name}</span>
            </a>
          ))}
        </div>
      </div>
      <div>
        <Dropdown
          helperBlock={
            <div className="flex items-center space-x-2 p-2 border-b">
              <figure className="size-[40px] rounded-full border-2 overflow-hidden">
                <img
                  className="img-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzB8fHVzZXJ8ZW58MHx8MHx8fDA%3D"
                  alt=""
                />
              </figure>
              <div className="font-medium text-sm">Alex Johnson</div>
            </div>
          }
          items={profileMenus}
          onItemClick={handleItemClick}
        >
          <span className="flex items-center space-x-[13px]">
            <span className="text-[24px]">
              <FiUser />
            </span>
            <span>My Profile</span>
          </span>
        </Dropdown>
      </div>
    </div>
  );
}

export default Header;
