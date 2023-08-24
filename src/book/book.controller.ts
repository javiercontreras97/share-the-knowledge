import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { BookEntity } from './book.entity';
import { BookService } from './book.service';
import { BookDTO } from './book.dto';

@Controller('book')
export class BookController {
	constructor(public bookService: BookService) { }

	@Post()
	createBook(@Body() book: BookDTO): BookEntity {
		return this.bookService.createBook(book);
	}

	@Get()
	getBooks(): Array<BookEntity> {
		return this.bookService.getBooks();
	}

	@Get(':id')
	getOneBook(@Param('id') id: number): BookEntity {
		return this.bookService.getOne(id);
	}

	@Delete(':id')
	deleteOneBook(@Param('id') id: number): void {
		this.bookService.removeOne(id);
	}
}
