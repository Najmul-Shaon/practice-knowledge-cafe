import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleAddToBookmark, handleReadTime }) => {
  const { title, cover, reading_time, hashtag, author, author_img, post_date } =
    blog;

//   console.log(hashtag);
  return (
    <div className="mb-20 space-y-4">
      <img className="w-full mb-8" src={cover} alt="" />
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-6">
          <img className="rounded-full w-14" src={author_img} alt="" />
          <div className="">
            <h3 className="text-2xl">{author}</h3>
            <p>{post_date}</p>
          </div>
        </div>
        <div className="flex items-center">
          <span>{reading_time} min read</span>
          <button
            onClick={() => handleAddToBookmark(blog)}
            className="ml-2 text-red-600 text-2xl"
          >
            <CiBookmark></CiBookmark>
          </button>
        </div>
      </div>
      <h2 className="text-4xl">{title}</h2>
      <p>
        {hashtag.map((hash, i) => (
          <span key={i}>
            <a href="">{hash}</a>
          </span>
        ))}
      </p>
      <button className="text-purple-800 font-bold underline" onClick={() => handleReadTime(reading_time)}>Mark As Read</button>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleAddToBookmark: PropTypes.func,
  handleReadTime: PropTypes.func,
};
export default Blog;
