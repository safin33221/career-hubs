

const Category = ({category}) => {
    const{category_name,logo,availability} =category
    return (
        <div className="flex flex-col mx-auto bg-gradient-to-r from-cyan-100 to-blue-100 px-8 py-10 rounded-lg">
            <img className="w-[50px]" src={logo} alt="" />
            <h1 className="text-xl font-bold">{category_name}</h1>
            <p>{availability}</p>
        </div>  
    );
};

export default Category;