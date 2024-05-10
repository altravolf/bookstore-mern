/* eslint-disable no-console */
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Spinner from "../components/Spinner/Spinner";
import { useSnackbar } from "notistack";


function DeleteBooks() {
    const { id } = useParams();

    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();

    const { enqueueSnackbar } = useSnackbar();

    const onDelete = () => {

        setIsLoading(true);
        axios.delete(`http://localhost:3006/books/${id}`)
            .then(() => {
                setIsLoading(false);
                enqueueSnackbar("Book deleted successfully", { variant: "success" });
                navigate("/");
            })
            .catch(err => (
                enqueueSnackbar(err.message, { variant: "error" }),
                setIsLoading(false),
                console.log(err.message)
            ));
    }




    return (
        <div className="DeleteBooks">

            {isLoading ? (<Spinner />) : (
                <>
                    <h2 className="text-3xl font-bold my-8 text-center text-gray-900">
                        Are you sure you want to delete this book?
                    </h2>


                    <div className="flex justify-center gap-4">
                        <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-md" onClick={onDelete}  >Yes</button>

                        <button className="bg-green-700 hover:bg-green-800 text-white font-bold py-2 px-4 rounded-md" onClick={() => navigate("/")} >No</button>

                    </div>



                </>

            )}

        </div>
    );
}

export default DeleteBooks;