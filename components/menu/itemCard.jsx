import { formattedPrice } from "@/utils";

export function ItemCard({item}) {
    return (
      <div className="max-w-5xl md:space-x-6">
        <div className="justify-between rounded-lg bg-white p-6 shadow-md sm:flex sm:justify-start">
          <div className="sm:ml-4 sm:flex sm:w-full sm:justify-between">
            <div className="mt-5 sm:mt-0">
              <h2 className="text-lg font-bold text-gray-900">{item.name}</h2>
              {/* <p className="mt-1 text-xs text-gray-700">36EU - 4US</p> */}
            </div>
            <div className="mt-4 flex justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
              <div className="flex items-center border-gray-100">
                <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"> - </span>
                <input className="h-8 w-8 border bg-white text-center text-xs outline-none" type="number" value="2" min="1" />
                <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"> + </span>
              </div>
              <div className="float-right">
                <p className="text-sm">{formattedPrice(item.price)}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }