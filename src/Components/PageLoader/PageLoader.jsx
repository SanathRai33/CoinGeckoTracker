import React from "react";
import ContentLoader from "react-content-loader";

const PageLoader = (props) => (
  <ContentLoader
    speed={2}
    width={400}
    height={500}
    viewBox="0 0 400 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    {/* Coin image */}
    <circle cx="200" cy="50" r="40" />

    {/* Coin name */}
    <rect x="50" y="110" rx="4" ry="4" width="300" height="20" />

    {/* Symbol */}
    <rect x="150" y="140" rx="4" ry="4" width="100" height="16" />

    {/* Description */}
    <rect x="20" y="180" rx="4" ry="4" width="360" height="14" />
    <rect x="20" y="200" rx="4" ry="4" width="340" height="14" />
    <rect x="20" y="220" rx="4" ry="4" width="320" height="14" />

    {/* Rank */}
    <rect x="20" y="260" rx="4" ry="4" width="100" height="18" />

    {/* Price */}
    <rect x="280" y="260" rx="4" ry="4" width="100" height="18" />
  </ContentLoader>
);

export default PageLoader;
