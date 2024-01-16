import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function NewsSkeleton() {
  return (
    <article className="bg-white p-[17px] shadow-theme rounded-theme relative">
      <div className="flex space-x-[18px]">
        <div className="w-1/2">
          <Skeleton />
          <Skeleton height={"10px"} />
          <Skeleton height={"10px"} width={"80%"} />
          <Skeleton height={"10px"} width={"70%"} />
          <Skeleton height={"10px"} width={"70%"} />
        </div>
        <div className="w-1/2">
          <Skeleton height={"132px"} />
        </div>
      </div>
      <div className="mt-[10px] flex items-center justify-between">
        <div className="w-1/2">
          <Skeleton />
        </div>
        <div className="w-1/2 flex justify-end">
          <Skeleton width={"50px"} />
        </div>
      </div>
    </article>
  );
}

export default NewsSkeleton;
