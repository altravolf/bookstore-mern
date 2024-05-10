import './CardBook.scss';
import { AiOutlineEdit } from "react-icons/ai"
import { BsInfoCircle } from 'react-icons/bs'
import { MdOutlineDelete } from "react-icons/md"
import { BiUserCircle } from "react-icons/bi"
import { PiBookOpenTextDuotone } from 'react-icons/pi'
import { Link } from "react-router-dom";



function CardBook({ books }) {
    return (
        <div className="CardBook">
            <div className=" flex gap-[3%] flex-wrap ">

                {books.map((book, idx) => (
                    <div className="border-2 border-slate-800 rounded p-4 hover:shadow-md  relative w-[30%] mb-[3%] " key={idx}>

                        <div className="flex justify-between  flex-col gap-3">
                            <div className="flex flex-col gap-1">
                                <div className="text-xl font-bold flex items-center gap-2"> <PiBookOpenTextDuotone /> {book.title}</div>
                                <div className=" font-bold flex items-center gap-2"> < BiUserCircle className="text-xl font-thin" /> {book.author}</div>
                            </div>
                            <div className="flex gap-3  justify-evenly w-full">
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

                            <div className="absolute  top-5 right-1">
                                <div className="bg-pink-800 text-white px-4 py-1 rounded-lg">{book.publishYear}</div>
                            </div>
                        </div>
                    </div>

                ))}


            </div>


        </div>
    );
}

export default CardBook;
