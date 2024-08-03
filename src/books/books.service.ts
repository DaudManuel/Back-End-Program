import { Injectable } from '@nestjs/common';

@Injectable()
export class BooksService {
    private books = [
        { code: 'JK-45', title: 'Harry Potter', author: 'J.K Rowling', stock: 1 },
        { code: 'SHR-1', title: 'A Study in Scarlet', author: 'Arthur Conan Doyle', stock: 1 },
        { code: 'TW-11', title: 'Twilight', author: 'Stephenie Meyer', stock: 1 },
        { code: 'HOB-83', title: 'The Hobbit, or There and Back Again', author: 'J.R.R. Tolkien', stock: 1 },
        { code: 'NRN-7', title: 'The Lion, the Witch and the Wardrobe', author: 'C.S. Lewis', stock: 1 },
    ];

    findAll() {
        return this.books;
    }

    findOne(code: string) {
        return this.books.find(book => book.code === code);
    }

    updateStock(code: string, stock: number) {
        const book = this.findOne(code);
        if (book) {
            book.stock = stock;
        }
    }
}
