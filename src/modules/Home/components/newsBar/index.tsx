import { Text } from '@mantine/core';
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { getClient } from '@/services/apollo-wrapper';
import { NewsBarQueryQuery } from '@/services/Graphql/types.generated';

import NewsBarCarousel from './components/NewsBarCarousel';
import { NEWS_BAR_QUERY } from './query';

export const revalidate = 120;


const getData = async () => {
  try {
    const { data } = await getClient().query({
      query: NEWS_BAR_QUERY,
    });
    return data;
  } catch (error) {
    console.log(error);
  }
}

const NewsBar = async () => {
  const data: NewsBarQueryQuery = await getData();
  return (
    <section className="pt-0 container !pb-0">
      <div className="row">
        <div className="col-md-12">
          <div className="mb-3 flex justify-content-between align-items-center ">
            <h2 className="m-0">
              اخبار
            </h2>
            <Link style={{ color: "#197bff" }} href={generalRoutes.newsList} className="p-1.5 rounded-lg flex items-center">
              <Text>
                مشاهده همه
              </Text>
              <IconChevronLeft />
            </Link>
          </div>

          <NewsBarCarousel data={data} />
        </div>
      </div>
    </section>
  )
}

export default NewsBar
