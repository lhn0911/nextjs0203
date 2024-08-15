import React from "react";
import style from "@/app/B10/Base.module.css";
export default function Base({ children, type }: { children: any; type: any }) {
  return <button className={`${type} ${style.btn}`}>{children}</button>;
}
