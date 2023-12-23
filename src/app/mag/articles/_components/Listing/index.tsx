'use client'
import React, { useState } from 'react'

import ArticleCard from '@/common/components/Card/articleCard'
import { ContainerListing } from '@/common/components/Container'
import { client } from '@/services/client'
import { ArticleListQuery, PostEntity } from '@/services/Graphql/types.generated'

import { ARTICLE_LIST_QUERY } from '../../query'
import LoadMoreButton from '@/common/components/LoadMoreButton'

export const revalidate = 1;

const ArticleListingComponent = ({ data }: { data: ArticleListQuery }) => {
  const [localData, setLocalData] = useState<PostEntity[]>(data?.posts?.data as PostEntity[])

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
        query: ARTICLE_LIST_QUERY,
        fetchPolicy: "no-cache",
        variables: { page, pageSize },
      });
      return data;
    } catch (error) {
      console.log(error);
    }
  }


  const handleMoreProduct = async () => {
    setLoading(true)
    const data = await getData({
      page: page + 1,
      pageSize: 12
    })
    setLoading(false)
    if (!data?.posts?.data.length) return setHasMore(false);
    if (data?.posts?.data.length === 0) {
      return setHasMore(false);
    }
    setLocalData([...localData, ...(data?.posts?.data as PostEntity[])]);
    setPage(page + 1);
  }

  return (
    <>
      <ContainerListing
      >
        {
          localData?.map((article: any, index) => (
            <ArticleCard
              key={index}
              //  authorImageUrl={article.attributes?.author?.data?.attributes?.main_image?.data?.attributes?.url ?? ""} authorName={article.attributes?.author?.data?.attributes?.username ?? ""} 
              id={article.id ?? ""}
              imageUrl={article.attributes?.main_image?.data?.attributes?.formats?.thumbnail.url ?? ""}
              publishedAt={article.attributes?.publishedAt}
              tagName=""
              titre={article.attributes?.titre ?? ""}
            />
          ))
        }
      </ContainerListing>
      {
        hasMore ?
          <LoadMoreButton
            loading={loading}
            onClick={handleMoreProduct}
          />
          : null
      }

    </>
  )
}

export default ArticleListingComponent
