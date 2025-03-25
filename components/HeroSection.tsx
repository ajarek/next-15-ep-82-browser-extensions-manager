'use client'
import { Button } from '@/components/ui/button'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'

interface SearchProps {
  query: string
}

const HeroSection = ({ query }: SearchProps) => {
  const searchParams = useSearchParams()
  const { replace } = useRouter()
  const pathname = usePathname()

  const handleSearch = (term: string) => {
    const params = new URLSearchParams(searchParams)

    if (term) {
      params.set(`${query}`, term)
    } else {
      params.delete(`${query}`)
    }
    try {
      replace(`${pathname}?${params.toString()}`)
    } catch (error) {
      console.error('Failed to replace URL parameters:', error)
    }
  }

  return (
    <div className='w-full flex max-sm:flex-col  items-center justify-between text-center gap-4 px-4  '>
      <h1 className='text-2xl  font-semibold '>Extensions List</h1>
      <div className='flex items-center space-x-4 '>
        <Button
          onClick={() => handleSearch('All')}
          className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '
          aria-label='All'
        >
          All
        </Button>
        <Button
          onClick={() => handleSearch('Active')}
          className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '
          aria-label='Active'
        >
          Active
        </Button>
        <Button
          onClick={() => handleSearch('Inactive')}
          className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '
          aria-label='Inactive'
        >
          Inactive
        </Button>
      </div>
    </div>
  )
}
export default HeroSection
