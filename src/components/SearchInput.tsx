'use client'

interface Props {
  value: string
  onChange: (value: string) => void
}

export default function SearchInput({ value, onChange }: Props) {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder='Поиск страны...'
      className='w-full border rounded-lg px-4 py-2 text-sm outline-none focus:ring-2 focus:ring-blue-400 my-4'
    />
  )
}
