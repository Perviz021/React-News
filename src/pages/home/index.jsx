import {
  useFetchAuthorRandomList,
  useFetchNewsList,
  useFetchNewsRandomList,
} from "@/hooks/useFetch";
import { useEffect } from "react";
import NewsSection from "./components/NewsSection";
import AuthorSection from "./components/AuthorSection";

function HomePage() {
  const [randomNews, fetchRandomNews, randomLoading] = useFetchNewsRandomList();
  const [newsItems, fetchNews, newsLoading] = useFetchNewsList();
  const [authors, fetchAuthors, authorLoading] = useFetchAuthorRandomList();

  useEffect(() => {
    fetchRandomNews();
    fetchNews();
    fetchAuthors();
  }, []);

  return (
    <>
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
