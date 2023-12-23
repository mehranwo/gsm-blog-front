import { Box } from '@mantine/core'
import React, { ReactElement } from 'react'

const BreadCrumbs = ({ children }: { children: any }) => {
    return (
        <Box className="mb-4 lg:mt-10 md:mt-20  flex gap-1 items-center">
            {children}
        </Box>
    )
}

export default BreadCrumbs
