import { useState } from "react";
import List1 from "./List1";

const List = () => {
    const [blog1, setBlog1] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'Mario', id: 1},
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'Yoshi', id: 2},
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'Mario', id: 3}
    ])
    const [blog2, setBlog2] = useState([
        { title: 'My new website2', body: 'lorem ipsum...', author: 'Mario', id: 1},
        { title: 'Welcome party2!', body: 'lorem ipsum...', author: 'Yoshi', id: 2},
        { title: 'Web dev top tips2', body: 'lorem ipsum...', author: 'Mario', id: 3}
    ])

    return ( 
        <div className="list">
            <List1 blogs={blog2.filter((y) => y.author === "Mario")} title1="Second Blogs!"/>
            <List1 blogs={blog1} title1="First Blogs!"/>
        </div>
    );
}
 

export default List;