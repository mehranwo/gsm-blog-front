"use client"
import { Button } from '@mantine/core'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

import generalConfig from '@/common/config/general'
import { useAuthState } from '@/common/store'
import { setRedirectURL } from '@/common/utils/handleLogin'

const LoginButton = () => {
    const pathName = usePathname();
    const setAuthType = useAuthState((state) => state.setTypeAuth)
    return (
        <Link
            onClick={() => {
                setAuthType("Login")
                setRedirectURL(pathName)
            }}
            href={`${generalConfig.baseUrl}/api/connect/google`}
        >
            <Button
                style={{ backgroundColor: "#197bff" }}
                className=" text-white rounded-md text-center p-2"
            >
                ورود | ثبت‌نام
            </Button>
        </Link>
    )
}

export default LoginButton
