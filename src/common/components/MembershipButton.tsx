import { Button } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import generalConfig from '../config/general'
import { useAuthState } from '../store'
import { getJWT, setRedirectURL } from '../utils/handleLogin'

const MembershipButton = () => {
    const token = getJWT()
    const pathName = usePathname();
    const setAuthType = useAuthState((state) => state.setTypeAuth)
    return (
        <>
            {
                token?.length === 0 ?
                    <Link
                        onClick={() => {
                            setAuthType("membership")
                            setRedirectURL(pathName)
                        }}
                        href={`${generalConfig.baseUrl}/api/connect/google`}
                    >
                        <Button
                            style={{ backgroundColor: "#197bff" }}
                            className="p-1 rounded-md text-white !w-full"
                        >
                            عضویت در خبر‌نامه
                        </Button>
                    </Link>
                    : null
            }
        </>
    )
}

export default MembershipButton
