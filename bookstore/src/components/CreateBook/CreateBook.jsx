/* eslint-disable no-console */
import './CreateBook.scss';
import { useForm } from 'react-hook-form';
import axios from "axios";
import BackButton from "../BackButton/BackButton";
import Spinner from "../Spinner/Spinner";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useSnackbar } from "notistack";

function CreateBook() {


    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();



    const onBookSubmit = (data) => {

        setIsLoading(true);

        axios.post("http://localhost:3006/books", data)
            .then(() => {
                setIsLoading(false);
                enqueueSnackbar("Book created successfully", { variant: "success" });
                navigate("/");
            })
            .catch(err => {
                console.log(err.message);
                enqueueSnackbar(err.message, { variant: "error" });
                setIsLoading(false);
            });

        reset();
    };

    return (
        <>
            <BackButton />

            <h1 className="text-3xl font-bold my-8 text-center">Create Book</h1>
            <div className="CreateBook flex flex-col border-2 border-sky-400 rounded-xl p-4 m-8" >
                <form action="" onSubmit={handleSubmit(onBookSubmit)}>
                    <div className="flex justify-center my-4">
                        <label htmlFor="title" className="  font-medium text-gray-700"> Title</label>
                        <input type="text" name="title" id="title" {...register("title", { required: true })} className={`border border-slate-500  border-solid ps-1  ms-4 ${errors.title && "border-red-500 outline-red-600"}`} />
                    </div>

                    <div className="flex justify-center my-4">
                        <label htmlFor="author" className="  font-medium text-gray-700"> Author</label>
                        <input type="text" name="author" id="author" {...register("author", { required: true })} className={`border border-slate-500  border-solid ps-1  ms-4 ${errors.author && "border-red-500 outline-red-600"}`} />
                    </div>

                    <div className="flex justify-center my-4">
                        <label htmlFor="publishYear" className="  font-medium text-gray-700"> Publish Year</label>
                        <input type="number" name="publishYear" id="publishYear" {...register("publishYear", { required: true })} className={`border border-slate-500  border-solid ps-1  ms-4 ${errors.publishYear && "border-red-500 outline-red-600"}`} />
                    </div>


                    <div className="flex justify-center my-4">
                        <button type="submit" className="bg-sky-800 text-white px-4 py-1 rounded-lg w-fit  hover:bg-sky-500 hover:text-black focus-within:translate-y-2">Create</button>
                    </div>
                </form>

            </div >


            {isLoading && <Spinner />}
        </>


    );
}

export default CreateBook;
