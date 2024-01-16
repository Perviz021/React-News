import { useFetchCategoryList } from "@/hooks/useFetch";
import { useEffect } from "react";
import { GiWorld } from "react-icons/gi";
import { FaBalanceScale } from "react-icons/fa";
import { IoMdFootball } from "react-icons/io";
import { IoIosDesktop } from "react-icons/io";
import { FaRegMoneyBillAlt } from "react-icons/fa";
import { IoGameControllerOutline } from "react-icons/io5";
import { FaSuitcaseMedical } from "react-icons/fa6";
import { TbMicroscope } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { FaEnvira } from "react-icons/fa";
import classNames from "classnames";
import { NavLink } from "react-router-dom";

function Icon({ slug }) {
  const icons = {
    world: <GiWorld />,
    politics: <FaBalanceScale />,
    sports: <IoMdFootball />,
    technology: <IoIosDesktop />,
    economy: <FaRegMoneyBillAlt />,
    entertainment: <IoGameControllerOutline />,
    health: <FaSuitcaseMedical />,
    science: <TbMicroscope />,
    culture: <FaPeopleGroup />,
    environment: <FaEnvira />,
  };

  return icons[slug];
}

function Navbar() {
  const [categories, fetchCategories, loading] = useFetchCategoryList();

  useEffect(() => {
    fetchCategories();
  }, []); //component yuklenen kimi isleyir

  return (
    <div className="pr-[17px]">
      {categories.map((category, index) => (
        <NavLink
          key={index}
          to={`/search/${category.slug}`}
          className={classNames({
            "flex items-center space-x-[22px] h-[50px] pl-[33px] text-[16px] text-amberBlack relative rounded-tr-full rounded-br-full": true,
            "bg-[#e0f0f8] after:content-[''] after:bg-skyBlue after:absolute after:size-[6px] after:left-[15px] after:rounded-full text-skyBlue font-bold":
              index === 0,
          })}
        >
          <span className="text-[24px]">
            <Icon slug={category.slug} />
          </span>
          <span>{category.slug[0].toUpperCase() + category.slug.slice(1)}</span>
        </NavLink>
      ))}
    </div>
  );
}

export default Navbar;
