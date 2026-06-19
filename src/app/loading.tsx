export default function Loading() {
  const skeletonCards = Array.from({ length: 9 })
  return (
    <main className='container mx-auto p-6'>
      <div className='h-9 w-64 bg-gray-200 rounded animate-pulse mb-6' />
      <ul className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
        {skeletonCards.map((_, index) => (
          <li
            key={index}
            className='border rounded-lg p-4 shadow-sm bg-white'
          >
            <div className='flex items-center gap-3 mb-2'>
              <div className='w-8 h-6 bg-gray-200 rounded animate-pulse' />
              <div className='h-6 flex-1 bg-gray-200 rounded animate-pulse' />
            </div>
            <div className='h-4 w-2/3 bg-gray-200 rounded animate-pulse' />
          </li>
        ))}
      </ul>
    </main>
  )
}
