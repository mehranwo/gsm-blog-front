import { Box } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { truncate } from '@/common/utils'

const NewsBarCard = ({
  authorName,
  publishedAt,
  tagName,
  titre,
  imageUrl,
  id,
  authorImageUrl
}: {
  id: string,
  tagName: string,
  titre: string,
  authorName: string,
  publishedAt: string,
  imageUrl: string,
  authorImageUrl: string
}) => {
  return (
    <div className="flex md:items-center gap-2 flex-col w-full md:!w-fit">
      <Link href={`${generalRoutes.newsList}/${id}/${titre.split(" ").join("-")}`}>
        <div className="position-relative">
          <img className="card-img !w-[185px] !h-[150px] md:!w-[185px] md:!h-[185px] !rounded-lg" src={imageUrl} alt="Card image" />
          <div className="card-img-overlay d-flex align-items-start flex-column">
            {/* <div className="w-100 mt-auto">
              <Link href="#" className="badge text-bg-info mb-2">{tagName}</Link>
            </div> */}
          </div>
        </div>
      </Link>
      <div className="card-body px-0">
        <Box className='flex-col flex'>
          <Link className='' href={`${generalRoutes.newsList}/${id}/${titre.split(" ").join("-")}`}>
            <h5 className="hover:text-blue-400 hover:transition-all h-[50px] md:h-[80px] w-[200px] md:w-[185px]">{truncate(titre, 43)}</h5>
          </Link>
          {/* <!-- Card info --> */}
          {/* <ul className="flex pr-0 flex-col w-[185px] ">
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

export default NewsBarCard