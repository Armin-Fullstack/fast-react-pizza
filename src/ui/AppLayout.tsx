import { Outlet } from "react-router-dom";
import CartOverview from "../features/cart/CartOverview";
import Header from "./Header";

export default function AppLayout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <CartOverview />
    </>
  );
}
