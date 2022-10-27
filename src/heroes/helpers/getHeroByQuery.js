import { heroes } from "../data/heroes";
export const getHeroByQuery = (query) => {
  query = query.toLowerCase().trim();

  if (query.length === 0) return [];

  return heroes.filter((hero) => {
    return Object.values(hero).some((s) =>
      s.toLocaleLowerCase().trim().includes(query)
    );
  });
};
