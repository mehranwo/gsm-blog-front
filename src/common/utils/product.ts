import { ProductEntity } from "@/services/Graphql/types.generated";

export const distractPriceInProductData = (product: ProductEntity) => {
  let minPrice = 0
  // const varaint = product?.attributes?.variant ?? []
  // let sortedVariant: Array<any> = []
  // if (varaint.length >= 1) {
  //   sortedVariant = varaint.sort(function (x, y) {
  //     return x?.price - y?.price;
  //   });
  // }

  product?.attributes?.variant?.forEach((variantPrice) => {
    if (!variantPrice?.price) return
    if (minPrice === 0 || variantPrice?.price < minPrice) {
      minPrice = variantPrice?.price;
    }
  });
  return minPrice
  // return sortedVariant[sortedVariant.length - 1]?.price ?? 0;
};

export const separatePriceWithComma = (number: number) => {
  return Number(number).toLocaleString("de-DE").replaceAll(".", ",");
};

export const createProductName = (product: ProductEntity) => {
  let productName = product.attributes?.name;
  const attr_values_name = product.attributes?.attribute_values?.data.map(
    (attr_value) => {
      return attr_value.attributes?.value;
    }
  );

  return productName + (attr_values_name?.join(" ") ?? "");
};
