import { Box, Image, List, Text, Title } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import Link from 'next/link'
import React from 'react'

const MegaMenu = () => {
  return (
    
    <li className="nav-item dropdown dropdown-fullwidth">
    <Link
      className="nav-link"
      href="#"
      id="megaMenu"
      data-bs-toggle="dropdown"
      aria-haspopup="true"
      aria-expanded="false"
    >
      مگامنو
      <IconChevronDown size={12}/>

    </Link>
    <Box className="dropdown-menu" aria-labelledby="megaMenu">
      <Box className="container">
        <Box className="row g-4 p-3 flex-fill">
          <Box className="col-sm-6 col-lg-3">
            <Box className="card bg-transparent">
              <Image
                className="card-img rounded"
                src="assets/images/blog/16by9/small/01.jpg"
                alt="Card image"
              />
              <Box className="card-body px-0 pt-3">
                <Title order={6} className="card-title mb-0">
                  <Link href="#" className="btn-link text-reset">
                    7 دیدگاه اشتباهاتی که همه در سفر مرتکب می شوند؟
                  </Link>
                </Title>
                <List className="nav nav-divider align-items-center text-uppercase small mt-2">
                  <li className="nav-item">
                    <Link href="#" className="text-reset btn-link">
                      الناز حسینی
                    </Link>
                  </li>
                  <li className="nav-item">15 بهمن، 1400</li>
                </List>
              </Box>
            </Box>
          </Box>

          <Box className="col-sm-6 col-lg-3">
            <Box className="card bg-transparent">
              <Image
                className="card-img rounded"
                src="assets/images/blog/16by9/small/02.jpg"
                alt="Card image"
              />
              <Box className="card-body px-0 pt-3">
                <Title order={6} className="card-title mb-0">
                  <Link href="#" className="btn-link text-reset">
                    12 بدترین نوع حساب های تجاری که در توییتر دنبال می
                    کنید!
                  </Link>
                </Title>

                <List className="nav nav-divider align-items-center text-uppercase small mt-2">
                  <li className="nav-item">
                    <Link href="#" className="text-reset btn-link">
                      محمد کریمی
                    </Link>
                  </li>
                  <li className="nav-item">2 آبان، 1400</li>
                </List>
              </Box>
            </Box>
          </Box>
          <Box className="col-sm-6 col-lg-3">
            <Box className="card bg-transparent">
              <Image
                className="card-img rounded"
                src="assets/images/blog/16by9/small/03.jpg"
                alt="Card image"
              />
              <Box className="card-body px-0 pt-3">
                <Title order={6} className="card-title mb-0">
                  <Link href="#" className="btn-link text-reset">
                    آیا این آگهی ها واقعی هستند؟ معاوضه لوازم شخصی با
                    غذا!
                  </Link>
                </Title>
                <List className="nav nav-divider align-items-center text-uppercase small mt-2">
                  <li className="nav-item">
                    <Link href="#" className="text-reset btn-link">
                      مهدی شجاعی
                    </Link>
                  </li>
                  <li className="nav-item">14 مرداد، 1400</li>
                </List>
              </Box>
            </Box>
          </Box>
          <Box className="col-sm-6 col-lg-3">
            <Box className="bg-primary bg-opacity-10 p-4 text-center h-100 w-100 rounded">
              <Text>پیشنهاد Blogzine</Text>
              <Title order={3}>خرید پکیج اقتصادی</Title>
              <Text>عضویت در خبرنامه</Text>
              <Link href="#" className="btn btn-warning">
                خرید و فعالسازی
              </Link>
            </Box>
          </Box>
        </Box>
        <Box className="row px-3">
          <Box className="col-12">
            <List className="list-inline mt-3">
              <li className="list-inline-item">برچسب ها:</li>
              <li className="list-inline-item">
                <Link
                  href="#"
                  className="btn btn-sm btn-primary-soft"
                >
                  گردشگری
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  href="#"
                  className="btn btn-sm btn-warning-soft"
                >
                  کسب و کار
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  href="#"
                  className="btn btn-sm btn-success-soft"
                >
                  فناوری
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-danger-soft">
                  گجت
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-info-soft">
                  سبک زندگی
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  href="#"
                  className="btn btn-sm btn-primary-soft"
                >
                  واکسن
                </Link>
              </li>
              <li className="list-inline-item">
                <Link
                  href="#"
                  className="btn btn-sm btn-success-soft"
                >
                  ورزشی
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-danger-soft">
                  کووید
                </Link>
              </li>
              <li className="list-inline-item">
                <Link href="#" className="btn btn-sm btn-info-soft">
                  پوشاک
                </Link>
              </li>
            </List>
          </Box>
        </Box>
      </Box>
    </Box>
  </li>
  )
}

export default MegaMenu