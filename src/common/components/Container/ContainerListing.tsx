import { Box} from '@mantine/core'
import React from 'react'

export const ContainerListing = (
    {
        children,
        className = ""
    }: {

        children?: any
        className?: string
    }) => {
    return (
        
            <Box className={`flex flex-col items-center justify-center container md:flex md:flex-row md:flex-wrap md:items-start gap-3 mb-2 px-0 ${className}`}>
                {children}
            </Box>

    )
}


