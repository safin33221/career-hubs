import Category from "./Category";


const Categoris = ({ categories }) => {
    return (
        <div className=" ">
            <div className="text-center">
                <h1 className="text-4xl font-bold">Job Category List</h1>
                <p>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid grid-cols-4 my-10">
                {
                    categories.map(categoriy => <Category key={categoriy.id} category={categoriy}></Category>)
                }
            </div>
        </div>
    );
};

export default Categoris;