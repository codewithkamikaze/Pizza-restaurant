import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main className="overflow-hidden">
      {/* Hero Section: Auto-playing slider with promotional content */}
      <Slider/>
      
      {/* Highlights Section: Showcasing top-selling or featured products */}
      <Featured/>
      
      {/* Promotional Section: Limited time offers with countdown timer */}
      <Offer/>
    </main>
  )
}