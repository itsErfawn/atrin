import React from "react";

type Props = {
  title: string;
};

function TilteFilter({ title }: Props) {
  return <h4 className="text-secondary">{title}</h4>;
}

export default TilteFilter;
