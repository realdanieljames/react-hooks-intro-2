import React, { useState, useEffect, useRef } from 'react';



const FetchTodosById = () => {

    const [searchTodoById, setSearchTodoById] = useState("")
    const [isSearching, setIsSearching] = useState(false)
    const [showTodo, setShowTodo] = useState(null)


async function fetchingTodoById(){
    try{
        let response = await fetch(`http://jsonplaceholder.typicode.com/todos/${searchTodoById}`);
        let results = await response.json()

        setShowTodo(results)
        setSearchTodoById("")
        setIsSearching(false)

    }catch(e){
        console.log(e.message)
        setIsSearching(false)
    }
}

useEffect(()=>{
    if(!searchTodoById){
        return;
    }
    fetchingTodoById();
}, [isSearching]);




function handleSearchTodoSubmit(e){
    e.preventDefault();
    if(!searchTodoById){
        return;
    }
    setIsSearching(true)

}




return (
        <div>
           <form onSubmit={handleSearchTodoSubmit}>
            <input
            type="text"
            value={searchTodoById}
            onChange={(e)=> setSearchTodoById(e.target.value)}
            />
            <button>Search Todo</button>
            {isSearching ? <p>...Fetching</p> : <p>{showTodo?.title}</p>}
        </form>
        </div>
    )
}

export default FetchTodosById;