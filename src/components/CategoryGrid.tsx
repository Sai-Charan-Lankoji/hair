import { categories } from '../data/categories';

const CategoryGrid = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="text-center">
            <div className="w-36 h-36 rounded-full overflow-hidden mb-4 mx-auto">
              <img src={category.image} alt={category.title} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-sm font-medium">{category.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryGrid;