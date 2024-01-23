import { useFetchNewsBySlug, useFetchNewsComments } from "@/hooks/useFetch";
import { route } from "@/utils/helper";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import NewsCommentForm from "@/components/widgets/news/NewsCommentForm";
import NewsComments from "@/components/widgets/news/NewsComments";

function ViewPage() {
  const { slug } = useParams();
  const [data, fetchData, dataLoading] = useFetchNewsBySlug();
  const [comments, fetchComments, commentLoading] = useFetchNewsComments();

  useEffect(() => {
    fetchData(slug);
  }, [slug]);

  useEffect(() => {
    if (data?.id) {
      fetchComments(data.id);
    }
  }, [data]);

  return (
    <>
      {data && (
        <>
          <Helmet>
            <title>Aster News / {data?.title}</title>
          </Helmet>
          <h1 className="text-[26px] font-bold">{data.title}</h1>
          <div>
            <Link
              to={route("search", { slug: data?.category?.slug })}
              className="bg-skyBlue inline-flex px-2 py-3 rounded-lg text-white"
            >
              {data?.category?.slug[0].toUpperCase().toString() +
                data?.category?.slug.slice(1).toString() || ""}
            </Link>
          </div>
          <div className="mt-4">
            <figure className="aspect-w-3 aspect-h-2 rounded-theme overflow-hidden">
              <img src={data.photo} alt="" className="img-cover" />
            </figure>
          </div>
          <div className="mt-5">
            <div dangerouslySetInnerHTML={{ __html: data.content }} />
          </div>

          <div className="mt-[32px] space-y-[20px]">
            <NewsCommentForm />
            <NewsComments items={comments} />
          </div>
        </>
      )}
      {!data && (
        <>
          <Skeleton height={"20px"} className="mb-3" />
          <Skeleton height={"32px"} width={"120px"} className="mb-3" />
          <Skeleton height={"450px"} width={"100%"} />
          <Skeleton
            count={10}
            height={"18px"}
            width={"100%"}
            className="mb-3"
          />
        </>
      )}
    </>
  );
}

export default ViewPage;
