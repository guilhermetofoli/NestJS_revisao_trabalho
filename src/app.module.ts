import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { TesteModule } from './teste/teste.module';
import { Teste } from './teste/entities/teste.entity';

@Module({
  imports: [
    SequelizeModule.forRoot({
      dialect: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root', // teu user do banco
      password: '',     // tua senha
      database: 'nome_do_teu_banco',
      models: [Teste], // Adiciona as tuas entities aqui
      synchronize: true, // AVISO: Em dev, ele cria as tabelas sozinho. Não usa em produção!
    }),
    TesteModule,
  ],
})
export class AppModule {}