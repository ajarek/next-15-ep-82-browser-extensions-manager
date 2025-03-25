import HeroSection from '@/components/HeroSection'
import data from '@/data/data.json'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import ToggleSwitch from '@/components/ToggleSwitch'

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ action: string }>
}) {
  const { action } = await searchParams
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-start items-center px-8 py-4 gap-4'>
      <HeroSection query={'action'} />
      <div className='grid grid-cols-3 max-sm:grid-cols-1 gap-4'>
        {data
          .filter(
            (item) =>
              (action === 'Active' && item.isActive === true) ||
              action === 'All' ||
              (action === 'Inactive' && item.isActive === false) ||
              !action
          )
          .filter(
            (item) =>
              (action === 'Inactive' && item.isActive === false) ||
              action === 'All' ||
              (action === 'Active' && item.isActive === true) ||
              !action
          )
          .map((item) => (
            <Card key={item.id}>
              <CardHeader className='flex flex-row items-center gap-4'>
                <Image
                  src={item.logo}
                  alt={item.name}
                  width={60}
                  height={60}
                />
                <div className='flex flex-col gap-2'>
                  <CardTitle>{item.name}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </div>
              </CardHeader>
              <CardContent></CardContent>
              <CardFooter className='flex flex-row items-center justify-between gap-4'>
                <Button
                  variant={'outline'}
                  className='border border-primary rounded-2xl'
                  aria-label='Remove extension'
                >
                  Remove
                </Button>
                <ToggleSwitch isToggled={item.isActive} />
              </CardFooter>
            </Card>
          ))}
      </div>
    </div>
  )
}
