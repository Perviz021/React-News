import QuickBytesCard from "./QuickBytesCard";
import StoryCard from "./StoryCard";
import SubscribeCard from "./SubscribeCard";
import WeatherCard from "./WeatherCard";

function RightAside() {
  return (
    <div className="2x:fixed space-y-[15px]">
      <WeatherCard />
      <StoryCard />
      <QuickBytesCard />
      <SubscribeCard />
    </div>
  );
}

export default RightAside;
