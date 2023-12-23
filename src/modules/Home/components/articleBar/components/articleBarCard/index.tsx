import { Box, Image } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { truncate } from '@/common/utils'

interface TArticleBarCardProps {
  id: string,
  tagName?: string,
  titre: string,
  authorName?: string,
  publishedAt: string,
  imageUrl: string,
  authorImageUrl?: string
}

const ArticleBarCard: React.FC<TArticleBarCardProps> = ({ id, tagName, authorImageUrl, authorName, imageUrl, publishedAt, titre }) => {
  const isDesktop = useMediaQuery("(min-width: 768px)");
  return (
    <div className="flex items-center gap-2 flex-col w-full md:w-fit !p-2 md:!p-4">
      {/* <!-- Card img --> */}
      <Link href={`${generalRoutes.articles}/${id}/${titre.split(" ").join("-")}`}>
        <div className="position-relative">
          <Image className="card-img  !h-[100px] md:!w-[185px] md:!h-[185px] !rounded-lg" src={imageUrl} alt="Card image" />
          <div className="card-img-overlay d-flex align-items-start flex-column p-3">
            {/* <div className="w-100 mt-auto">
            <a href="#" className="badge text-bg-info mb-2">{tagName}</a>
          </div> */}
          </div>
        </div>
      </Link>
      <div className="card-body px-0">
        <Box className='flex-col flex'>
          <Link className='' href={`${generalRoutes.articles}/${id}/${titre.split(" ").join("-")}`}>
            <h5 className="hover:text-blue-400 hover:transition-all h-[50px] md:h-[70px]  md:w-[185px]">
              {
                isDesktop ?  truncate(titre, 45) : truncate(titre, 30) 
              }
            
              
              </h5>
          </Link>
          {/* <!-- Card info --> */}
          {/* <ul className="flex pr-0 flex-col w-[185px] ">
          <li className="nav-item">
            <div className="nav-link">
              <div className="d-flex align-items-center position-relative ">
                <div className="avatar avatar-xs">
                  <Image className="avatar-img rounded-circle mt-3 md:!mt-0" src={authorImageUrl} alt="avatar" width={100} height={100} />
                </div>
                <span className="ms-3 text-xs mt-3">با
                  {authorName}
                </span>
              </div>
            </div>
          </li>
          <li className="nav-item self-center text-xs">
            {new Date(publishedAt).toLocaleDateString("fa-IR")}
          </li>
        </ul> */}
        </Box>
      </div>
    </div>
  )
}

export default ArticleBarCard