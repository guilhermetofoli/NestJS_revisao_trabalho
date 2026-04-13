import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TesteService } from './teste.service';
import { CreateTesteDto } from './dto/create-teste.dto';
import { UpdateTesteDto } from './dto/update-teste.dto';

// Define a rota base do recurso. Ex: http://localhost:3000/teste
@Controller('teste')
export class TesteController {
  
  // Injeção de Dependência: O Nest cria automaticamente uma instância do Service
  constructor(private readonly testeService: TesteService) {}

  // Método POST: Usado para criação de novos registros
  @Post()
  create(@Body() createTesteDto: CreateTesteDto) {
    // @Body() pega os dados enviados no corpo da requisição (JSON)
    return this.testeService.create(createTesteDto);
  }

  // Método GET: Retorna todos os dados da tabela
  @Get()
  findAll() {
    return this.testeService.findAll();
  }

  // Método GET com parâmetro: Busca um registro específico pelo ID na URL
  // Ex: http://localhost:3000/teste/5
  @Get(':id')
  findOne(@Param('id') id: string) {
    // @Param('id') extrai o valor da URL. O '+' converte a string para número
    return this.testeService.findOne(+id);
  }

  // Método PATCH: Atualização parcial de dados
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTesteDto: UpdateTesteDto) {
    // Recebe o ID pela URL e os novos dados pelo Body
    return this.testeService.update(+id, updateTesteDto);
  }

  // Método DELETE: Remove um registro do banco de dados
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.testeService.remove(+id);
  }
}