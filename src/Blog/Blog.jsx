import PropTypes from 'prop-types';
import { FaBookmark } from 'react-icons/fa';

const Blog = ({ blog, handleAddToBookMark, handleMarkAsRead }) => {
    const { id, title, cover, author, author_img, posted_date, reading_time, hashtags } = blog;

    return (
        <div className='mb-20 space-y-3'>
            <img className='w-full mb-8' src={cover} alt="" />
            <div className='flex justify-between  space-y-3'>
                <div className='flex'>
                    <img className='w-14 h-14' src={author_img} alt="" />
                    <div className='ml-6'>
                        <h2 className="text-xl">{author}</h2>
                        <p className='text-xs'>{posted_date}</p>

                    </div>
                </div>

                <div>
                    <span>{reading_time} min read </span>
                    <button
                        onClick={() => handleAddToBookMark(blog)}
                        className='ml-2 text-red-600'><FaBookmark></FaBookmark>
                    </button>
                </div>
            </div>
            <h2 className="text-3xl">{title}</h2>

            <p>
                {
                    hashtags.map((hash, idx) => <span key={idx}><a href=""> {hash}</a></span>)
                }
            </p>
            <button
                onClick={() => handleMarkAsRead(reading_time, id)}
                className='text-purple-600 font-bold underline'>Mark As Read
            </button>

        </div>
    );
};



Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handleAddToBookMark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
};
export default Blog;