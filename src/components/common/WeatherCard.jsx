import { FiCrosshair, FiSun } from "react-icons/fi";

function WeatherCard() {
  return (
    <div className="bg-white shrink-0 p-[15px] rounded-theme">
      <div className="flex items-center justify-between py-[9px] border-b">
        <h3 className="text-[15px] font-[400]">Baku, Azerbaijan</h3>
        <span>
          <FiCrosshair className="w-[18px] h-[18px]" />
        </span>
      </div>
      <div className="flex items-center justify-between mt-[15px]">
        <div>
          <p className="text-[15px] font-[400]">Sunny</p>
          <h2 className="text-[26px] font-bold">
            31<sup>o</sup>c
          </h2>
        </div>
        <span>
          <FiSun className="!text-[#FFCF26] size-[52px]" />
        </span>
      </div>
    </div>
  );
}

export default WeatherCard;
