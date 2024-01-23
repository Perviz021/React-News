import NewsApi from "@/api/news.api";
import { get } from "@/utils/request";

// Random News Fetch
export const serviceNewsFetchRandomList = async (params = {}) => {
  const res = await get(NewsApi.random, params);
  return res;
};

// News Fetch
export const serviceNewsFetchList = async (params = {}) => {
  const res = await get(NewsApi.list, params);
  return res;
};

// Fetch News By Slug
export const serviceNewsFetchBySlug = async (slug) => {
  const res = await get(NewsApi.showBySlug.replace(":slug", slug));
  return res;
};

// Fetch Comments
export const serviceNewsFetchComments = async (id) => {
  const res = await get(NewsApi.comments.replace(":id", id));
  return res;
};
