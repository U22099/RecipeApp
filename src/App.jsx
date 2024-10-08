import Food from './Components/Food';
import {useState, useEffect} from 'react';
import {AiOutlineLoading} from 'react-icons/ai';
import {FaChevronUp, FaChevronDown} from 'react-icons/fa6';
import {fetchData, fetchIngredients, fetchCategories, fetchCategory, fetchAreas, fetchArea} from './utils/fetch';

function App (){
    const [food, setFood] = useState([]);
    const [ingredients, setIngredients] = useState([]);
    const [categories, setCategories] = useState([]);
    const [areas, setAreas] = useState([]);
    const [showCategory, setShowCategory] = useState(true);
    const [showArea, setShowArea] = useState(true);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);
    const [input, setInput] = useState();
    useEffect(() => {
        fetchAreas(setAreas, setLoading);
        fetchCategories(setCategories, setLoading);
        fetchIngredients(setIngredients, setLoading);
    }, [])
    return(
        <div className="flex flex-col w-[95vw] justify-center gap-3">
            <div className="bg-white p-[20px] flex justify-center items-center flex-col md:mx-auto gap-3">
                <h1 className="text-black text-[2em] md:text-[2.5em] text-bold font-serif">Recipe Generator</h1>
                <div className="flex flex-col md:flex-row justify-center gap-[20px] bg-white p-[20px] rounded-xl">
                    <input id="input" className=" bg-white focus:outline-none border-gray-800 border-[4px] rounded-[20px] p-[10px] text-[1.2em] md:text-[1.5em] w-[80vw] md:w-auto text-black font-serif" type="text" placeholder="Input any ingredient" onChange={(e) => setInput(e.target.value)}/>
                    <button className="bg-black text-white shadow-[1px_2px_3px_3px_rgba(0,0,0,0.5)] p-5 py-3 md:p-12 md:py-5 rounded-2xl text-black text-[1.5em] active:shadow-none md:max-w-3/4 mx-auto" onClick={async ()=> {
                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                        await fetchData(input, setFood, setError, setLoading)
                    }}>Find Food</button>
                </div>
                <div className="bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw] flex justify-start md:px-8 transition-all">
                        {ingredients.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        console.log(x)
                                        document.getElementById("input").value = x;
                                        document.querySelectorAll(".list")?.forEach(li => {li.classList.remove("bg-black"); li.classList.remove("text-white"); li.classList.add("bg-gray-100")} );
                                        e.target.classList.remove("bg-gray-100");
                                        e.target.classList.add("bg-black");
                                        e.target.classList.add("text-white");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchData(x, setFood, setError, setLoading);
                                    }} 
                                    className={(i > 10 ? "hidden md:flex ": "") +"cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list"}>{x}
                                </div>
                            )
                        )}
                </div>
                {!showCategory ? <span className="text-black text-[1.5em] md:text-[2em] font-serif w-[100%] ml-2 md:ml-4 cursor-pointer" onClick={()=> setShowCategory(true)}>Categories <FaChevronUp className="inline ml-2"/></span> : 
                <span className="text-black text-[1.5em] md:text-[2em] font-serif w-[100%] ml-2 md:ml-4 cursor-pointer" onClick={()=> setShowCategory(false)}>Categories <FaChevronDown className="inline ml-2"/></span>}
                <div className={(showCategory ? "": "hidden ") +"bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw] flex justify-start md:px-8 transition-all"}>
                        {categories.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        document.querySelectorAll(".list")?.forEach(li => {li.classList.remove("bg-black"); li.classList.remove("text-white"); li.classList.add("bg-gray-100")} );
                                        e.target.classList.remove("bg-gray-100");
                                        e.target.classList.add("bg-black");
                                        e.target.classList.add("text-white");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchCategory(x, setFood, setError, setLoading);
                                        setShowCategory(false);
                                    }} 
                                    className="cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list">{x}
                                </div>
                            )
                        )}
                </div>
                {!showArea ? <span className="text-black text-[1.5em] md:text-[2em] font-serif w-[100%] ml-2 md:ml-4 cursor-pointer" onClick={()=> setShowArea(true)}>Areas <FaChevronUp className="inline ml-2"/></span> : 
                <span className="text-black text-[1.5em] md:text-[2em] font-serif w-[100%] ml-2 md:ml-4 cursor-pointer" onClick={()=> setShowArea(false)}>Areas <FaChevronDown className="inline ml-2"/></span>}
                <div className={(showArea ? "": "hidden ") +"bg-white md:mx-auto px-2 gap-2 flex flex-wrap w-[95vw] flex justify-start md:px-8 transition-all"}>
                        {areas.map((x, i)=> (
                                <div 
                                    onClick={async (e) => {
                                        document.querySelectorAll(".list")?.forEach(li => {li.classList.remove("bg-black"); li.classList.remove("text-white"); li.classList.add("bg-gray-100")} );
                                        e.target.classList.remove("bg-gray-100");
                                        e.target.classList.add("bg-black");
                                        e.target.classList.add("text-white");
                                        document.getElementById("recipe").scrollIntoView({behavior: "smooth"});
                                        await fetchArea(x, setFood, setError, setLoading);
                                        setShowAreas(false);
                                    }} 
                                    className="cursor-pointer bg-gray-100 rounded-full p-2 w-fit h-fit list">{x}
                                </div>
                            )
                        )}
                </div>
            </div>
            {loading&&<AiOutlineLoading className="flex mx-auto p-1 bg-gray-100 fill-black text-[3em] md:text-[5em] roll rounded-full"/>}
            {error&&<p className="text-red-600 font-mono text-bold mx-auto">Recipe Not Found </p>}
            <div id="recipe" className="mt-5 md:mt-8 bg-white mx-auto w-[90vw] rounded-[20px] gap-[20px] grid-cols-1 grid md:grid-cols-3">
                {food.map((f,i)=> <Food img={f.strMealThumb} id={f.idMeal} key={i} name={f.strMeal}/>)}
            </div>
        </div>
    )
}
export default App
