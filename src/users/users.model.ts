import { Column, DataType, Model, Table } from "sequelize-typescript";
import { ApiProperty } from "@nestjs/swagger";

interface UserCreationAttrs {
  email: string;
  password: string;
}

@Table({
  tableName: "users",
})
export class User extends Model<User, UserCreationAttrs> {
  @ApiProperty({ example: "1", description: "Unique identifier" })
  @Column({
    type: DataType.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  })
  id!: number;

  @ApiProperty({ example: "user@mail.com", description: "User email" })
  @Column({ type: DataType.STRING, allowNull: false, unique: true })
  email!: string;

  @ApiProperty({ example: "password", description: "User password" })
  @Column({ type: DataType.STRING, allowNull: false })
  password!: string;

  @ApiProperty({
    example: "2021-09-01T00:00:00.000Z",
    description: "User creation date",
  })
  @Column({ type: DataType.DATE, field: "created_at" })
  createdAt!: Date;

  @ApiProperty({
    example: "2021-09-01T00:00:00.000Z",
    description: "User update date",
  })
  @Column({ type: DataType.DATE, field: "updated_at" })
  updatedAt!: Date;
}
