import { Entity, PrimaryColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../../users/entities/user.entity';
import { Service } from './service.entity';

@Entity('user_services')
export class UserService {
  @PrimaryColumn()
  userId: string;

  @PrimaryColumn()
  serviceId: string;

  @ManyToOne(() => User, (user) => user.userServices, { onDelete: 'CASCADE' })
  user: User;

  @ManyToOne(() => Service, (service) => service.userServices, { onDelete: 'CASCADE' })
  service: Service;

 
  @CreateDateColumn({
    name: 'created_at',
    type: 'timestamp with time zone',
  })
  createdAt: Date;

}
