import { useSelector } from "react-redux";
import { selectUserName } from "./userSlice";

export default function UserName() {
  const userName = useSelector(selectUserName);
  if (!userName) return;

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}
