import type { Route } from "./+types/home";
import {Welcome} from "~/components/welcome/welcome";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "MFD Module 4. React. 4.Forms " },
    { name: "description", content: "Домашнее задание к разделу форм" },
  ];
}

export default function Home() {
  return <Welcome />;
}
