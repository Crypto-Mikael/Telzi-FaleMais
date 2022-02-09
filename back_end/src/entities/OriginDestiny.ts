import { Entity, Column, OneToOne, PrimaryColumn, JoinColumn } from "typeorm";
import DDDs from "./DDDs";

@Entity("Origin_destiny")
export default class OriginDestiny {
  constructor(value: number) {
    this.value = value;
  }

  @PrimaryColumn()
  id_origin_destiny: number;

  @OneToOne(() => DDDs, (ddd) => ddd.id_DDDs)
  @JoinColumn({ name: "origin" })
  origin: DDDs;

  @OneToOne(() => DDDs, (ddd) => ddd.id_DDDs)
  @JoinColumn({ name: "destiny" })
  destiny: DDDs;

  @Column()
  value: number;
}
