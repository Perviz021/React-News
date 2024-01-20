import { useFetchNewsBySlug } from "@/hooks/useFetch";
import { route } from "@/utils/helper";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams } from "react-router-dom";

function ViewPage() {
  const { slug } = useParams();
  const [data, fetchData, dataLoading] = useFetchNewsBySlug();

  useEffect(() => {
    fetchData(slug);
  }, [slug]);

  return (
    <>
      {data && (
        <Helmet>
          <title>Aster News / {data?.title}</title>
        </Helmet>
      )}
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
      <div
        className="mt-5"
        dangerouslySetInnerHTML={{ __html: data.content }}
      />
    </>
  );
}

export default ViewPage;
