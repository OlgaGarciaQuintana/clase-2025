'use client'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
import { DropdownMenu, 
    DropdownMenuTrigger, 
    DropdownMenuLabel, 
    DropdownMenuSeparator,
    DropdownMenuContent,
    DropdownMenuCheckboxItem
    } from '@/components/ui/dropdown-menu';
import { SunIcon, MoonIcon, SunMoon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ModeToggle() {
    const {theme, setTheme} = useTheme();
    const [mounted, setMounted] = useState(false);
    //cuando arranca esto se va a ejecutar
    useEffect(() => {
        setMounted(true);
    }, []);
    //si no hay nada, no dibujara nada
    if (!mounted) return null;
  return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button variant={"ghost"} className='focus-visible:ring-0 focus-visible:ring-offset-0'>
                {theme === 'system' ? (<SunMoon/>):(
                    theme === 'dark' ? (<MoonIcon/>):(<SunIcon/>)
                ) }
            </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
            <DropdownMenuLabel>Appearance</DropdownMenuLabel>
            <DropdownMenuCheckboxItem
            checked={theme === "system"}
            onClick={()=> setTheme("system")}
            >
                System
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
            checked={theme === "light"}
            onClick={()=> setTheme("light")}
            >
                Light
            </DropdownMenuCheckboxItem>
            <DropdownMenuCheckboxItem
            checked={theme === "dark"}
            onClick={()=> setTheme("dark")}
            >
                Dark
            </DropdownMenuCheckboxItem>
        </DropdownMenuContent>
    </DropdownMenu>
  )
}
