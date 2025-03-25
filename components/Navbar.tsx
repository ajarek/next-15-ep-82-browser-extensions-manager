import { ModeToggle } from './dark-mode'
import AppLogo from './AppLogo'

import Link from 'next/link'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { House } from 'lucide-react'

const Navbar = async () => {
  return (
    <div className='h-16 flex  items-center justify-between flex-wrap px-8'>
      <AppLogo />
      <div className='flex gap-4 items-center flex-wrap justify-center  '>
        <Link
          href='/'
          className='bg-secondary w-10 h-10 rounded-full flex justify-center items-center hover:border-2 border-primary  transition-all delay-200'
        >
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                {' '}
                <House
                  size={32}
                  strokeWidth={1}
                  aria-label='Home'
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Home</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </Link>

        <ModeToggle />
      </div>
    </div>
  )
}
export default Navbar
