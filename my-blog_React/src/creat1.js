import { useState } from "react";

const creat = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setisPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};

        setisPending(true);

        fetch('http://localhost:8000/jsons',{
            method:"POST",
            headers:{"Content-Type" : "application/json"},
            body: JSON.stringify(blog)
        })
        .then(() => {
            console.log("New blog added");
        })

        setisPending(false);
    }

    return (  
        <div className="creat">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input 
                    type="text" 
                    required
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                />
                <label>Body:</label>
                <textarea
                    type="text"
                    required
                    onChange={(e) => setBody(e.target.value)}
                    value={body}
                ></textarea>
                <label>Author:</label>
                <select
                    onChange={(e) => setAuthor(e.target.value)}
                    value={author}
                >
                    <option value="Mario">Mario</option>
                    <option value="Yoshi">Yoshi</option>
                </select>

                {!isPending && <button>Add blog</button>}
                {isPending && <button disabled>Add blog...</button>}
            </form>
        </div>
    );
}
 
export default creat;