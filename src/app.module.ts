import { Module } from '@nestjs/common';
import{MongooseModule} from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './Products/products.module';

@Module({
  imports: [ProductsModule, MongooseModule.forRoot('mongodb+srv://keirazhuo24:keirazhuo24@cluster0.gbqbnl9.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
