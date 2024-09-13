import PropTypes from 'prop-types';
import BookMark from '../BookMark/BookMark';

const BookMarks = ({ bookMarks, readingTime }) => {
    return (

        <div className='md:w-1/3'>
            <h1 className='text-3xl text-center'>Spent time on read : {readingTime}</h1>
            <div className=" bg-gray-400 my-4 py-4 rounded-lg">
                <h1 className="text-2xl text-center">Bookmarked Blogs : {bookMarks.length}</h1>

                {
                    bookMarks.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
                }
            </div>
        </div>
    );
};

BookMarks.propTypes = {
    bookMarks: PropTypes.array,
    readingTime: PropTypes.number
};
export default BookMarks;