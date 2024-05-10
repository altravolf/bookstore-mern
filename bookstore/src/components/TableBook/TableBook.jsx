import './TableBook.scss';
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from "react-icons/md"
import { Link } from "react-router-dom";

function TableBook({ books }) {
    return (
        <div className="TableBook">
            <table className="w-full border-separate border-spacing-2">
                <thead>
                    <tr>
                        <th className="border border-slate-600 rounded-md ">No.</th>
                        <th className="border border-slate-600 rounded-md ">Title</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Author</th>
                        <th className="border border-slate-600 rounded-md max-md:hidden">Publish Year</th>
                        <th className="border border-slate-600 rounded-md ">Operations</th>
                    </tr>
                </thead>

                <tbody>

                    {books.map((book, index) => (
                        <tr key={index}>
                            <td className="border border-slate-700 rounded-md text-center">{index + 1}</td>
                            <td className="border border-slate-700 rounded-md text-center">{book.title}</td>
                            <td className="border border-slate-700 rounded-md max-md:hidden text-center">{book.author}</td>
                            <td className="border border-slate-700 rounded-md max-md:hidden text-center">{book.publishYear}</td>
                            <td className="border border-slate-700 rounded-md text-center">
                                <div className="flex justify-center gap-x-4 p-1">
                                    <Link to={`/books/details/${book._id}`}>
                                        <BsInfoCircle className="text-2xl text-green-800" />
                                    </Link>
                                    <Link to={`/books/update/${book._id}`}>
                                        <AiOutlineEdit className="text-2xl text-yellow-600" />
                                    </Link>
                                    <Link to={`/books/delete/${book._id}`}>
                                        <MdOutlineDelete className="text-2xl text-red-600" />
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>

            </table>
        </div>
    );
}

export default TableBook;
