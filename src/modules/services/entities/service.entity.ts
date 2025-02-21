import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, OneToMany } from 'typeorm';
import { UserService } from './user-service.entity';
import { Subscription } from './subscriptions.entity';

@Entity('services')
export class Service {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  name: string;  // Service name (e.g., "Video Streaming", "E-commerce")

  @Column({ nullable: true })
  description?: string;

  @OneToMany(() => UserService, (userService) => userService.service)
  userServices: UserService[];

  @OneToMany(() => Subscription, (subscription) => subscription.service)
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
