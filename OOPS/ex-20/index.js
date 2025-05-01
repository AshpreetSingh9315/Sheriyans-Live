 class Library {
    constructor () {
        this.books = []
    }
    addBook(book){
        this.books.push(book)
    }
    seeAllListedBooks(){
        this.books.forEach((book)=>{
            console.log(book)
        })
    }
 };

 let delhiLib = new Library();
 delhiLib.addBook("Go For IT");
 delhiLib.addBook("DAD");
 delhiLib.addBook("MANYS");
 delhiLib.seeAllListedBooks();