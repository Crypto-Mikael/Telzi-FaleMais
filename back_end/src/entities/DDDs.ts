import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity("DDDs")
export default class DDDs {
  constructor(description: string) {
    this.description = description;
  }

  @PrimaryGeneratedColumn("increment")
  id_DDDs: number;

  @Column()
  description: string;
}
