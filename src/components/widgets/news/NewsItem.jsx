import moment from "moment";
import { FiShare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

function NewsItem({ item }) {
  return (
    <article className="bg-white p-[17px] shadow-theme rounded-theme relative">
      <NavLink to={`/view/${item.slug}`} className="absolute inset-0"></NavLink>
      <div className="flex space-x-[18px]">
        <div>
          <h4 className="text-[17px] font-medium line-clamp-2">{item.title}</h4>
          <p className="text-[14px] text-gray-500 line-clamp-3">
            {item.description}
          </p>
        </div>
        <div>
          <figure className="w-[132px] h-[132px]">
            <img src={item.photo} alt="news photo" className="img-cover" />
          </figure>
        </div>
      </div>
      <div className="mt-[10px] flex items-center justify-between">
        <div className="flex items-center space-x-2 text-[12px] text-gray-400">
          <span>{item.author.agency}</span>
          <span className="size-[4px]  rounded-full inline-block bg-skyBlue opacity-40"></span>
          <span>{moment(item.published_date).format("DD-MM-YYYY HH:mm")}</span>
        </div>
        <div>
          <a
            href="#"
            className="flex items-center space-x-[8px] text-primary font-medium"
          >
            <FiShare className="text-[16px]" />
            <span className="text-[12px]">Share</span>
          </a>
        </div>
      </div>
    </article>
  );
}

export default NewsItem;
