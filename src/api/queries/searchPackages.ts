import type { PackageSummary } from "../types/packageSummary";

interface searchRespnse {
  objects: {
    package: {
      name: string;
      description: string;
      version: string;
      keywords: string[];
    };
  }[];
}

export async function searchPackages(term: string): Promise<PackageSummary[]> {
  const res = await fetch(
    `https://registry.npmjs.org/-/v1/search?text=${term}`
  );

  const data: searchRespnse = await res.json();

  return data.objects.map((searchResult) => {
    return {
      name: searchResult.package.name,
      description: searchResult.package.description,
      version: searchResult.package.version,
      keywords: searchResult.package.keywords,
    };
  });
}
