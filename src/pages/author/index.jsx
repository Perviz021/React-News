import NewsSection from "@/components/widgets/news/NewsSection";
import { useFetchNewsList } from "@/hooks/useFetch";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function AuthorPage() {
  const { slug } = useParams();
  const author = JSON.parse(localStorage.getItem("author"));
  const [newsItems, fetchNews, newsLoading, total] = useFetchNewsList();

  useEffect(() => {
    fetchNews({ authorSlug: slug });
  }, [slug]);

  useEffect(() => {
    return () => {
      localStorage.removeItem("author");
    };
  }, []);

  return (
    <>
      <NewsSection
        items={newsItems}
        loading={newsLoading}
        title={
          <div className="flex items-center justify-between border-b border-gray-300 mb-5 pb-5">
            <div className="flex items-center space-x-3">
              <figure className="size-[70px] rounded-full overflow-hidden">
                <img
                  src={author?.photo}
                  alt="author photo"
                  className="img-cover"
                />
              </figure>
              <h3 className="text-[20px] font-[700]">{author?.fullname}</h3>
            </div>
            <div className="font-bold">
              {!total && <Skeleton width={"80px"} height={"17px"} />}
              {total && "Total: " + total}
            </div>
          </div>
        }
      />
    </>
  );
}

export default AuthorPage;
