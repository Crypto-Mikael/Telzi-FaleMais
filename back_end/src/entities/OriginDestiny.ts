import {
  Entity,
  Column,
  OneToOne,
  PrimaryGeneratedColumn,
} from "typeorm";
import DDDs from "./DDDs";

@Entity("Origin_destiny")
export default class OriginDestiny {
  constructor(value: number) {
    this.value = value;
  }

  @PrimaryGeneratedColumn("increment")
  id_origin_destiny: number;

  @Column()
  origin: number;

  @Column()
  destiny: number;

  @Column()
  value: number;
}
