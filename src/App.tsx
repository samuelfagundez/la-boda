import { Outlet } from "react-router-dom";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

export default function App() {
  return (
    <>
      <Outlet />
      <FloatingWhatsApp />
    </>
  );
}
