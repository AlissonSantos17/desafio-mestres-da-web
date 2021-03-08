import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import Product from './Products';

@Entity("stock")
class Stock {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  size: string;

  @Column()
  quantity: number;

  @ManyToOne(type => Product, product => product.stocks, {
    onDelete: "CASCADE"
  })

  product: Product;
}

export default Stock;