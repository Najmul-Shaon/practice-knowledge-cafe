import { useState } from "react";
import "./App.css";
import Blogs from "./Components/Blogs/Blogs";
import Bookmarks from "./Components/Bookmarks/Bookmarks";
import Header from "./Components/Header/Header";

function App() {
  const [bookmarks, setBookmarks] = useState([]);

  const [readingTime, SetReadingTime] = useState(0);
  const handleAddToBookmark = (blog) => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  const handleReadTime = (time, id) => {
    SetReadingTime(readingTime + time);
    // console.log(readingTime + time);
    const remaining = bookmarks.filter((bookmark) => bookmark.id !== id);
    setBookmarks(remaining);
  };
  return (
    <>
      <Header></Header>
      <div className="md:flex max-w-7xl mx-auto gap-8">
        <Blogs
          handleAddToBookmark={handleAddToBookmark}
          handleReadTime={handleReadTime}
        ></Blogs>
        <Bookmarks readingTime={readingTime} bookmarks={bookmarks}></Bookmarks>
      </div>
    </>
  );
}

export default App;
