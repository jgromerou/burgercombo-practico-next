import Heading from '@/components/ui/Heading'
import Link from 'next/link'

const NotFound = ({ nameObject }: any) => {
  return (
    <div className='text-center mt-10'>
      <Heading>{nameObject} no encontrado/a</Heading>
      <p className='mb-10'>Lo sentimos, no pudimos encontrar el/la {nameObject} que estás buscando.</p>
      <Link href={`/admin/${nameObject}`} className='btn-secondary px-20 mt-10 text-xl w-full lg:w-auto'>Volver</Link>
    </div>
  )
}

export default NotFound