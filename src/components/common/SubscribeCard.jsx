import Button from "../ui/button";

function SubscribeCard() {
  return (
    <div className="p-[20px] bg-[#fff] rounded-theme">
      <p className="mb-[12px] text-[15px] font-[400]">
        Subscribe to our newsletter
      </p>
      <input
        type="text"
        className="mb-[16px] rounded-theme w-full px-[14px] py-[10px] bg-[#F4F9F8]"
        placeholder="Enter Email"
      />
      <Button property="skyBLue" block={true} rounded={true} size="lg">
        Subscribe
      </Button>
    </div>
  );
}

export default SubscribeCard;
