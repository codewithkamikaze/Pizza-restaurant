
const OrdersPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] overflow-y-auto">
      
      {/* ORDERS TABLE - Using border-separate for a clean, spaced layout */}
      <table className="w-full border-separate border-spacing-3">
        <thead>
          <tr className="text-left text-red-500">
            <th className="hidden md:table-cell">Order ID</th>
            <th>Date</th>
            <th>Price</th>
            <th className="hidden md:table-cell">Products</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          
          {/* ACTIVE ORDER - Highlighted with a light red background */}
          <tr className="text-sm md:text-base bg-red-50 font-medium">
            <td className="hidden md:table-cell py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">19.07.2023</td>
            <td className="py-6 px-1">$89.90</td>
            <td className="hidden md:table-cell py-6 px-1">
              Big Burger Menu (2), Veggie Pizza (2), Coca Cola 1L (2)
            </td>
            <td className="py-6 px-1 text-red-600 animate-pulse">
              On the way (approx. 10min)...
            </td>
          </tr>

          {/* COMPLETED ORDERS - Using odd:bg-gray-100 for better row distinction */}
          <tr className="text-sm md:text-base odd:bg-gray-50">
            <td className="hidden md:table-cell py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">18.07.2023</td>
            <td className="py-6 px-1">$45.50</td>
            <td className="hidden md:table-cell py-6 px-1">
              Cheeseburger (1), French Fries (1)
            </td>
            <td className="py-6 px-1 text-green-600">Delivered</td>
          </tr>

          <tr className="text-sm md:text-base odd:bg-gray-50">
            <td className="hidden md:table-cell py-6 px-1">1237861238721</td>
            <td className="py-6 px-1">17.07.2023</td>
            <td className="py-6 px-1">$120.00</td>
            <td className="hidden md:table-cell py-6 px-1">
              Family Pizza Party Pack (1)
            </td>
            <td className="py-6 px-1 text-green-600">Delivered</td>
          </tr>
          
        </tbody>
      </table>
    </div>
  );
};

export default OrdersPage;