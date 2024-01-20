import {
  useFetchAuthorRandomList,
  useFetchNewsList,
  useFetchNewsRandomList,
} from "@/hooks/useFetch";
import { useEffect } from "react";
import NewsSection from "@/components/widgets/news/NewsSection";
import AuthorSection from "@/components/widgets/author/AuthorSection";
import { Helmet } from "react-helmet";

function HomePage() {
  const [randomNews, fetchRandomNews, randomLoading] = useFetchNewsRandomList();
  const [newsItems, fetchNews, newsLoading] = useFetchNewsList();
  const [authors, fetchAuthors, authorLoading] = useFetchAuthorRandomList();

  useEffect(() => {
    fetchRandomNews();
    fetchNews({ limit: 6 });
    fetchAuthors();
  }, []);

  return (
    <>
      <Helmet>
        <title>Aster News</title>
      </Helmet>
      <NewsSection
        items={randomNews}
        loading={randomLoading}
        title={"Reader Favorites"}
      />

      <AuthorSection items={authors} loading={authorLoading} />

      <NewsSection
        items={newsItems}
        loading={newsLoading}
        title={"Latest News"}
      />
    </>
  );
}

export default HomePage;
