const express = require("express")
const books = require("./books.json");

const app = express();

app.use(express.json());


app.get("/", (req, res) => {
    res.send({api_requested_by, books})
})

app.post("/books", (req, res) => {
    const newuser = {api_requested_by:"Sachidanand Pradhan" ,books:[...books, req.body]}
    res.send(newuser)
})

app.patch("/books/:id" , (req, res) => {
    const newBook = books.map((auth) => {
        if(+req.params.id === auth.id) {
            if(req?.body?.id) auth.id = req.body.id;
            if(req?.body?.book_name) auth.book_name = req.body.book_name;
            if(req?.body?.book_language) auth.book_language = req.body.book_language;
            if(req?.body?.price) auth.price = req.body.price;
            if(req?.body?.mobile_no) auth.mobile_no = req.body.mobile_no;
        }
        return newBook;
    })

    const data = {
        api_requested_by: "Sachidanand Pradhan",
        books: newBook
    }

    res.send(data)
})


app.delete("/books/:id" , (req, res) => {
    const newBook = books.filter((book) => book.id !== +req.params.id)

    const data = {
        api_requested_by:"Sachidanand Pradhan",
        books : newBook
    }
    res.send(data)
});

app.get("/books/:id", (req, res) => {
    const book = books.filter((name) => name.id === +req.params.id)

    const data = {
        api_requested_by: "Sachidanand Pradhan",
        book : book[0]
    }

    res.send(data)
});

app.listen(2345, function(){
    console.log("post is listening 2345");
})
