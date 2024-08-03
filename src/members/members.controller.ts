import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { MembersService } from './members.service';

@Controller('members')
export class MembersController {
    constructor(private readonly membersService: MembersService) {}

    @Get()
    findAll() {
        return this.membersService.findAll();
    }

    @Get(':code')
    findOne(@Param('code') code: string) {
        return this.membersService.findOne(code);
    }

    @Post('borrow')
    borrowBook(@Body() body: { memberCode: string, bookCode: string }) {
        return this.membersService.borrowBook(body.memberCode, body.bookCode);
    }

    @Post('return')
    returnBook(@Body() body: { memberCode: string, bookCode: string }) {
        return this.membersService.returnBook(body.memberCode, body.bookCode);
    }
}
