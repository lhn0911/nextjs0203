import React from "react";
import Image from "next/image";
import style from "@/app/B10/Base.module.css";
import Base from "@/app/B10/Base";

export default function BaseCart({
  content,
  title,
  img,
  type,
  children,
}: {
  content: any;
  title: any;
  img: any;
  type: any;
  children: any;
}) {
  return (
    <div className={style.container}>
      <div>
        <Image width={210} height={200} src={img} alt={title} />
      </div>
      <div className={style.text}>{title}</div>
      <div>{content}</div>
      <Base type={type}>{children}</Base>
    </div>
  );
}
