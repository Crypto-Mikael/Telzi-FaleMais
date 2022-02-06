import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class OrigemDestino1644160257577 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "OrigemDestino",
            columns: [
              {
                name: "idOrigemDestino",
                type: "int",
                isPrimary: true,
                isNullable: false,
              },
              {
                name: "Origem",
                type: "int",
                isNullable: false,
              },
              {
                name: "Destino",
                type: "int",
                isNullable: false,
              },
              {
                name: "Valor",
                type: "float",
                isNullable: false,
              },
            ],
            foreignKeys: [
              {
                name: "fk_origem",
                columnNames: ["Origem"],
                referencedTableName: "DDDs",
                referencedColumnNames: ["idDDDs"],
              },
              {
                name: "fk_destino",
                columnNames: ["Destino"],
                referencedTableName: "DDDs",
                referencedColumnNames: ["idDDDs"],
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("OrigemDestino");
    }

}
