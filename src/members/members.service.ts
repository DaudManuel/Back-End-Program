import { Injectable } from '@nestjs/common';

@Injectable()
export class MembersService {
    private members = [
        { code: 'M001', name: 'Angga', borrowedBooks: [] },
        { code: 'M002', name: 'Ferry', borrowedBooks: [] },
        { code: 'M003', name: 'Putri', borrowedBooks: [] },
    ];

    findAll() {
        return this.members;
    }

    findOne(code: string) {
        return this.members.find(member => member.code === code);
    }

    borrowBook(memberCode: string, bookCode: string) {
        // Implementasi logika peminjaman buku
    }

    returnBook(memberCode: string, bookCode: string) {
        // Implementasi logika pengembalian buku
    }
}
