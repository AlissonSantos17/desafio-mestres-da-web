import { Column, Entity, PrimaryGeneratedColumn, BeforeInsert, BeforeUpdate, CreateDateColumn, UpdateDateColumn } from "typeorm";

@Entity('products')
class Product {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column('decimal')
  price: number;

  @Column()
  size: string;

  @Column()
  color: string;

  @Column()
  sku: string;


  @Column()
  description: string;

  @CreateDateColumn()
  created_at: Date

  @UpdateDateColumn()
  updated_at: Date

}

export default Product;