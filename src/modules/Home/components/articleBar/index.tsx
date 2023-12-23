import { Box, Text } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react';
import Link from 'next/link'

import { generalRoutes } from '@/common/constants/routes'
import { getClient } from '@/services/apollo-wrapper';
import { ArticleBarQuery } from '@/services/Graphql/types.generated';

import ArticleBarCarousel from './components/articleBarCarousel';
import { ARTICLE_BAR_QUERY } from './query';


async function getData() {
  try {
    const { data } = await getClient().query({ query: ARTICLE_BAR_QUERY });
    return data;
  } catch (error) {
    console.log(error);
  }
}


const ArticleBar = async () => {
  const data: ArticleBarQuery = await getData()

  return (
    <>
      {data?.posts?.data ?
        <>
          <div className="mb-3 flex justify-content-between align-items-center container">
            <h2 className="m-0">مقاله‌ها</h2>
            <Link style={{ color: "#197bff" }} href={generalRoutes.articles} className="p-1.5 rounded-lg flex items-center">
              <Text>
                مشاهده همه
              </Text>
              <IconChevronLeft />
            </Link>
          </div>
          <Box className="container !p-0">
            <ArticleBarCarousel data={data} />
          </Box>
        </>
        : <></>
      }
    </>

  )
}

export default ArticleBar
