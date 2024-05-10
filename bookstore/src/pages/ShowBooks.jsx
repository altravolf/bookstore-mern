/* eslint-disable no-console */
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Spinner from "../components/Spinner/Spinner";
import BackButton from "../components/BackButton/BackButton";


function ShowBooks() {

    const { id } = useParams();
    const [book, setBook] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:3006/books/" + id)
            .then(res => {
                setBook(res.data.book);
                console.log(book);
                setIsLoading(false);
            })
            .catch(err => {
                console.log(err.message);
            })
    }, []);


    return (
        <div className="ShowBooks p-4">
            <BackButton />
            <h1 className="text-3xl font-bold my-8">Show Book</h1>

            {isLoading ?
                (<Spinner />) :
                (
                    <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4 ">
                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">ID</span>
                            <span className="">{book._id}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Title</span>
                            <span className="text-">{book.title}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Author</span>
                            <span className="text-">{book.author}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Publish Year</span>
                            <span className="text-">{book.publishYear}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Create Time</span>
                            <span className="text-">{new Date(book.createdAt).toString()}</span>
                        </div>

                        <div className="my-4">
                            <span className="text-xl mr-4 text-gray-500">Last Update Time</span>
                            <span className="text-">{new Date(book.updatedAt).toString()}</span>
                        </div>
                    </div>
                )}
        </div>
    );
}

export default ShowBooks;