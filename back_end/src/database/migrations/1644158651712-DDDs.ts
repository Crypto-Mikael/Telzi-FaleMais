import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class DDDs1644158651712 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "DDDs",
            columns: [
              {
                name: "idDDDs",
                type: "int",
                isPrimary: true,
                isNullable: false,
              },
              {
                name: "Descricao",
                type: "varchar(45)",
                isNullable: false,
              },
            ],
          })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("DDDs");
    }

}
