import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import DDDs from "./DDDs";

@Entity("origin_destiny")
export default class OrigemDestino {
  constructor(origin: string, destiny: string, value: number) {
    this.origin = origin;
    this.destiny = destiny;
    this.value = value;
  }

  @PrimaryGeneratedColumn("increment")
  id_origin_destiny: number;

  @Column()
  origin: string;

  @ManyToOne(() => DDDs)
  @JoinColumn({ name: "idDDDs" })
  destiny: string;

  @ManyToOne(() => DDDs)
  value: number;
}
