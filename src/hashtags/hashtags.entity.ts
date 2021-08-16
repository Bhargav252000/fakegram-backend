import { Posts } from 'src/posts/posts.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToMany,
} from 'typeorm';

@Entity('hashtags')
export class Hashtags {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  hashtag: string;

  @ManyToMany(() => Posts, (post) => post.hashtags, {
    eager: false,
    cascade: true,
  })
  posts: Posts[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;
}
