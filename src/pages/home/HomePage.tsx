import { useLoaderData, Link } from "react-router-dom";
import type { HomeLoaderResult } from "./homeLoader";

function HomePage() {
  const { featuredPackages } = useLoaderData() as HomeLoaderResult;

  const renderedPackages = featuredPackages.map((p) => {
    return (
      <div
        key={p.name}
        className="flex flex-col justify-between gap-3 border rounded shadow p-4"
      >
        <div className="flex flex-col border-bottom gap-1 border-gray-400">
          <div className="font-bold text-cneter">{p.name}</div>
          <div className="text-sm text-gray-400">{p.description}</div>
          <div className="text-sm text-gray-500">
            {p.maintainers.length} Maintainers
          </div>
        </div>
        <Link
          to={`/packages/${p.name}`}
          className="border rounded border-gray-900 text-center"
        >
          View
        </Link>
      </div>
    );
  });

  return (
    <div className="container py-12 space-y-8">
      <div className="space-y-6 text-center">
        <h1 className="text-6xl font-bold">The Npm Registry</h1>
        <p className="mx-auto text-gray-500 max-w-[600px]">
          The Package Manager Clone for JavaScript
        </p>
      </div>
      <div className="mx-auto grid grid-cols-4 max-w-[900px] items-stretch gap-4">
        {renderedPackages}
      </div>
    </div>
  );
}

export default HomePage;
