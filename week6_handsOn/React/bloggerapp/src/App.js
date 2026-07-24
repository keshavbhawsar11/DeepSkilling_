import "./App.css";

import BookDetails from "./Components/BookDetails";
import BlogDetails from "./Components/BlogDetails";
import CourseDetails from "./Components/CourseDetails";

import {
  books,
  blogs,
  courses
} from "./data";

function App() {

  const showBooks = true;
  const showBlogs = true;
  const showCourses = true;

  return (

    <div className="container">

      {
        showCourses &&

        <div className="card">
          <CourseDetails courses={courses}/>
        </div>
      }

      {
        showBooks &&

        <div className="card">
          <BookDetails books={books}/>
        </div>
      }

      {
        showBlogs &&

        <div className="card">
          <BlogDetails blogs={blogs}/>
        </div>
      }

    </div>

  );

}

export default App;