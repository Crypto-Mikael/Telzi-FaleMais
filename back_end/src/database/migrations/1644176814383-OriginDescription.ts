import { MigrationInterface, QueryRunner, Table, getRepository } from "typeorm";
import mock from "../../tests/mocks/MocksOriginDestiny";

export class OriginDescription1644176814383 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "Origin_destiny",
        columns: [
          {
            name: "id_origin_destiny",
            type: "int",
            isGenerated: true,
            isUnique: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "origin",
            type: "int",
            isNullable: false,
          },
          {
            name: "destiny",
            type: "int",
            isNullable: false,
          },
          {
            name: "value",
            type: "float",
            isNullable: false,
          },
        ],
        foreignKeys: [
          {
            name: "fk_origin",
            columnNames: ["origin"],
            referencedTableName: "DDDs",
            referencedColumnNames: ["id_DDDs"],
          },
          {
            name: "fk_destiny",
            columnNames: ["destiny"],
            referencedTableName: "DDDs",
            referencedColumnNames: ["id_DDDs"],
          },
        ],
      })
    );
    await getRepository("Origin_destiny").save(mock.defaultAPI);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("Origin_destiny");
  }
}
