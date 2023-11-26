import Image from 'next/image'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import Highlights from './sections/Highlights'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CategorySection/>
    <Highlights/>
    </>
  )
}
