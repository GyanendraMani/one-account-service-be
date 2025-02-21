import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { User } from './user.entity';

@Entity('mfa_settings')
export class MfaSettings {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @OneToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn()
  user: User;

  @Column({ type: 'boolean', default: false })
  isMfaEnabled: boolean;

  @Column({ nullable: true })
  mfaMethod?: string;  // e.g., 'sms', 'totp', 'email'

  @Column({ nullable: true })
  secretKey?: string;  // Stores the TOTP secret if using Google Authenticator

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
