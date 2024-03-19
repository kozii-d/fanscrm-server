import { Module } from "@nestjs/common";
import { SequelizeModule } from "@nestjs/sequelize";
import * as process from "process";
// import { ConfigModule } from "@nestjs/config";
import { User } from "./users/users.model";
import { UsersModule } from "./users/users.module";
import { AuthModule } from "./auth/auth.module";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    SequelizeModule.forRoot({
      dialect: "mysql",
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT) || 3306,
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      autoLoadModels: true,
      synchronize: true,
      models: [User],
    }),
    UsersModule,
    AuthModule,
  ],
})
export class AppModule {}
