import Button from "@/components/ui/button";

function AuthorItem({ item }) {
  return (
    <article className="bg-white shadow-theme p-[13px] rounded-theme h-[212px] flex flex-col justify-between">
      <figure className="size-[70px] rounded-full overflow-hidden mx-auto">
        <img src={item.photo} alt="author img" className="img-cover" />
      </figure>
      <div className="text-center my-[15px]">
        <h5 className="text-[14px] font-medium">{item.fullname}</h5>
        <p className="text-[12px] font-[400] text-gray-500">{item.agency}</p>
      </div>
      <Button property="skyBLue" rounded={true} block={true}>
        News
      </Button>
    </article>
  );
}

export default AuthorItem;
