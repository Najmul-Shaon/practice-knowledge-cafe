import PropTypes from "prop-types";
import Bookmark from "../Bookmark/Bookmark";
const Bookmarks = ({ bookmarks, readingTime }) => {
  console.log(readingTime);
  return (
    <div className="md:w-1/3 bg-gray-400 ">
      <div>
        <h3>Reading time: {readingTime}</h3>
      </div>
      <h3 className="text-3xl text-center">Bookmarks:{bookmarks.length}</h3>
      {bookmarks.map((bookmark) => (
        <Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>
      ))}
    </div>
  );
};
Bookmarks.propTypes = {
  bookmarks: PropTypes.array,
  readingTime: PropTypes.number,
};
export default Bookmarks;
