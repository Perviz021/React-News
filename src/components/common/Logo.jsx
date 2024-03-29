import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div>
      <NavLink
        to={"/"}
        className="flex items-center pl-[31px] space-x-[15px] py-[28px]"
      >
        <img src="/logo.svg" alt="logo" />
        <span className="text-primary font-bold text-[18px]">Aster News</span>
      </NavLink>
    </div>
  );
}

export default Logo;
