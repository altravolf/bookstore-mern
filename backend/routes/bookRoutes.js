import express from "express";

import bookModal from "../model/bookModal.js";

const router = express.Router();


// * get home
router.get("/", async (req, res) => {
    const books = await bookModal.find();
    res.send(books)
})

// * get all books
router.get("/books", async (req, res) => {
    try {
        const books = await bookModal.find();
        return res.status(200).json({ books });
    }
    catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

// * get book by id
router.get("/books/:id", async (req, res) => {
    try {
        const book = await bookModal.findById(req.params.id);
        return res.status(200).json({ book });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

// * update book
router.put("/books/:id", async (req, res) => {
    try {

        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const { id } = req.params;
        const book = await bookModal.findByIdAndUpdate(id, req.body);

        if (!book) {
            return res.status(404).json({ message: "Book not found" });
        }
        const updatedBook = await bookModal.findById(id);
        return res.status(200).json({ updatedBook });

    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

// * post book
router.post("/books", async (req, res) => {
    try {
        if (!req.body.title || !req.body.author || !req.body.publishYear) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newBook = new bookModal({
            title: req.body.title,
            author: req.body.author,
            publishYear: req.body.publishYear
        });

        const book = await newBook.save();
        return res.status(201).json({ book });
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
})

// * delete book
router.delete("/books/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const book = await bookModal.findByIdAndDelete(id);

        return res.status(200).json({ message: "Book delted successfully" });
    }
    catch (error) { return res.status(500).json({ message: error.message }) }
}
)


export default router;