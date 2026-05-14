
const Notification = () => {
  return (
    <div className='h-12 bg-red-500 text-white px-4 flex items-center justify-center text-center text-sm md:text-base cursor-pointer transition-all hover:bg-red-600 font-medium'>
      {/* Dynamic text that adjusts size based on screen width */}
      Free delivery for all orders over $50. Order your food now!
    </div>
  )
}

export default Notification