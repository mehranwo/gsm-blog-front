import { Box, Text } from "@mantine/core";
import React from "react";

import { separatePriceWithComma } from "@/common/utils/product";
import { AttributeValueEntity, ComponentPricingVariant } from "@/services/Graphql/types.generated";

const ProductAttribute = ({
  attributes,
  price
}: {
  attributes: { [key: string]: string };
  price: number
}) => {
  return (
    <Box className="flex flex-col gap-2">
      {/* <Box className="flex flex-col py-3 gap-2 rounded-md">
        <Text style={{
          fontSize: "14px"
        }}>قیمت:
          {price || " ناموجود"}
        </Text>
      </Box> */}
      <Box className="flex flex-col py-3 gap-2 rounded-md">
        {price ?
          <div className="grid grid-cols-[2fr_5fr] items-center justify-start gap-2 mb-6">
            <Text style={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: "bold"

            }}>قیمت:
            </Text>
            <Text style={{
              fontSize: "16px",
              color: "rgb(12, 188, 135)"
            }}>
              {price ? `از ${separatePriceWithComma(price)} تومان` : " ناموجود"}
            </Text>
          </div> :
          <div className="grid grid-cols-[2fr_5fr] items-center justify-start gap-2 mb-6">
            <Text style={{
              fontSize: "16px",
              color: "#000000",
              fontWeight: "bold"

            }}>وضعیت:
            </Text>
            <Text style={{
              fontSize: "16px",
              color: "red",

            }}>
              ناموجود
            </Text>
          </div>
        }
        {Object.keys(attributes).map((attributeKey, index) => (
          <div key={index} className="grid grid-cols-[2fr_5fr] justify-start gap-2">
            <Text style={{
              fontSize: "14px"
            }}>{attributeKey}:</Text>
            <Text style={{
              fontSize: "14px"
            }}>{attributes[attributeKey]}</Text>
          </div>
        ))}
      </Box>
    </Box>
  );
};

export default ProductAttribute;
