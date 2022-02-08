import {
  Entity,
  Column,
  ManyToOne,
  JoinColumn,
  PrimaryGeneratedColumn,
} from "typeorm";
import DDDs from "./DDDs";

@Entity("origin_destiny")
export default class OriginDestiny {
  constructor(origin: number, destiny: number, value: number) {
    this.origin = origin;
    this.destiny = destiny;
    this.value = value;
  }

  @PrimaryGeneratedColumn("increment")
  id_origin_destiny: number;

  @Column()
  origin: number;

  @ManyToOne(() => DDDs)
  @JoinColumn({ name: "idDDDs" })
  destiny: number;

  @ManyToOne(() => DDDs)
  value: number;
}
