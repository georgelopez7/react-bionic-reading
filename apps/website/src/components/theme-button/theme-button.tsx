"use client"

import React, { useEffect } from 'react'
import { Button } from '../ui/button'
import { useTheme } from 'next-themes'
import { Moon, Sun } from 'lucide-react'

const ThemeButton = () => {
    const { theme, setTheme } = useTheme()
    const [mounted, setMounted] = React.useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    const themeIcon = theme === 'dark' ? <Sun /> : <Moon />
    const handleClick = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }

    if (!mounted) {
        return (
          <Button variant="outline" size="icon" disabled>
            <Moon />
          </Button>
        )

    }

  return (
    <Button variant="outline" size="icon" onClick={handleClick}>
        {themeIcon}
    </Button>
  )
}

export default ThemeButton