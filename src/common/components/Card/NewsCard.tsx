"use client"
import { Box } from '@mantine/core'
import { useMediaQuery } from '@mantine/hooks'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { truncate } from '@/common/utils'

const NewsCard = ({
  authorName,
  publishedAt,
  tagName,
  titre,
  imageUrl,
  id,
  authorImageUrl,
  similarStyle = false
}: {
  id: string,
  tagName: string,
  titre: string,
  authorName?: string,
  publishedAt: string,
  imageUrl: string,
  authorImageUrl?: string,
  similarStyle?: boolean
}) => {
  const isMobile = useMediaQuery("(max-width: 768px)");
  return (
    <div className={`flex w-full items-center justify-between gap-2 md:flex-col md:w-[185px] border-2 border-gray-200 md:border-0 rounded-xl ${isMobile ? "p-2" : "p-0"} ${similarStyle ? "" : "border-b-2 border-gray-100 md:border-b-0 flex-col "}`}>
      <Link href={`${generalRoutes.newsList}/${id}/${titre?.split(" ").join("-")}`}>
        <div className={`position-relative  ${similarStyle ? "!w-[88px] !h-[88px] md:!w-[185px] md:!h-[185px]" : ""}`}>
          <Image
            className={`card-img ${similarStyle ? "!w-[88px] !h-[88px] md:!w-[185px] md:!h-[185px]" : "!w-[100px] !h-[100px] md:!w-[185px] md:!h-[200px]"} !rounded-lg`}
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
        <Box className='flex-col flex md:text-center'>
          <Link className='' href={`${generalRoutes.newsList}/${id}/${titre?.split(" ").join("-")}`}>
            {
              similarStyle ?
                <h5 className="hover:text-blue-400 hover:transition-all !h-[88px] md:!h-auto">{truncate(titre, 75)}</h5>
                :
                isMobile ?
                  <h5 className="hover:text-blue-400 hover:transition-all ">{truncate(titre, 20)}</h5>
                  : <h5 className="hover:text-blue-400 hover:transition-all text-right ">{truncate(titre, 40)}</h5>
            }
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

export default NewsCard