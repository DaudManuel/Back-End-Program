import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MembersModule } from './members/members.module';
import { BooksModule } from './books/books.module';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'password',
            database: 'library',
            entities: [],
            synchronize: true,
        }),
        MembersModule,
        BooksModule,
    ],
})
export class AppModule {}
