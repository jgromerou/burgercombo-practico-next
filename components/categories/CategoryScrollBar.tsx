'use client';

interface Category {
  _id: string;
  name: string;
  selectionType: string;
}

interface CategoryScrollBarProps {
  categories: Category[];
  selectedCategoryName: string;
  onSelectCategory: (categoryName: string) => void;
}

const CategoryScrollBar = ({categories, selectedCategoryName, onSelectCategory}: CategoryScrollBarProps) => {
  return (
    <div className="w-full overflow-x-auto whitespace-nowrap py-1 px-4 bg-gray-100 rounded-md shadow-inner mb-3">
      {categories.map((cat, index) => (
        <button
          key={cat._id}
          onClick={() => onSelectCategory(cat.name)}
          className={`inline-block px-4 py-2 mx-1 rounded-full text-sm font-medium whitespace-nowrap
            ${cat.name === selectedCategoryName ? 'bg-blue-600 text-white' : 'bg-white text-gray-700 border'}
            transition duration-200 hover:bg-blue-500 hover:text-white`}
        >
          {cat.name}
        </button>
      ))}
    </div>
  );
};

export default CategoryScrollBar;