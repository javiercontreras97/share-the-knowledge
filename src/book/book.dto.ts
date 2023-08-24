import { IsString, IsInt, IsISBN, IsNotEmpty, IsDate, Min } from 'class-validator';

export class BookDTO {
	@IsString()
	@IsNotEmpty()
	title: string;

	@IsNotEmpty()
	@IsString()
	author: string;

	@IsInt()
	year: number;

	@IsISBN()
	ISBN: string;
}