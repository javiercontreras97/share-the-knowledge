import { Injectable } from "@nestjs/common";
import { BookDTO } from "./book.dto";
import { BookEntity } from "./book.entity";

@Injectable()
export class BookRepository {
	books: Array<BookEntity> = new Array();
	lastUsedID: number = 0;

	createBook(book: BookDTO): BookEntity {
		const createdBook: BookEntity = {id: this.lastUsedID+1, ...book};
		this.books.push(createdBook);
		this.lastUsedID ++;
		return createdBook;
	}

	getBooks(): Array<BookEntity> {
		return this.books;
	}

	getBookByID(id: number): BookEntity {
		const book = this.books.filter(book => book.id == id);
		return book[0];
	}

	deleteBook(id: number): void {
		this.books = this.books.filter(book => book.id != id);
	}
}