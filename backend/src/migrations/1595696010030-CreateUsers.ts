import { MigrationInterface, QueryRunner, Table } from "typeorm";

export default class CreateUsers1595696010030 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`);
    
        return queryRunner.createTable(
          new Table({
            name: 'users',
            columns: [
              {
                name: 'id',
                type: 'uuid',
                isPrimary: true,
                generationStrategy: 'uuid',
                default: 'uuid_generate_v4()',
              },
              {
                name: 'cpf',
                type: 'varchar',
              },
              {
                name: 'password',
                type: 'varchar',
              },
              {
                name: 'created_at',
                type: 'timestamp',
                default: 'now()',
              },
              {
                name: 'updated_at',
                type: 'timestamp',
                default: 'now()',
              },
            ],
          }),
        );
      }
    
      public async down(queryRunner: QueryRunner): Promise<void> {
        return queryRunner.dropTable('users');
      }
}
