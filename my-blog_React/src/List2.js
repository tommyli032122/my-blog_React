import { Link } from "react-router-dom";

const List2 = ({ blogs, title1 }) => {

    return ( 
       <div className="List-1">
            <h2>{title1}</h2>
            {blogs.map((x) => (
                <div className="blog-preview" key={x.id}>
                    <Link to={`/blogs/${ x.id }`}>
                        <h2>{x.title}</h2>
                        <p>Write by {x.author}</p>
                    </Link>
                </div>
            ))}
       </div>
    );
}
 
export default List2;