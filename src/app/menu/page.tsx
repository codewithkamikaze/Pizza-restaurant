import { menu } from "@/data";
import Link from "next/link";

const MenuPage = () => {
  return (
    <div className="p-4 lg:px-20 xl:px-40 h-[calc(100vh-6rem)] md:h-[calc(100vh-9rem)] flex flex-col md:flex-row items-center justify-center">
      {menu.map((category) => (
        <Link
          href={`/menu/${category.slug}`}
          key={category.id}
          className="w-full h-1/3 bg-cover p-8 md:h-2/3 lg:h-1/2 transition-all duration-300 hover:scale-105 active:scale-95"
          style={{ backgroundImage: `url(${category.img})` }}
        >
          {/* CONTENT CONTAINER - Styled based on the category's theme color */}
          <div className={`text-${category.color} w-1/2 flex flex-col gap-4`}>
            <h1 className="uppercase font-bold text-3xl leading-tight">
              {category.title}
            </h1>
            <p className="text-sm font-medium opacity-90">
              {category.desc}
            </p>
            
            {/* EXPLORE BUTTON - Dynamic colors based on the text color for better contrast */}
            <button 
              className={`hidden 2xl:block py-2 px-4 rounded-md font-bold transition-transform hover:translate-x-2`}
              style={{
                backgroundColor: category.color,
                color: category.color === "black" ? "white" : "red"
              }}
            >
              Explore
            </button>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default MenuPage;