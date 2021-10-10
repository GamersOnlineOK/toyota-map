import React from 'react';

export default function SVG({ svgImage, className }) {
  const svgPath = `${svgImage}#svgView(preserveAspectRatio(none))`;
  return (
    <img src={svgPath} className={className} alt="" />
  );
}
