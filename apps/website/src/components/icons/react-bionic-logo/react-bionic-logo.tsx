import { cn } from '@/lib/utils'
import React from 'react'
import { IIconProps } from '../icons.interface'

const ReactBionicLogo = ({ className }: IIconProps) => {
  return (
    <svg className={cn(className)} width="273" height="182" viewBox="0 0 273 182" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="91" cy="91" r="87" fill="black" stroke="#808080" strokeWidth="8"/>
<circle cx="182" cy="91" r="87" fill="white" stroke="#808080" strokeWidth="8"/>
</svg>
  )
}

export default ReactBionicLogo