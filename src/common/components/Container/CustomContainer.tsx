import { Box } from '@mantine/core'

export const CustomContainer = ({ children }: { children: any }) => {
    return (
        <Box className="container mt-10 md:mt-0">
            {children}
        </Box>
    )
}


