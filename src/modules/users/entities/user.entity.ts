import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany
} from "typeorm"
import { UserRole } from '../../roles/entities/user-role.entity';
import { Session } from './session.entity';
import { UserService } from "../../services/entities/user-service.entity";
import { Subscription } from "../../services/entities/subscriptions.entity";

export type UserStatusType = 'active' | 'inactive' | 'banned';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  first_name: string;

  @Column()
  last_name: string;

  @Column({ unique: true })
  email_id: string;

  @Column({ unique: true, nullable: true })
  phoneNumber?: string;

  @Column({ nullable: true })
  profilePicture?: string;

  @Column({ nullable: true })
  password_hash?: string

  @Column({ type: 'enum', enum: ['active', 'inactive', 'banned'], default: 'active' })
  status: UserStatusType;

  @Column({
    default: true
  })
  isActive: boolean

  @OneToMany(() => UserRole, (userRole) => userRole.user)
  userRoles: UserRole[];

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];

  @OneToMany(() => UserService, (userService) => userService.user)
  userServices: UserService[];

  @OneToMany(() => Subscription, (subscription) => subscription.user)
  subscriptions: Subscription[];

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
