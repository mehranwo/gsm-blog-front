import { Box } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { generalRoutes } from '@/common/constants/routes'
import { truncate } from '@/common/utils'
import { PostEntity } from '@/services/Graphql/types.generated'

const SpecialTechReviewCard = ({ data }: { data?: PostEntity }) => {
    return (
        <Link className="card !h-[400px] md:!h-[580px] !max-w-[700px] md:flex-1" href={`${generalRoutes.reviewList}/${data?.id}`}>
            <div
                className="card card-overlay-bottom !h-[400px] md:!h-[580px] !max-w-[700px] md:flex-1"
            >
                <Image
                    className='w-full h-full'
                    height={580}
                    width={400}
                    alt=''
                    src={data?.attributes?.main_image?.data?.attributes?.url ?? ""}
                />
                <div className="card-img-overlay d-flex flex-column">
                    <div className="w-100 mt-auto">
                        <div className="col text-center">
                            {/* <p className="badge text-bg-warning mb-2">
                            {data?.attributes?.main_tag?.data?.attributes?.name ?? ""}
                        </p> */}
                            <h2 className="text-white text-right text-2xl">
                                <Link href={`${generalRoutes.reviewList}/${data?.id}/${data?.attributes?.titre?.split(" ").join("-")}`} className="btn-link text-reset fw-normal">
                                    {truncate(data?.attributes?.titre ?? "", 120)}
                                </Link>
                            </h2>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SpecialTechReviewCard
