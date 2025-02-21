import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, CreateDateColumn } from 'typeorm';
import { Admin } from './admin.entity';

@Entity('admin_action_logs')
export class AdminActionLog {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => Admin, { onDelete: 'CASCADE' })
  admin: Admin;

  @Column()
  action: string;  // e.g., "USER_DELETED", "ROLE_ASSIGNED"

  @Column({ type: 'json', nullable: true })
  metadata?: Record<string, any>;

  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt: Date;

}
