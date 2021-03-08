import {IsNull, MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateUsersTable1614986884644 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"')

    await queryRunner.createTable(
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
            name: 'name',
            type: 'varchar',
            isNullable: false
          },

          {
            name: 'email',
            type: 'varchar',
            isUnique: true,
            isNullable: false
          },
    
          {
            name: 'password',
            type: 'varchar'
          },

          {
            name: 'isAdmin',
            type: 'boolean',
            default: false
          },

          {
            name: 'created_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false
          },

          {
            name: 'updated_at',
            type: 'timestamp',
            default: 'now()',
            isNullable: false
          }
        ]
      })
    );
  }      

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    await queryRunner.query('DROP EXTENSION "uuid-ossp"')
  }
}