import Section from "@/components/ui/section";
import NewsItem from "@/components/widgets/news/NewsItem";
import NewsSkeleton from "@/components/widgets/news/NewsSkeleton";

function NewsSection({ items, loading, title }) {
  return (
    <Section title={title}>
      <div className="grid grid-cols-2 gap-[20px]">
        {loading && (
          <>
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
            <NewsSkeleton />
          </>
        )}
        {!loading &&
          items.map((item, index) => <NewsItem key={index} item={item} />)}
      </div>
    </Section>
  );
}

export default NewsSection;
