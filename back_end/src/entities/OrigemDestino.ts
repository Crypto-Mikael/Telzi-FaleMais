import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";
import { DDDs } from "./DDDs";

@Entity("OrigemDestino")
export class OrigemDestino {
  @PrimaryColumn("increment")
  idOrigemDestino: number;

  @Column()
  Origem: string;

  @ManyToOne(() => DDDs)
  @JoinColumn({ name: "idDDDs" })
  Destino: string;

  @ManyToOne(() => DDDs)
  Valor: number;
}
