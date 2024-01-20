import NewsSection from "@/components/widgets/news/NewsSection";
import { useFetchNewsSearch } from "@/hooks/useFetch";
import { upperCase } from "@/utils/helper";
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";

function SearchPage() {
  const { slug } = useParams();
  const categories = JSON.parse(localStorage.getItem("categories"));
  const category = categories.find((i) => i.slug === slug); // Finding category
  const [news, fetchNewsSearch, newsLoading] = useFetchNewsSearch();

  useEffect(() => {
    fetchNewsSearch({ category: slug });
  }, [slug]);

  return (
    <>
      <Helmet>
        <title>Aster News / {upperCase(category.slug)}</title>
      </Helmet>
      <NewsSection
        items={news}
        loading={newsLoading}
        title={upperCase(category.slug)}
      />
    </>
  );
}

export default SearchPage;
