import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch('http://localhost:8000/jsons/' + id);
    const history = useHistory();

    const handleClick = (() => {
        fetch('http://localhost:8000/jsons/' + id, {
            method:'DELETE'
        })
        .then(() => {
            history.push("/");
        })
    })

    return ( 
        <div className="blog-details">
            <h2>Blog number { id }</h2>
            {error && <div>{error}</div>}
            {isPending &&<div>Loading...</div>}
            {data && 
                <article>
                    <h3>{data.title}</h3>
                    <p>Written by {data.author}</p>
                    <div>{data.body}</div>
                    <button onClick={handleClick}>Delete</button>
                </article>
            }
        </div>
    );
}
 
export default BlogDetails;