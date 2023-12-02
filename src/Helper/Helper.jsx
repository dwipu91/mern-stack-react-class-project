import { toast } from "react-toastify";

/**
 * cheack router
 * @param {*} path
 * @param {*} route
 * @returns
 */
export const cheaKRouter = (path, route) => {
  const pathArrea = path.split("/");
  return pathArrea.includes(route);
};

/**
 * Creare tost msg
 * @param {*} msg
 * @param {*} type
 * @returns
 */

export const createToast = (msg, type = "error") => {
  return toast[type](msg);
};
