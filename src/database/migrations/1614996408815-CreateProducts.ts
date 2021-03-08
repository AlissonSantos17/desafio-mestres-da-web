// import {MigrationInterface, QueryRunner, Table} from "typeorm";

// export class CreateProducts1614996408815 implements MigrationInterface {
//   public async up(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp"');

//     await queryRunner.createTable(
//       new Table({
//         name: 'products',
//         columns: [
//           {
//             name: 'id',
//             type: 'uuid',
//             isPrimary: true,
//             generationStrategy: 'uuid',
//             default: 'uuid_generate_v4()'
//           },

//           {
//             name: 'name',
//             type: 'varchar',
//             isNullable: false
//           },

//           {
//             name: 'price',
//             type: 'decimal',
//             precision: 8,
//             scale: 2,
//             isNullable: false
//           },

//           {
//             name: 'sku',
//             type: 'varchar',
//             isNullable: false,
//             isUnique: true,
//           },

//           {
//             name: "description",
//             type: "varchar",
//             length: '100',
//             isNullable: false,
//           },

//           {
//             name: "created_at",
//             type: "timestamp",
//             default: 'now()',
//             isNullable: false,
//           }
//         ]
//       })
//     )
//   }

//   public async down(queryRunner: QueryRunner): Promise<void> {
//     await queryRunner.dropTable('products');
//     await queryRunner.query('DROP EXTENSION "uuid-ossp"')
//   }
// }
