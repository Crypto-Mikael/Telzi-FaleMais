import { Entity, Column, PrimaryColumn } from "typeorm"

@Entity("DDDs")
export class DDDs {
  @PrimaryColumn('increment')
  idDDDs: number;

  @Column()
  Descricao: string;

}