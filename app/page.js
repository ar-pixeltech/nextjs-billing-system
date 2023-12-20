import { Menu } from "@/components/menu"
import { CURRENCY, formattedPrice } from "@/utils"

function CartItem({item}) {
  return (
    <div className="article">
      <div className="mb-0 flex justify-between font-bold">
        <p className="text-black">{item.quantity} x {item.name}</p>
        <p className="text-gray-700"> {formattedPrice(item.quantity * item.price)}</p>
      </div>
      <div className="mb-2 flex">
        <small className="text-gray-500 pr-2">Edit</small>
        <small className="text-red-500">Remove</small>
      </div>
    </div>
  )
}

const items = [
  {name: 'Paste', price: 100, quantity: 1},
  {name: 'Coffee', price: 50, quantity: 1},
  {name: 'Tea', price: 10, quantity: 5},
]

export default function Home() {
  return (
    <div>
      <div class="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div class="col-span-2">
          <Menu />
        </div>
        <div>
          <div className=" mt-6 h-full rounded-lg border bg-white p-6 shadow-md md:mt-0">
            <CartItem item={items[0]} />
            <CartItem item={items[1]} />
            <CartItem item={items[2]} />

            <hr className="my-4" />

            <div className="mb-2 ml-3 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">{formattedPrice(200)}</p>
            </div>
            <div className="ml-3 flex justify-between">
              <p className="text-gray-700">Discount</p>
              <p className="text-gray-700">-</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">{formattedPrice(100)} {CURRENCY}</p>
                <p className="text-sm text-gray-700">including VAT</p>
              </div>
            </div>
            <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600">Place Order</button>
          </div>
        </div>
      </div>
    </div>
  )
}
