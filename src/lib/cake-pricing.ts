export type CakeFlavor = "velvet_rose" | "belgian_chocolate" | "vanilla_gold";
export type CakeDecor =
  | "sugar_flowers"
  | "gold_leaf"
  | "macaron_crown"
  | "name_topper";

export const BASE_CAKE_ILS = 250;
export const PLAQUE_MAX = 25;

const TIER_ADD: Record<1 | 2 | 3, number> = { 1: 0, 2: 180, 3: 350 };
const FLAVOR_ADD: Record<CakeFlavor, number> = {
  velvet_rose: 0,
  belgian_chocolate: 30,
  vanilla_gold: 40,
};
const DECOR_ADD: Record<CakeDecor, number> = {
  sugar_flowers: 50,
  gold_leaf: 80,
  macaron_crown: 70,
  name_topper: 45,
};

export function quoteCustomCake(input: {
  tiers: 1 | 2 | 3;
  flavor: CakeFlavor;
  decors: CakeDecor[];
}): number {
  const decorSum = input.decors.reduce((s, d) => s + DECOR_ADD[d], 0);
  return BASE_CAKE_ILS + TIER_ADD[input.tiers] + FLAVOR_ADD[input.flavor] + decorSum;
}
