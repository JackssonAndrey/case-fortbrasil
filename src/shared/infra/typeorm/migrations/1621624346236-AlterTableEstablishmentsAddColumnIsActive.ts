import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AlterTableEstablishmentsAddColumnIsActive1621624346236 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'establishments',
      new TableColumn({
        name: 'isActive',
        type: 'boolean',
        default: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('establishments', 'isActive');
  }

}
