import { FiTrash } from "react-icons/fi";

function NewsCommentItem({ comment = {} }) {
  return (
    <div>
      <h5 className="text-skyBlue font-medium text-[17px]">
        {comment?.user?.name + " " + comment?.user?.surname}
      </h5>
      <p className="my-[10px] opacity-60 text-[17px] font-[400]">
        {comment.body}
      </p>
      <div className="flex items-center justify-between">
        <span className="opacity-30 font-[400] text-[12px]">
          Posted on Jul 5, 2021 | 6:22 AM
        </span>
        <div>
          <button className="inline-flex items-center space-x-[6px] text-[#FF8C8C]">
            <span className="text-[20px]">
              <FiTrash />
            </span>
            <span className="text-[12px] font-[400] underline">
              Delete Comment
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default NewsCommentItem;
