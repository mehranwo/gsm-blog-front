import { Box, Text } from '@mantine/core'
import { IconChevronLeft } from '@tabler/icons-react'
import Link from 'next/link'

import BreadCrumbs from '@/common/components/BreadCrumbs'
import { generalRoutes } from '@/common/constants/routes'
import { getClient } from '@/services/apollo-wrapper'
import { PrivacyDataQuery } from '@/services/Graphql/types.generated'

import { PRIVACY_DATA_QUERY } from './query'


export const revalidate = 10;
export const dynamic = "force-dynamic"

import { Metadata } from "next";
export const metadata: Metadata = {
  title: "جی‌اس‌ام | حریم خصوصی",
  description: 'اطلاع از آخرین اخبار دنیای موبایل و تکنولوژی به همراه قیمت روز، بررسی تخصصی و مقایسه ای جدیدترین گوشی ها ، معرفی و دانلود اپلیکیشن های کاربردی | جی‌اس‌ام',
  alternates: {
    canonical: "https://www.gsm.ir/privacy/"
  },
  robots: "follow, index, max-snippet:-1, max-video-preview:-1, max-image-preview:large"
}

async function getData() {
  try {
    const { data } = await getClient().query({ query: PRIVACY_DATA_QUERY })
    return data
  } catch (error) {
    console.log(error)
  }
}

const Privacy = async () => {
  const data: PrivacyDataQuery = await getData()

  return (
    <Box className="border flex flex-col justify-center items-center p-3">
      <BreadCrumbs>
        <Link className='!text-xs md:!text-base' href={generalRoutes.privacy}>خانه</Link>
        <IconChevronLeft size={10} />
        <Text className='!text-xs md:!text-base'>سیاست حفظ حریم خصوصی</Text>
      </BreadCrumbs>
      <div
        className="mt-4 container "
        style={{
          fontFamily: "IRANSans",
        }}
        dangerouslySetInnerHTML={{
          __html: data?.staticPage?.data?.attributes?.main_text ?? ""
        }}
      ></div>
    </Box>
  )
}

export default Privacy
