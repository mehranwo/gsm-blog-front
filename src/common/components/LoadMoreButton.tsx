import { Box, Button } from '@mantine/core'
import { IconChevronDown } from '@tabler/icons-react'
import React from 'react'

const LoadMoreButton = ({ disabled, onClick, className, loading }: { disabled?: boolean, onClick: () => void, className?: string, loading: boolean }) => {
  return (
    <Box className={`${className} mb-2`}>
      <Button loading={loading} leftSection={<IconChevronDown />} className="!w-full !h-12 !bg-white border-2 !border-[#98C3FF] !rounded-lg !text-[#1C7AFF] !text-base !font-bold" disabled={disabled} onClick={onClick}>مشاهده بیشتر</Button>
    </Box>
  )
}

export default LoadMoreButton