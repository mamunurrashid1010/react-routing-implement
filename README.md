# react-routing-implement

In this project here i implement react routing and show that step by step how to implement routing in a react project.

## Implementation Process

##### 1. Create a new react app
```
npx create-react-app react-routing-implement
cd react-routing-implement
npm start
```

##### 2. React router dom installation
Run this command in terminal
```
npm install react-router-dom --save
```

##### 3. Now crete directory and component

3.1 Create pages directory in the src directory and then create component  <br>
a. src/pages/Home.js <br>
b. src/pages/Blog.js <br>
c. src/pages/BlogDetails.js <br>
d. src/pages/Service.js <br>
e. src/pages/ServiceDetails.js <br>
f. src/pages/Contact.js <br>
g. src/pages/Error.js <br>

3.2 Create navbar directory in the src directory and then create component  <br>
a. src/navbar/Navbar.js <br>

##### 4. Go to pages directory and open ``` home.js ``` and write code like-
``` 
import React from 'react';

const Home = () => {
    return (
        <div>
            <h1>Home Page</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
        </div>
    );
};
export default Home;
```

``` Blog.js ``` component-
``` 
import React from 'react';
import {Link, useNavigate} from "react-router-dom";

const Blog = () => {
    const navigate = useNavigate();
    return (
        <div>
            <h1>Blog Page</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <Link to="5" style={{color:'blue'}}>Details</Link><br/>
            <button onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};
export default Blog;
```

``` BlogDetails.js ``` component-
``` 
import React from 'react';
import {useNavigate, useParams} from "react-router-dom";

const BlogDetails = () => {
    const {blogId} = useParams();
    const navigate = useNavigate();
    return (
        <div>
            <h1>Blog Title (#BlogID {blogId})</h1>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
                remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
                and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </p>
            <button onClick={()=>navigate('/')}>Back to home</button>
        </div>
    );
};

export default BlogDetails;
```

Contact.js, Service.js, ServiceDetails.js and Error.js component i also implement.

##### 5. Now open ``` Navbar.js ``` and write code like-
``` 
import React from 'react';
import {Link, NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/" className="nav-link">HOME </NavLink>
            <NavLink to="/blog" className="nav-link">BLOG </NavLink>
            <NavLink to="/service" className="nav-link">SERVICE </NavLink>
            <NavLink to="/contact" className="nav-link">CONTACT </NavLink>
        </nav>
    );
};
export default Navbar;
```

##### 6. Now open ``` App.js ``` and write code like-
``` 
import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Navbar from "./navbar/Navbar";
import ServiceDetails from "./pages/ServiceDetails";
import BlogDetails from "./pages/BlogDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Navbar/>
          <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/blog" element={<Blog/>} />
              <Route path="/blog/:blogId" element={<BlogDetails/>} />
              <Route path="/service" element={<Service/>} />
              <Route path="/service/:title" element={<ServiceDetails/>} />
              <Route path="/contact" element={<Contact/>} />
              <Route path="*" element={<Error/>} />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
```

then open terminal and run ``` npm start ``` command to run project.

Completed.
