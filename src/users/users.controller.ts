import {
  Controller,
  Get,
  NotFoundException,
  Param,
  UseGuards,
} from "@nestjs/common";
import { UsersService } from "./users.service";
import { ApiOperation, ApiResponse, ApiTags } from "@nestjs/swagger";
import { User } from "./users.model";
import { AuthGuard } from "../auth/auth.guard";
import { GetOneParamsDto } from "./dto/get-one-params.dto";

@ApiTags("Users")
@Controller({ path: "users", version: "1" })
export class UsersController {
  constructor(private usersService: UsersService) {}

  @ApiOperation({ summary: "Get all users" })
  @ApiResponse({ status: 200, type: [User] })
  @UseGuards(AuthGuard)
  @Get()
  getAll() {
    return this.usersService.getAll();
  }

  @ApiOperation({ summary: "Get user by id" })
  @ApiResponse({ status: 200, type: User })
  @UseGuards(AuthGuard)
  @Get(":id")
  async getOne(@Param() params: GetOneParamsDto) {
    const id = params.id;
    const user = await this.usersService.getOne(id);

    if (!user) {
      throw new NotFoundException(`User with id ${id} not found`);
    }

    return user;
  }
}
