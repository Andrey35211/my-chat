import React from "react";
import "./style.css";

interface IText {
  title: string;
}

export const gStyle: React.FC<IText> = ({ title }) => {
  return <p className="mt_bold">{title}</p>;
};
