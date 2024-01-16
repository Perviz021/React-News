import CategoryApi from "@/api/category.api";
import { get } from "@/utils/request";

// Category Fetch
export const serviceCategoryFetchList = async (params = {}) => {
  const res = await get(CategoryApi.list);
  return res;
};
