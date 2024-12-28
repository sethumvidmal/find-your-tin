export const get = async ({ path }) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  const response = await fetch(`${baseUrl}${path}`, {
    method: "GET",
  });

  const body = await response.json();
  return body;
};
