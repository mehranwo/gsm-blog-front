import { Box } from '@mantine/core'
import Image from 'next/image'
import React from 'react'

const loading = () => {
    return (
        <Box className='flex h-screen w-screen justify-center items-center '>
            <Image
                src={"/assets/images/icons8-dots-loading.gif"}
                alt='laoding'
                width={50}
                height={50}
            />
        </Box>
    )
}

export default loading
