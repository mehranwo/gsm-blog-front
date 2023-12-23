import { Box, Text } from '@mantine/core'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const BrandItem = ({ imageUrl, brandName, href }: { imageUrl: string, brandName: string, href: string }) => {
  return (
    <Box className='mx-4'>
      <Link
        href={href}
        className="flex flex-col items-center justify-center"
      >
        <Image className='w-[40px] h-[40px] md:w-[80px] md:h-[80px]' height={50} width={100} alt="brandImage" src={imageUrl} />
        <Text className='!text-black'>{brandName}</Text>
      </Link>
    </Box>
  )
}

export default BrandItem