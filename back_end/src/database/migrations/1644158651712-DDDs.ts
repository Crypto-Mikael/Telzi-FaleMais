import { getRepository, MigrationInterface, QueryRunner, Table } from "typeorm";
import mock from "../../tests/mocks/MocksDDDs";
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
                isUnique: true,
                generationStrategy: "increment",
                isPrimary: true,
              },
              {
                name: "description",
                type: "varchar(45)",
                isNullable: false,
              },
            ],
          })
        );
        await getRepository("DDDs").save(mock.defaultAPI);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DDDs");
    }

}
