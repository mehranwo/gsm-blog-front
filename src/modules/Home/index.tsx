import ArticleBar from "./components/articleBar";
import BrandBar from "./components/brandBar";
import NewsBar from "./components/newsBar";
import ProductBar from "./components/productBar";
import ReviewsBar from "./components/reviewsBar";
import TrendBar from "./components/trendBar";

const HomeModule = () => {
  return (
    <>
      <TrendBar />
      <hr />
      <BrandBar />
      <hr />
      <NewsBar />
      <hr />
      <ProductBar />
      <hr />
      <ReviewsBar />
      <hr />
      <ArticleBar />
    </>
  );
};

export default HomeModule;
