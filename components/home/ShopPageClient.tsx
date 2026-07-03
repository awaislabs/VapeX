"use client";

import { useMemo, useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { Search } from "lucide-react";
import { Container } from "@/components/common/Container";
import { ProductCard } from "@/components/common/ProductCard";
import { Breadcrumbs } from "@/components/common/Breadcrumbs";
import { brands, categories } from "@/lib/site-data";
import { filterProducts } from "@/lib/products";
import { SortOption } from "@/types/site";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "latest", label: "Latest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A-Z" }
];

export function ShopPageClient() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category");

  const [search, setSearch] = useState("");
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    initialCategory ? [initialCategory] : []
  );
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(200);
  const [onSale, setOnSale] = useState(false);
  const [inStock, setInStock] = useState(false);
  const [sort, setSort] = useState<SortOption>("latest");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setSelectedCategories([initialCategory]);
      setPage(1);
    }
  }, [initialCategory]);

  const result = useMemo(
    () =>
      filterProducts({
        search,
        categories: selectedCategories,
        brands: selectedBrands,
        minPrice,
        maxPrice,
        onSale,
        inStock,
        sort,
        page
      }),
    [search, selectedCategories, selectedBrands, minPrice, maxPrice, onSale, inStock, sort, page]
  );

  const toggleCategory = (category: string) => {
    setPage(1);
    setSelectedCategories((current) =>
      current.includes(category)
        ? current.filter((item) => item !== category)
        : [...current, category]
    );
  };

  const toggleBrand = (brand: string) => {
    setPage(1);
    setSelectedBrands((current) =>
      current.includes(brand) ? current.filter((item) => item !== brand) : [...current, brand]
    );
  };

  const handleSearch = (value: string) => {
    setIsLoading(true);
    setSearch(value);
    setPage(1);
    setTimeout(() => setIsLoading(false), 200);
  };

  const activeFilters = [
    ...selectedCategories,
    ...selectedBrands,
    onSale ? "On sale" : "",
    inStock ? "In stock" : ""
  ].filter(Boolean);

  return (
    <div>
      <section className="page-band py-12">
        <Container>
          <h1 className="text-center text-5xl font-semibold uppercase">ALL PRODUCTS</h1>
        </Container>
      </section>
      <Container>
        <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "All Products" }]} />
        <section className="grid gap-10 py-12 lg:grid-cols-[260px_1fr]">
          <aside className="space-y-8 border border-black/10 bg-[#ececec] p-6">
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black">Search</h3>
              <div className="flex h-10 items-center gap-2 border border-black/15 bg-white px-3">
                <Search size={14} className="text-black/55" />
                <input
                  value={search}
                  onChange={(event) => handleSearch(event.target.value)}
                  placeholder="Search products..."
                  className="w-full bg-transparent text-sm outline-none"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black">Price</h3>
              <p className="mb-2 text-sm text-black/60">
                Price: ${minPrice} - ${maxPrice}
              </p>
              <div className="space-y-2">
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={minPrice}
                  onChange={(event) => {
                    setPage(1);
                    setMinPrice(Number(event.target.value));
                  }}
                  className="w-full accent-brand"
                />
                <input
                  type="range"
                  min={0}
                  max={200}
                  value={maxPrice}
                  onChange={(event) => {
                    setPage(1);
                    setMaxPrice(Number(event.target.value));
                  }}
                  className="w-full accent-brand"
                />
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black">Filter by status</h3>
              <div className="space-y-2 text-sm text-black/60">
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={onSale}
                    onChange={(event) => {
                      setPage(1);
                      setOnSale(event.target.checked);
                    }}
                    className="accent-brand"
                  />
                  On sale
                </label>
                <label className="flex cursor-pointer items-center gap-2">
                  <input
                    type="checkbox"
                    checked={inStock}
                    onChange={(event) => {
                      setPage(1);
                      setInStock(event.target.checked);
                    }}
                    className="accent-brand"
                  />
                  In stock
                </label>
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black">Brands</h3>
              <div className="space-y-2 text-sm text-black/60">
                {brands.map((brand) => (
                  <label key={brand} className="flex cursor-pointer items-center gap-2 capitalize">
                    <input
                      type="checkbox"
                      checked={selectedBrands.includes(brand)}
                      onChange={() => toggleBrand(brand)}
                      className="accent-brand"
                    />
                    {brand}
                  </label>
                ))}
              </div>
            </div>
            <div>
              <h3 className="mb-3 text-lg font-semibold text-black">Categories</h3>
              <div className="space-y-2 text-sm text-black/60">
                {categories.map((category) => (
                  <label key={category} className="flex cursor-pointer items-center gap-2 capitalize">
                    <input
                      type="checkbox"
                      checked={selectedCategories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="accent-brand"
                    />
                    {category}
                  </label>
                ))}
              </div>
            </div>
          </aside>
          <div>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4 text-sm text-black/60">
              <p>
                Filters {activeFilters.length ? `- ${activeFilters.join(", ")}` : "-"}
              </p>
              <div className="flex items-center gap-2">
                <span>Sorted by</span>
                <select
                  value={sort}
                  onChange={(event) => {
                    setPage(1);
                    setSort(event.target.value as SortOption);
                  }}
                  className="border border-black/15 bg-white px-3 py-1.5 text-sm outline-none"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {isLoading ? (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {Array.from({ length: 6 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-[360px] animate-pulse border border-black/10 bg-white"
                  />
                ))}
              </div>
            ) : result.items.length === 0 ? (
              <div className="border border-black/10 bg-white p-12 text-center">
                <p className="text-lg font-semibold text-black">No products found</p>
                <p className="mt-2 text-sm text-black/60">
                  Try adjusting your filters or search term.
                </p>
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {result.items.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            )}

            {result.totalPages > 1 ? (
              <div className="mt-10 flex items-center justify-center gap-2">
                {Array.from({ length: result.totalPages }).map((_, index) => {
                  const pageNumber = index + 1;
                  return (
                    <button
                      key={pageNumber}
                      type="button"
                      onClick={() => setPage(pageNumber)}
                      className={`h-8 w-8 border text-xs transition ${
                        pageNumber === result.page
                          ? "border-brand bg-brand text-white"
                          : "border-black/20 hover:border-brand"
                      }`}
                    >
                      {pageNumber}
                    </button>
                  );
                })}
              </div>
            ) : null}
          </div>
        </section>
      </Container>
    </div>
  );
}
