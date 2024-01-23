import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import NewsCommentItem from "./NewsCommentItem";
import { useState } from "react";

function NewsComments({ items = [] }) {
  const [limit, setLimit] = useState(true);
  let comments = items;

  if (limit) comments = comments.slice(0, 4);

  return (
    <div>
      <div>
        <button
          onClick={() => setLimit(!limit)}
          className="flex items-center text-skyBlue space-x-2 underline"
        >
          <span>
            {limit ? "View All Comments" : "Hide Comments"}
            {limit && `(${comments.length})`}
          </span>
          <span className="inline-flex items-center justify-center bg-skyBlue rounded-full size-[24px] text-white">
            {limit ? <FiChevronDown /> : <FiChevronUp />}
          </span>
        </button>
      </div>
      <div className="mt-[37px] space-y-[12px]">
        {!limit &&
          comments.map((comment, index) => (
            <NewsCommentItem comment={comment} key={index} />
          ))}
      </div>
    </div>
  );
}

export default NewsComments;
