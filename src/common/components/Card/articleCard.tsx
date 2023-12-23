import { Box, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { truncate } from '@/common/utils'

interface TArticleCardProps {
  id: string,
  tagName: string,
  titre: string,
  authorName?: string,
  publishedAt: string,
  imageUrl: string,
  authorImageUrl?: string
}

const ArticleCard: React.FC<TArticleCardProps> = ({ id, tagName, authorImageUrl, authorName, imageUrl, publishedAt, titre }) => {

  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <div className={`flex items-center gap-2 md:flex-col w-full md:w-fit border-2 border-gray-200 md:border-0 rounded-xl ${isDesktop ? "p-0" : "p-2"}`}>
      <Link href={`${generalRoutes.articles}/${id}/${titre.split(" ").join("-")}`}>
        <div className="position-relative">
          <Image
            className="card-img !w-[88px] !h-[88px] md:!w-[274px] md:!h-[274px] !rounded-lg"
            src={imageUrl}
            alt="Card image"
            width={200}
            height={300}
          />
          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
            {/* <div className="w-100 mt-auto">
            <Link href="#" className="badge text-bg-info mb-2">{tagName}</Link>
          </div> */}
          </div>
        </div>
      </Link>
      <div className="card-body px-0">
        <Box className='flex-col flex'>
          <Link className='' href={`${generalRoutes.articles}/${id}/${titre.split(" ").join("-")}`}>
            <h5 className="hover:text-blue-400 hover:transition-all h-[88px] md:h-[70px] w-[200px] md:w-[274px]">{truncate(titre, 75)}</h5>
          </Link>
          {/* <!-- Card info --> */}
          {/* <ul className="flex pr-0 flex-col w-[185px] md:w-[274px]">
          <li className="nav-item">
            <div className="nav-link">
              <div className="d-flex align-items-center position-relative ">
                <div className="avatar avatar-xs">
                  <Image className="avatar-img rounded-circle mt-3 md:!mt-0" src={authorImageUrl} alt="avatar" width={100} height={100} />
                </div>
                <span className="ms-3 text-xs mt-3">با {authorName}</span>
              </div>
            </div>
          </li>
          <li className="nav-item self-center text-xs">{new Date(publishedAt).toLocaleDateString("fa-IR")}</li>
        </ul> */}
        </Box>
      </div>
    </div>
  )
}

export default ArticleCard