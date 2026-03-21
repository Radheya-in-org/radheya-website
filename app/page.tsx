import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import ServicesPreview from '@/components/home/ServicesPreview'
import Testimonials from '@/components/home/Testimonials'
import HomeCTA from '@/components/home/HomeCTA'
import ChariotWheel from '@/components/karna/ChariotWheel'

export default function Home() {
  return (
    <>
      <Hero />

      <div className="relative">
        <div className="flex justify-center py-4">
          <ChariotWheel size={40} opacity={0.05} />
        </div>
      </div>

      <FeaturedProducts />

      <div className="relative">
        <div className="flex justify-center py-4">
          <ChariotWheel size={40} opacity={0.05} />
        </div>
      </div>

      <ServicesPreview />

      <div className="relative">
        <div className="flex justify-center py-4">
          <ChariotWheel size={40} opacity={0.05} />
        </div>
      </div>

      <Testimonials />
      <HomeCTA />
    </>
  )
}
