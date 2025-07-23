
import { formatCurrency, formattedDate } from "@/utils";

interface ComponentProps {
  order: Order;
}

const OrderCard = ({order}: ComponentProps) => {
  
  return (
        <section
            className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6  lg:mt-0 lg:p-8 space-y-4"
        >
            {/* Fecha de la Orden */}
            <p className="text-sm text-gray-600">Fecha: {formattedDate(order.createdAt)}</p>
            {/* Nombre del Cliente */}
            <p className='text-2xl font-medium text-gray-900'>Cliente: {order.customerName}</p>
            {/* Lista de Productos ó detalles de la orden */}
            <p className='text-lg font-medium text-gray-900'>Productos Solicitados:</p>
            <dl className="mt-6 space-y-4">
                {order.order.map((category) =>
                    category.selectedProducts.map((product) => (
                        <div key={product._id} className="flex items-center gap-2 border-b border-gray-400 pt-4">
                        <dt className="flex items-center text-sm text-gray-600">
                            <span className="font-black">({product.name}) {''}</span>
                        </dt>
                        <dd className="text-sm font-medium text-gray-900">{formatCurrency(product.price)} - {product.calories} cal</dd>
                        </div>
                    ))
                )}
                {/* Precio Total */}
                <div className="flex items-center justify-between border-b border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total a Pagar:</dt>
                    <dd className="text-base font-medium text-gray-900">{formatCurrency(order.subtotal)}</dd>
                </div>
                {/* Total Calorias */}
                 <div className="flex items-center justify-between border-b border-gray-200 pt-4">
                    <dt className="text-base font-medium text-gray-900">Total de Calorías:</dt>
                    <dd className="text-base font-medium text-gray-900">{order.totalCalories} cal</dd>
                </div>
            </dl>
        </section>
    )
}

export default OrderCard