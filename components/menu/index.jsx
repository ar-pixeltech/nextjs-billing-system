import { ItemCard } from "./itemCard";

const mockMenu = [
    {
        categoryName: 'Hot Beverage', items: [
            { id: 1, name: 'Eupresso', price: 70 },
            { id: 2, name: 'American Black Coffee', price: 80 }
        ]
    },
    {
        categoryName: 'Hot Beverage', items: [
            { id: 1, name: 'Indian Hot Coffee', price: 30 },
            { id: 2, name: 'Cappuccino + Late', price: 70 },
            { id: 2, name: 'Cafe Mocha', price: 80 }
        ]
    },
    {
        categoryName: 'Hot Choco', items: [
            { id: 1, name: 'Hot Chocolate', price: 80 },
            { id: 2, name: 'Hot Nuttela', price: 100 },
            { id: 2, name: 'Chocolate Hot', price: 90 }
        ]
    },

]

export function Menu() {
    return (
        <>

            {mockMenu.map((cat, key) =>
                <div className="menu-section mb-14" key={key}>
                    <h2 className="mb-5 text-2xl font-bold">{cat.categoryName}</h2>
                    <div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                        {cat.items.length ?
                            cat.items.map((item, ind) => (
                                <ItemCard item={item} key={item.id + ind} />
                            ))
                            :
                            <div>No items</div>
                        }
                    </div>
                </div>
            )}

        </>
    )
}