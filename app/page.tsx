import HeroSection from '@/components/HeroSection'

export default async function Home({searchParams}: {  searchParams: Promise<{action: string}>}) {
  const { action } = await searchParams
  return (
    <div className='min-h-[calc(100vh-64px)] flex flex-col justify-start items-center px-8 py-4'>
      <HeroSection query={'action'} />
      <div>{action}</div>
    </div>
  )
}
