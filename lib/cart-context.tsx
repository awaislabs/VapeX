"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode
} from "react";
import { CartItem } from "@/types/site";
import { COUPON_CODE, COUPON_DISCOUNT } from "@/lib/site-data";
import { calculateVat } from "@/lib/format";
import { getProductById, getProductPrice } from "@/lib/products";

type AddToCartInput = {
  productId: string;
  quantity?: number;
  variantId?: string;
};

type CartContextValue = {
  items: CartItem[];
  wishlist: string[];
  couponCode: string;
  couponApplied: boolean;
  isHydrated: boolean;
  itemCount: number;
  subtotal: number;
  discount: number;
  vat: number;
  shipping: number;
  total: number;
  addToCart: (input: AddToCartInput) => void;
  removeFromCart: (productId: string, variantId?: string) => void;
  updateQuantity: (productId: string, quantity: number, variantId?: string) => void;
  clearCart: () => void;
  toggleWishlist: (productId: string) => void;
  isWishlisted: (productId: string) => boolean;
  applyCoupon: (code: string) => boolean;
  removeCoupon: () => void;
};

const CartContext = createContext<CartContextValue | null>(null);

const CART_KEY = "vapex-cart";
const WISHLIST_KEY = "vapex-wishlist";
const COUPON_KEY = "vapex-coupon";

function lineKey(productId: string, variantId?: string) {
  return `${productId}:${variantId ?? "default"}`;
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [couponCode, setCouponCode] = useState("");
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    try {
      const storedCart = localStorage.getItem(CART_KEY);
      const storedWishlist = localStorage.getItem(WISHLIST_KEY);
      const storedCoupon = localStorage.getItem(COUPON_KEY);
      if (storedCart) setItems(JSON.parse(storedCart));
      if (storedWishlist) setWishlist(JSON.parse(storedWishlist));
      if (storedCoupon) setCouponCode(storedCoupon);
    } catch {
      // ignore invalid storage
    }
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(CART_KEY, JSON.stringify(items));
  }, [items, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    localStorage.setItem(WISHLIST_KEY, JSON.stringify(wishlist));
  }, [wishlist, isHydrated]);

  useEffect(() => {
    if (!isHydrated) return;
    if (couponCode) localStorage.setItem(COUPON_KEY, couponCode);
    else localStorage.removeItem(COUPON_KEY);
  }, [couponCode, isHydrated]);

  const addToCart = useCallback(({ productId, quantity = 1, variantId }: AddToCartInput) => {
    const product = getProductById(productId);
    if (!product || !product.inStock) return;

    const price = getProductPrice(product, variantId);
    const variantLabel = product.variants?.find((variant) => variant.id === variantId)?.label;
    const key = lineKey(productId, variantId);

    setItems((current) => {
      const existing = current.find((item) => lineKey(item.productId, item.variantId) === key);
      if (existing) {
        return current.map((item) =>
          lineKey(item.productId, item.variantId) === key
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }

      return [
        ...current,
        {
          productId: product.id,
          slug: product.slug,
          variantId,
          variantLabel,
          name: product.title,
          subtitle: product.subtitle,
          price,
          image: product.image,
          quantity
        }
      ];
    });
  }, []);

  const removeFromCart = useCallback((productId: string, variantId?: string) => {
    const key = lineKey(productId, variantId);
    setItems((current) =>
      current.filter((item) => lineKey(item.productId, item.variantId) !== key)
    );
  }, []);

  const updateQuantity = useCallback(
    (productId: string, quantity: number, variantId?: string) => {
      const key = lineKey(productId, variantId);
      if (quantity < 1) {
        removeFromCart(productId, variantId);
        return;
      }
      setItems((current) =>
        current.map((item) =>
          lineKey(item.productId, item.variantId) === key ? { ...item, quantity } : item
        )
      );
    },
    [removeFromCart]
  );

  const clearCart = useCallback(() => setItems([]), []);

  const toggleWishlist = useCallback((productId: string) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId]
    );
  }, []);

  const isWishlisted = useCallback(
    (productId: string) => wishlist.includes(productId),
    [wishlist]
  );

  const applyCoupon = useCallback((code: string) => {
    const normalized = code.trim().toUpperCase();
    if (normalized !== COUPON_CODE) return false;
    setCouponCode(normalized);
    return true;
  }, []);

  const removeCoupon = useCallback(() => setCouponCode(""), []);

  const itemCount = useMemo(
    () => items.reduce((sum, item) => sum + item.quantity, 0),
    [items]
  );

  const subtotal = useMemo(
    () => items.reduce((sum, item) => sum + item.price * item.quantity, 0),
    [items]
  );

  const couponApplied = couponCode === COUPON_CODE;
  const discount = couponApplied ? subtotal * COUPON_DISCOUNT : 0;
  const shipping = subtotal > 0 ? (subtotal >= 100 ? 0 : 9.9) : 0;
  const vat = calculateVat(subtotal - discount);
  const total = Math.max(0, subtotal - discount + shipping + vat);

  const value = useMemo(
    () => ({
      items,
      wishlist,
      couponCode,
      couponApplied,
      isHydrated,
      itemCount,
      subtotal,
      discount,
      vat,
      shipping,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      isWishlisted,
      applyCoupon,
      removeCoupon
    }),
    [
      items,
      wishlist,
      couponCode,
      couponApplied,
      isHydrated,
      itemCount,
      subtotal,
      discount,
      vat,
      shipping,
      total,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
      toggleWishlist,
      isWishlisted,
      applyCoupon,
      removeCoupon
    ]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}
