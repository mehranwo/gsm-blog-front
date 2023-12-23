'use client'
import React, { useState } from 'react'

import ProductCard from '@/common/components/Card/ProductCard'
import { ContainerListing } from '@/common/components/Container'
import { distractPriceInProductData, separatePriceWithComma } from '@/common/utils/product'
import { client } from '@/services/client'
import { ProductEntity, ProductListQuery } from '@/services/Graphql/types.generated'

import { PRODUCTS_RELATED_BRAND } from '../query'

export const revalidate = 1;

const BrandProductsComponent = ({ data, brandId }: { data: ProductListQuery, brandId: string }) => {
  const [localData, setLocalData] = useState<ProductEntity[]>(data?.products?.data as ProductEntity[])

  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1)

  const getProduct = async ({
    page,
    pageSize,
    id
  }: {
    page: number;
    pageSize: number;
    id: string
  }) => {
    try {
      const { data } = await client.query({
        query: PRODUCTS_RELATED_BRAND,
        fetchPolicy: "no-cache",
        variables: { page, pageSize, id },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  const handleMoreProduct = async () => {
    const data = await getProduct({
      page: page + 1,
      pageSize: 16,
      id: brandId
    })
    if (!data?.products?.data.length) return setHasMore(false)
    if (data?.products?.data.length === 0) {
      return setHasMore(false)
    }
    setLocalData([...localData, ...(data?.products?.data as ProductEntity[])])
    setPage(page + 1)
  }

  return (
    <ContainerListing
      className='grid grid-cols-[1fr_1fr] md:flex'
    >
      {
        localData?.map((product) => (
          <ProductCard
            productName_en={product.attributes?.name_en ?? ""}
            key={product.id}
            productId={product.id ?? ""}
            productImageURL={product.attributes?.main_image?.data?.attributes?.url ?? ""}
            productName={product.attributes?.name ?? ""}
            price={separatePriceWithComma(distractPriceInProductData(product as ProductEntity))}
          />
        ))
      }
    </ContainerListing>
  )
}

export default BrandProductsComponent
