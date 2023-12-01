export const cheaKRouter = (path, route) => {
  const pathArrea = path.split("/");
  return pathArrea.includes(route);
};
