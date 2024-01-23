import Button from "@/components/ui/button";

function NewsCommentForm() {
  return (
    <div>
      <h4 className="font-bold text-[17px] mb-[10px]">Add your comment</h4>
      <textarea
        placeholder="Enter your comment here..."
        name=""
        id=""
        rows="5"
        className="bg-[#ECF5F8] rounded-theme w-full focus:outline-none py-[12px] px-[18px] placeholder:text-[#072d4b] placeholder:opacity-30"
      ></textarea>
      <div className="mt-[11px]">
        <Button size="lg" property="skyBLue" rounded={true}>
          Post Comment
        </Button>
      </div>
    </div>
  );
}

export default NewsCommentForm;
