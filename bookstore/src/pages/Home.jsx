import axios from 'axios';
import Spinner from "../components/Spinner/Spinner";
import { Link } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md"
import CardBook from "../components/CardBook/CardBook";

import { useState, useEffect } from 'react';
import TableBook from "../components/TableBook/TableBook";

function Home() {

    const [books, setBooks] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const [table, isTable] = useState(true);

    useEffect(() => {
        setIsLoading(true);
        axios.get("http://localhost:3006/books")
            .then(res => {
                setBooks(res.data.books);
                setIsLoading(false);
                // eslint-disable-next-line no-console
            }).catch(err => console.log(err.message));


    }, []);

    return (
        <div className="Home p-4">

            <div className="flex justify-center gap-5">
                <button className={`bg-sky-800 text-white px-4 py-1 rounded-lg hover:bg-sky-900 ${table ? " bg-sky-900" : "bg-sky-800"} `} onClick={() => isTable(true)}>
                    Table
                </button>
                <button className={`bg-sky-800 text-white px-4 py-1 rounded-lg hover:bg-sky-900 ${table ? " bg-sky-800" : "bg-sky-900"}  `} onClick={() => isTable(false)}>
                    Cards
                </button>
            </div>

            <div className=" flex justify-between items-center ">
                <h1 className="text-3xl font-bold my-8">Books</h1>
                <Link to={"/books/create"}>
                    <MdOutlineAddBox className="text-4xl text-sky-800" />
                </Link>
            </div>

            {isLoading ? <Spinner /> : table ? <TableBook books={books} /> : <CardBook books={books} />

            }

        </div>
    );
}

export default Home;