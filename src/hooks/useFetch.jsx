import { serviceAuthorFetchList } from "@/services/author.service";
import { serviceCategoryFetchList } from "@/services/category.service";
import {
  serviceNewsFetchBySlug,
  serviceNewsFetchComments,
  serviceNewsFetchList,
  serviceNewsFetchRandomList,
} from "@/services/news.service";

import { useState } from "react";

const useFetch = (state = false) => {
  const [data, setData] = useState(state);
  const [loading, setLoading] = useState(false);

  const fetch = async (service, params) => {
    setLoading(true);
    const res = await service(params);
    setData(res);
    setLoading(false);
  };

  return [data, fetch, loading];
};

// Fetch Category
export const useFetchCategoryList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (params = {}) => {
    fetch(serviceCategoryFetchList, params);
  };

  return [data, apiFetch, loading];
};

// Fetch Random News
export const useFetchNewsRandomList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(serviceNewsFetchRandomList, { limit: 6 });
  };

  return [data?.data || [], apiFetch, loading];
};

// Fetch News
export const useFetchNewsList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (params = {}) => {
    fetch(serviceNewsFetchList, params);
  };

  return [data?.data || [], apiFetch, loading];
};

// Fetch Authors
export const useFetchAuthorRandomList = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async () => {
    fetch(serviceAuthorFetchList, { random: true, limit: 5 });
  };

  return [data?.data || [], apiFetch, loading];
};

// Fetch All News Based on a Category
export const useFetchNewsSearch = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (params) => {
    fetch(serviceNewsFetchList, params);
  };

  return [data?.data || [], apiFetch, loading];
};

// Fetch News By Slug
export const useFetchNewsBySlug = () => {
  const [data, fetch, loading] = useFetch(false);

  const apiFetch = async (slug) => {
    fetch(serviceNewsFetchBySlug, slug);
  };

  return [data || false, apiFetch, loading];
};

// Fetch News By Comments
export const useFetchNewsComments = () => {
  const [data, fetch, loading] = useFetch([]);

  const apiFetch = async (id) => {
    fetch(serviceNewsFetchComments, id);
  };

  return [data || [], apiFetch, loading];
};
