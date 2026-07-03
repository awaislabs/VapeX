import { Product, ShopFilters, SortOption } from "@/types/site";
import { PRODUCTS_PER_PAGE, products } from "@/lib/site-data";

export function getProductBySlug(slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getRelatedProducts(product: Product, limit = 4) {
  return products
    .filter((item) => item.id !== product.id && item.category === product.category)
    .slice(0, limit);
}

export function getProductPrice(product: Product, variantId?: string) {
  if (!variantId || !product.variants?.length) return product.price;
  return product.variants.find((variant) => variant.id === variantId)?.price ?? product.price;
}

function sortProducts(list: Product[], sort: SortOption) {
  const sorted = [...list];
  switch (sort) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "name-asc":
      return sorted.sort((a, b) => a.subtitle.localeCompare(b.subtitle));
    case "latest":
    default:
      return sorted;
  }
}

export function filterProducts(filters: ShopFilters) {
  let result = products.filter((product) => {
    const search = filters.search.trim().toLowerCase();
    const matchesSearch =
      !search ||
      product.title.toLowerCase().includes(search) ||
      product.subtitle.toLowerCase().includes(search) ||
      product.brand.toLowerCase().includes(search) ||
      product.category.toLowerCase().includes(search);

    const matchesCategory =
      !filters.categories.length || filters.categories.includes(product.category);

    const matchesBrand = !filters.brands.length || filters.brands.includes(product.brand);

    const matchesPrice = product.price >= filters.minPrice && product.price <= filters.maxPrice;
    const matchesSale = !filters.onSale || product.onSale;
    const matchesStock = !filters.inStock || product.inStock;

    return (
      matchesSearch &&
      matchesCategory &&
      matchesBrand &&
      matchesPrice &&
      matchesSale &&
      matchesStock
    );
  });

  result = sortProducts(result, filters.sort);

  const total = result.length;
  const totalPages = Math.max(1, Math.ceil(total / PRODUCTS_PER_PAGE));
  const page = Math.min(filters.page, totalPages);
  const start = (page - 1) * PRODUCTS_PER_PAGE;
  const items = result.slice(start, start + PRODUCTS_PER_PAGE);

  return { items, total, totalPages, page };
}

export { products };
