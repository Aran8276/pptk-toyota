import { ReactNode } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Layout(props: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen -z-10">{props.children}</main>
      <Footer />
    </>
  );
}
