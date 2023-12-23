import { Text } from "@mantine/core"
import { IconChevronLeft } from "@tabler/icons-react"
import dynamic from "next/dynamic"
import Link from "next/link"

import BreadCrumbs from "@/common/components/BreadCrumbs"
import { generalRoutes } from "@/common/constants/routes"

const MyMap = dynamic(() => import("./_components/Map"), { ssr: false });


const ContactUsModule = ({ data }: { data: any }) => {
    return (
        <main>
            <div className="container mt-10 md:!mt-0">
                <BreadCrumbs>
                    <Link style={{ color: "#8690A2" }} className="!text-xs md:!text-base" href={generalRoutes.home}>خانه</Link>
                    <IconChevronLeft style={{ color: "#8690A2" }} size={10} />
                    <Text className="!text-xs md:!text-base">تماس با ما</Text>
                </BreadCrumbs>

            </div>


            <section className="!p-0">
                <div className="container">
                    <div className="col-xl-9 mx-auto">
                        <MyMap />
                        <div
                            className="mt-4"
                            style={{
                                fontFamily: "IRANSans",
                            }}
                            dangerouslySetInnerHTML={{
                                __html: data?.staticPage?.data?.attributes?.main_text ?? "",
                            }}
                        ></div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default ContactUsModule
