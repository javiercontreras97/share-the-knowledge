import { Injectable } from '@nestjs/common';
import { BookRepository } from './book.repository';
import { BookEntity } from './book.entity';
import { BookDTO } from './book.dto';

@Injectable()
export class BookService {
	constructor(public bookRepo: BookRepository) { }

	createBook(book: BookDTO): BookEntity {
		return this.bookRepo.createBook(book);
	}

	getBooks(): Array<BookEntity> {
		return this.bookRepo.getBooks();
	}

	getOne(id: number): BookEntity {
		return this.bookRepo.getBookByID(id);
	}

	removeOne(id: number): void {
		this.bookRepo.deleteBook(id);
	}
}
