import { Injectable } from '@nestjs/common';
import { Person } from './interfaces/person.controller';

@Injectable()
export class PersonService {
  async findAll(): Promise<Person[]> {
    return [
      {
        id: 1,
        name: 'Nut',
        salary: 10000,
      },
      {
        id: 2,
        name: 'nutthanon',
        salary: 10000,
      },
      {
        id: 3,
        name: 'Tos',
        salary: 10000,
      },
      {
        id: 4,
        name: 'Arm',
        salary: 10000,
      },
    ];
  }
}
