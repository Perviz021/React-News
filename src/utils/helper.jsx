import routers from "@/routers/routers";

export const objectToQueryParams = (obj) => {
  return Object.entries(obj)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");
};

export const route = (name, params) => {
  const find = routers.find((i) => i.name === name);
  const itemParams = Object.entries(params);

  if (find) {
    let text = find.path;
    for (const [key, value] of itemParams) {
      text = text.replace(":" + key, value);
    }
    return text;
  }

  return "/";
};

export const upperCase = (name) => {
  return name[0].toUpperCase() + name.slice(1);
};
