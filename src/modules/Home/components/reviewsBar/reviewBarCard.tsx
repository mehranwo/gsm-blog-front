import { Box, Image, Text } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'

const ReviewBarCard = ({
    authorName,
    imageURL,
    mainTag,
    publishedAt,
    titre,
    postId,
    authorImage
}: {
    imageURL: string,
    mainTag: string,
    titre: string,
    authorName?: string,
    publishedAt: string,
    postId: string,
    authorImage?: string
}) => {
    return (
        // <div className="card mb-4 !bg-transparent !max-w-none">
        //     <div className="row">
        //         <div className="col-4">
        //             <Image
        //                 className="rounded-3 h-full"
        //                 src={imageURL}
        //                 alt=""
        //                 // width={400}
        //                 // height={400}
        //             />
        //         </div>
        //         <div className="col-8">
        //             <p className="badge text-bg-danger mb-2">
        //                 {mainTag}
        //             </p>
        //             <h5>
        //                 <Link
        //                     href={`${generalRoutes.reviewList}/${postId}`}
        //                     className="btn-link stretched-link "
        //                 >
        //                     {titre}
        //                 </Link>
        //             </h5>
        //             <ul className="nav nav-divider align-items-center d-none d-sm-inline-block small">
        //                 <li className="nav-item">
        //                     <div className="nav-link">
        //                         <div className="d-flex align-items-center position-relative">
        //                             <div className="avatar avatar-xs">
        //                                 <Image
        //                                     className="avatar-img rounded-circle"
        //                                     src={authorImage}
        //                                     alt="avatar"
        //                                     width={20}
        //                                     height={20}
        //                                 />
        //                             </div>
        //                             <span className="ms-3">
        //                                 با
        //                                 <p
        //                                     className="stretched-link text-reset btn-link"
        //                                 >
        //                                     {authorName}
        //                                 </p>
        //                             </span>
        //                         </div>
        //                     </div>
        //                 </li>
        //                 <li className="nav-item">{new Date(publishedAt).toLocaleDateString("fa-IR")}</li>
        //             </ul>
        //         </div>
        //     </div>
        // </div>
        <Link className='text-black' href={`${generalRoutes.reviewList}/${postId}/${titre.split(" ").join("-")}`}>
            <Box className='flex gap-2'>
                <Image src={imageURL} className='!w-[133px] !h-[133px] !rounded-md' />
                <Text>{titre}</Text>
            </Box>
        </Link>
    )
}

export default ReviewBarCard
