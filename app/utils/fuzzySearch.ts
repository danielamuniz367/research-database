import Fuse from "fuse.js";

const options = {
  includeScore: true,
  threshold: 0.4,
  findAllMatches: true,
  minMatchCharLength: 2,
  useExtendedSearch: true,
  ignoreLocation: true,
  // distance: 1000,
};

export default function fuzzySearch(keyFeature: string, text: string) {
  const sentenceArray = text
    .replace(/([.?!])\s*(?=[A-Z])/g, "$1|")
    .replace(/\n/g, " ")
    .split("|");
  const fuse = new Fuse(sentenceArray, options);
  const result = fuse.search(keyFeature);
  return result;
}
