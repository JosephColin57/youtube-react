export default function Categories() {

    const categories = ["All", "Music", "Gaming", "Code", "Programming", "Life Style", "Sports"]

    return (
        <div className="flex flex-row gap-4">
            {/* <span className="category">Cat 1</span> */}
            {categories.map((category) => {
                return <span key={`category-${category}`} className="py-2 px-4 rounded-[20px] bg-black">
                    {category}</span>
            })}
        </div>
    );
 }