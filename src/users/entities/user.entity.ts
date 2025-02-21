import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm"

export type UserRoleType = "admin" | "user"

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  first_name: string

  @Column()
  last_name: string

  @Column({ unique: true })
  email_id: string

  @Column()
  password_hash: string

  @Column({
    type: "enum",
    enum: ["admin", "user"],
    default: "user"
  })
  role: UserRoleType

  @Column({
    default: true
  })
  isActive: boolean

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt: Date;

  @UpdateDateColumn({
    name: 'updated_at',
    type: 'timestamp with time zone',
  })
  updatedAt: Date;

}
