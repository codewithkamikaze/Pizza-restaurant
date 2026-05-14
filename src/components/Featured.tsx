import { featuredProducts } from "@/data";
import Image from "next/image";

const Featured = () => {
  return (
    <div className="w-screen overflow-x-auto no-scrollbar bg-slate-50 py-10">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[70vh] flex flex-col items-center justify-around p-6 hover:bg-fuchsia-50 transition-all duration-500 md:w-[50vw] xl:w-[33vw] xl:h-[80vh] border-r border-fuchsia-100 last:border-none"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full group cursor-pointer">
                <div className="relative h-full w-full transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                  <Image 
                    src={item.img} 
                    alt={item.title} 
                    fill 
                    className="object-contain drop-shadow-2xl" 
                  />
                </div>
              </div>
            )}
            
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col items-center justify-center text-center gap-6 mt-4">
              <h1 className="text-2xl font-extrabold uppercase tracking-tight text-gray-800 xl:text-3xl">
                {item.title}
              </h1>
              
              <p className="px-4 text-gray-600 leading-relaxed max-w-md line-clamp-3">
                {item.desc}
              </p>
              
              <div className="flex flex-col items-center gap-4">
                <span className="text-2xl font-black text-gray-900">
                  ${item.price}
                </span>
                
                <button className="bg-red-500 text-white px-8 py-3 rounded-full font-semibold shadow-lg shadow-red-200 hover:bg-red-600 hover:shadow-red-300 active:scale-95 transition-all duration-200">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;