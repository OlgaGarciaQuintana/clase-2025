'use client'
import React, {useState, useEffect} from 'react'
import { useTheme } from 'next-themes'
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

    // ciclo de temas
    const themes: Array<'system'|'light'|'dark'> = ['system','light','dark'];
    const cycleTheme = () => {
        const idx = themes.indexOf((theme as any) ?? 'system');
        const next = themes[(idx + 1) % themes.length];
        setTheme(next);
    };

  return (
    <Button
      variant={"ghost"}
      className='focus-visible:ring-0 focus-visible:ring-offset-0'
      onClick={cycleTheme}
      aria-label={`Theme: ${theme}. Click to change`}
      title={`Theme: ${theme}. Click to change`}
    >
      {theme === 'system' ? (<SunMoon/>):(
        theme === 'dark' ? (<MoonIcon/>):(<SunIcon/>)
      ) }
    </Button>
  )
}
