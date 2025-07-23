import { useAppSelector } from "@/store/store";

const useIsProductSelected = (categoryName: string, productId: string): boolean => {
  return useAppSelector((state) => {
    const category = state.order.order.find((o) => o.name === categoryName);
    if (!category) return false;
    return category.selectedProducts.some((sp) => sp._id === productId);
  });
};

export default useIsProductSelected;