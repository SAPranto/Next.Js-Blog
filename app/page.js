import Image from 'next/image'
import HeroSection from './sections/HeroSection'
import CategorySection from './sections/CategorySection'
import Highlights from './sections/Highlights'
import FeaturedSection from './sections/FeaturedSection'

export default function Home() {
  return (
    <>
    <HeroSection/>
    <CategorySection/>
    <Highlights/>
    <FeaturedSection/>
    </>
  )
}
