import { Button, Text } from '@mantine/core';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

import { generalRoutes } from '@/common/constants/routes';
import { separatePriceWithComma } from '@/common/utils/product';

import CrossIcon from '../../../../../public/assets/images/CrossIcon';

const ComparisonProductCard = ({
  productId,
  productImageURL,
  productName,
  productName_en,
  price,
  onClick,
  index
}: {
  productId: string;
  productImageURL: string;
  productName: string;
  productName_en: string
  price: number;
  onClick?: () => void
  index?: number
}) => {
  return (
    <div className="col-sm-6 col-md-4 col-lg-3 w-[150px] h-[230px] mt-3  md:!w-fit md:h-full">
      <div className="card border py-3 md:p-3 h-100">
        <Button className={`self-end ${index === 1 ? '!hidden' : ''} bg-transparent mb-2`} onClick={onClick}>
          <CrossIcon className='w-5 h-5' />
        </Button>

        <Link className="max-w-full max-h-full flex justify-center items-center overflow-hidden !h-[210px] md:!h-[150px] !w-[90px] md:!w-4/5 mx-auto" href={generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-")}>
          <Image
            className=" w-full h-full mx-auto max-h-full"
            src={productImageURL}
            alt=""
            width={200}
            height={300}
          />
        </Link>


        <div className="card-body text-center p-3 px-0">
          <h5 className="card-title md:w-[233px]">
            <Link href={generalRoutes.product + "/" + productId + "/" + productName_en?.split(" ").join("-")}>
              {productName}
            </Link>
          </h5>
          <h6 className="mb-0 text-success">
            {price ? <Text>{separatePriceWithComma(price)} تومان</Text> : <Text>ناموجود</Text>}
          </h6>
        </div>
      </div>
    </div>
  )
}

export default ComparisonProductCard
