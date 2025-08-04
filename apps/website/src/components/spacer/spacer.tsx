import { cn } from '@/lib/utils'
import React from 'react'

const spaceSizes: Record<string, string> = {
    "xxsmall": "my-1",
    "xsmall": "my-2",
    "small": "my-4",
    "medium": "my-8",
    "large": "my-12",
    "xlarge": "my-24",
    "xxlarge": "my-36",
}

interface ISpacerProps {
    size: keyof typeof spaceSizes;
}

const Spacer = ({size}: ISpacerProps) => {
  return (
    <div className={cn(spaceSizes[size])} />
  )
}

export default Spacer