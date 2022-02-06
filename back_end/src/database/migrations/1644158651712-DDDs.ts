import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DDDs1644158651712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "DDDs",
            columns: [
              {
                name: "id_DDDs",
                type: "int",
                isGenerated: true,
                generationStrategy: "increment",
                isPrimary: true,
              },
              {
                name: "description",
                type: "varchar(45)",
                isNullable: true,
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DDDs");
    }

}
