import List2 from './List2'
import useFetch from './useFetch';

const JsonBlogs = () => {
    const { data, isPending, error } = useFetch('http://localhost:8000/jsons');

    return (  
        <div className="JsonBlogs">
            {error && <div>{error}</div>}
            {isPending &&<div>Loading...</div>}
            {data && <List2 blogs={data} title1="All Json Data!" />}
        </div>
    );
}
 
export default JsonBlogs;