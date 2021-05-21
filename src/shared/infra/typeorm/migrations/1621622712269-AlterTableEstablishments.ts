import { MigrationInterface, QueryRunner, TableForeignKey } from "typeorm";

export class AlterTableEstablishments1621622712269 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createForeignKey('establishments', new TableForeignKey({
      name: 'FKAddress',
      referencedTableName: 'addresses',
      referencedColumnNames: ['id'],
      columnNames: ['addressId'],
      onDelete: 'SET NULL',
      onUpdate: 'SET NULL',
    }))
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('establishments', 'FKAddress');
  }

}
