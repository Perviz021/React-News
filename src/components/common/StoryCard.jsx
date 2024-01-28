import { FiFeather } from "react-icons/fi";

function StoryCard() {
  return (
    <div className="px-[15px] py-[13px] bg-[#fff] font-[400] rounded-theme">
      <div className="flex items-center space-x-[12px]">
        <span>
          <FiFeather className="size-[24px]" />
        </span>
        <h5 className="text-[15px]">Become a Story Writer</h5>
      </div>
      <div className="flex items-center space-x-[25px] mt-[9px]">
        <p className="text-[12px] opacity-60 leading-[18px]">
          Contribute stories and start earning.
        </p>
        <button className="text-[15px] h-[38px] font-medium px-[15px] shrink-0 text-skyBlue rounded-theme border border-skyBlue">
          Know More
        </button>
      </div>
    </div>
  );
}

export default StoryCard;
