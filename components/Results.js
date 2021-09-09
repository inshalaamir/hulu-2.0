import Thumbnail from "./Thumbnail"


function Results({results}) {
    return (
        <div className="px-5 my-10 
        sm:grid sm:grid-cols-1 
        md:grid-cols-2 
        xl:grid-cols-3
        3xl:grid-cols-4">
            {results.map((result)=> (
                <Thumbnail key={result.id} result={result}/>
            ))}
        </div>
    )
}

export default Results
