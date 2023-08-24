import { Module } from '@nestjs/common';
import { BookController } from './book/book.controller';
import { BookService } from './book/book.service';
import { BookRepository } from './book/book.repository';

@Module({
  imports: [],
  controllers: [BookController],
  providers: [BookService, BookRepository],
})
export class AppModule {}

