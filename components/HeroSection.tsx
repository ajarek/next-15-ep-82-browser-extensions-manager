import { Button } from '@/components/ui/button'

const HeroSection = () => {
  return (
    <div className='w-full flex  items-center justify-between text-center  px-4  '>
      <h1 className='text-2xl  font-semibold '>Extensions List</h1>
      <div className='flex items-center space-x-4'>
        <Button className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '>All</Button>
        <Button className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '>Active</Button>
        <Button className='rounded-xl bg-slate-500 hover:bg-primary focus:bg-primary transition-all delay-200 ease-in-out '>Inactive</Button>
      </div>
    </div>
  )
}
export default HeroSection
