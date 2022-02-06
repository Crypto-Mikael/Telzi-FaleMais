import {MigrationInterface, QueryRunner, Table } from "typeorm";

export class OriginDescription1644176814383 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "origin_destiny",
        columns: [
          {
            name: "id_origin_destiny",
            type: "int",
            isGenerated: true,
            generationStrategy: "increment",
            isPrimary: true,
          },
          {
            name: "origin",
            type: "int",
            isNullable: true,
          },
          {
            name: "destiny",
            type: "int",
            isNullable: true,
          },
          {
            name: "value",
            type: "float",
            isNullable: true,
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
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("origin_destiny");
  }
}
