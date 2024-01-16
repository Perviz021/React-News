import Button from "@/components/ui/button";
import { FiGift } from "react-icons/fi";

function Subscription({ className }) {
  return (
    <div
      className={`bg-skyBlue text-white ml-[16px] p-[20px] rounded-theme ${className}`}
    >
      <div className="flex items-center justify-between mb-[15px]">
        <FiGift className="text-[24px]" />
        <span>Subscribe to Premium</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[30px]">
          $8<small className="text-[16px] font-light">/m</small>
        </span>
        <Button handleClick={(e) => console.log(e)} size="lg" rounded={true}>
          Upgrade
        </Button>
      </div>
    </div>
  );
}

export default Subscription;
