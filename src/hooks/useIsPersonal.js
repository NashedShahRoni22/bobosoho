import { useLocation } from "react-router-dom";

export default function useIsPersonal() {
  const { pathname } = useLocation();
  return pathname === "/private";
}
