import Button from "@/components/ui/button";
import { route } from "@/utils/helper";
import { useNavigate } from "react-router-dom";

function AuthorItem({ item }) {
  const navigate = useNavigate();

  const handleRoute = (item) => {
    localStorage.setItem("author", JSON.stringify(item));
    navigate(route("author", { slug: item.slug }), { replace: true });
  };

  return (
    <article className="bg-white shadow-theme p-[13px] rounded-theme flex flex-col justify-between">
      <figure className="size-[70px] rounded-full overflow-hidden mx-auto">
        <img src={item.photo} alt="author img" className="img-cover" />
      </figure>
      <div className="text-center pt-[7px] flex flex-col flex-1">
        <h5 className="text-[14px] font-medium">{item.fullname}</h5>
        <p className="text-[12px] font-[400] text-gray-500">{item.agency}</p>
      </div>
      <Button
        onClick={() => handleRoute(item)}
        property="skyBLue"
        rounded={true}
        block={true}
      >
        News
      </Button>
    </article>
  );
}

export default AuthorItem;
