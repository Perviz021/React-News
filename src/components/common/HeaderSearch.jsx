import { useFetchNewsList } from "@/hooks/useFetch";
import { serviceNewsFetchList } from "@/services/news.service";
import { useClickAway } from "@uidotdev/usehooks";
import { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import LoadingIcon from "../ui/loading-icon";

function HeaderSearch() {
  const { pathname } = useLocation();
  const [text, setText] = useState("");
  const [news, setNews] = useState(false);
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(false);

  const ref = useClickAway(() => {
    setNews(false);
    setNotFound(false);
  });

  const fetchNews = async (text) => {
    setNotFound(false);
    setNews(false);

    if (text.trim()) {
      setLoading(true);
      const res = await serviceNewsFetchList({ limit: 5, title: text.trim() });
      setLoading(false);
      if (res.total > 0) {
        setNews(res.data);
      } else {
        setNotFound(true);
      }
    }
  };

  useEffect(() => {
    fetchNews(text);
  }, [text]);

  useEffect(() => {
    setNews(false);
    setText("");
  }, [pathname]);

  return (
    <div className="relative" ref={ref}>
      <div className="flex items-center bg-[#ECF5F8] w-[495px] h-[46px] rounded-theme">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="bg-transparent flex-1 focus:outline-none px-3"
          placeholder="Search for news..."
        />
        <span className="w-[46px] h-full flex justify-center items-center cursor-pointer">
          {!loading && <FiSearch />}
          {loading && <LoadingIcon width={18} height={18} />}
        </span>
      </div>

      <div className="absolute top-full left-0 right-0 z-50 bg-white shadow-theme">
        {news && !notFound && (
          <ul className="divide-y divide-gray-100">
            {news.map((item, index) => (
              <li key={index}>
                <Link
                  to={`/view/${item.slug}`}
                  className="flex p-2 items-center space-x-3"
                >
                  <figure className="size-10 shrink-0 rounded-full overflow-hidden">
                    <img src={item.photo} alt="" className="img-cover" />
                  </figure>
                  <span>{item.title}</span>
                </Link>
              </li>
            ))}
          </ul>
        )}
        {!news && notFound && (
          <div className="p-2 bg-red-100 text-red-500">
            The news couldn't be found
          </div>
        )}
      </div>
    </div>
  );
}

export default HeaderSearch;
