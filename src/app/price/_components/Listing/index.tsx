'use client'
import React, { useState } from 'react'

import ProductCard from '@/common/components/Card/ProductCard'
import { ContainerListing } from '@/common/components/Container'
import { distractPriceInProductData, separatePriceWithComma } from '@/common/utils/product'
import { client } from '@/services/client'
import { ProductEntity, ProductListQuery } from '@/services/Graphql/types.generated'

import { PRODUCT_LIST_QUERY } from '../../query'
import LoadMoreButton from '@/common/components/LoadMoreButton'

export const revalidate = 1;

const PlpListingComponent = ({ data }: { data: ProductListQuery }) => {
  const [localData, setLocalData] = useState<ProductEntity[]>(data?.products?.data as ProductEntity[])

  const [loading, setLoading] = useState(false)
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState<number>(1)

  const getData = async ({
    page,
    pageSize
  }: {
    page: number;
    pageSize: number
  }) => {
    try {
      const { data } = await client.query({
        query: PRODUCT_LIST_QUERY,
        fetchPolicy: "no-cache",
        variables: { page, pageSize },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }

  // const [getProduct] = useProductListLazyQuery()

  const handleMoreProduct = async () => {
    setLoading(true)
    const data = await getData({
      page: page + 1,
      pageSize: 12
    })
    setLoading(false)
    if (!data?.products?.data.length) return setHasMore(false)
    if (data?.products?.data.length === 0) {
      return setHasMore(false)
    }
    setLocalData([...localData, ...(data?.products?.data as ProductEntity[])])
    setPage(page + 1)
  }

  return (
    <>
      <ContainerListing
        className='md:flex md:flex-row flex-wrap grid grid-cols-2'
      >
        {
          localData?.map((product) => (
            <ProductCard
              key={product.id}
              productId={product.id ?? ""}
              productImageURL={product.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ?? ""}
              productName={product.attributes?.name ?? ""}
              price={separatePriceWithComma(distractPriceInProductData(product as ProductEntity))}
              productName_en={product.attributes?.name_en ?? ""}
            />
          ))
        }
      </ContainerListing >
      {
        hasMore ?
          <LoadMoreButton
            loading={loading}
            className='lg:!mx-10'
            onClick={handleMoreProduct}
          />
          : null
      }
    </>
  )
}

export default PlpListingComponent
