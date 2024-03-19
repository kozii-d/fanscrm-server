import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/sequelize";
import { User } from "./users.model";
import { CreateUserDto } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
  constructor(@InjectModel(User) private userRepository: typeof User) {}
  async create(dto: CreateUserDto) {
    return this.userRepository.create(dto);
  }

  async getAll() {
    return this.userRepository.findAll();
  }

  async getOne(id: number) {
    return this.userRepository.findByPk(id);
  }

  async getOneByEmail(email: string) {
    return this.userRepository.findOne({ where: { email } });
  }
}
