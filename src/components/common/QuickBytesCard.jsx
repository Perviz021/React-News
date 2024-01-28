import { FiFileText, FiChevronLeft, FiChevronRight } from "react-icons/fi";

function QuickBytesCard() {
  return (
    <div className="bg-[#fff] px-[15px] py-[11px] rounded-theme">
      <div className="flex items-center justify-between border-b py-[7px]">
        <div className="flex items-center space-x-[14px]">
          <span>
            <FiFileText />
          </span>
          <p>Quick Bytes</p>
        </div>
        <div className="flex items-center space-x-[10px]">
          <button className="size-[24px] bg-skyBlue rounded-full opacity-50 text-white inline-flex items-center justify-center">
            <FiChevronLeft />
          </button>
          <button className="size-[24px] bg-skyBlue rounded-full text-white inline-flex items-center justify-center">
            <FiChevronRight />
          </button>
        </div>
      </div>
      <div className="space-y-[15px] text-[12px] font-[400] opacity-60 py-[13px] leading-[20px]">
        <p>
          The price of petrol remained unchanged on July 6 after reaching a new
          record high on the previous day, according to a price notification by
          state-owned fuel retailers. The diesel price remained stable for the
          second consecutive day.
        </p>
        <p>
          The increase on July 5, 35th in two months, took the petrol price in
          Delhi closer to Rs 100 per litre-mark. The petrol price in the
          national capital soared to Rs 99.9 a litre and diesel was priced at Rs
          89.4 per litre, according to Bharat Petroleums price listing.
        </p>
      </div>
    </div>
  );
}

export default QuickBytesCard;
