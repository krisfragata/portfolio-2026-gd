import React from "react";
import { Book, bookList } from "./reading_list";

const ReadingList: React.FC = () => {
    /**
     * @description renders reading list
     * @returns JSX component
     */
    const renderReadingList = () => {
        return bookList.map((book:Book, index) => {
            return (
                <div className="book-item" key={index}>
                    <p className="book-details"><span className="italics">{book.title}</span> - {book.author}</p>
                    <p className="book-rating">{book.personalRating}</p>
                </div>
            )
        })
    }

    return (
        <div className="reading-list-container">
            <div className="reading-list-links">
                <p>follow me on: <span><a className="link" href="https://app.thestorygraph.com/books-read/krocskourage" target="_blank">storygraph ⤴</a></span></p>
            </div>
            <div className="book-container">
                {renderReadingList()}
            </div>
        </div>
    )

}

export default ReadingList;