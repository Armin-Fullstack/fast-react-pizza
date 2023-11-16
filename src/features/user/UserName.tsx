import { useSelector } from "react-redux";

export default function UserName() {
  const userName = useSelector((state) => state.user.userName);
  if (!userName) return;

  return <p className="hidden text-sm font-semibold md:block">{userName}</p>;
}
