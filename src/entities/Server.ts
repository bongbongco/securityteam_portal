import {
    Entity,
    BaseEntity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn,
} from "typeorm";

@Entity()
class Server extends BaseEntity {
    
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "text",
        nullable: true
    })
    host: string;

    @Column({
        type: "text",
        nullable: true
    })
    ip: string;

    @Column({
        type: "text",
        nullable: true
    })
    explanation: string;
    
    @Column({
        type: "text",
        nullable: true
    })
    vendor: string;

    @Column({
        type: "text",
        nullable: true
    })
    model: string;

    @Column({
        type: "text",
        nullable: true
   })
   version: string;

    @Column({
        type: "text",
        nullable: true
    })
    manager: string;

    @Column({
        type: "text",
        nullable: true
    })
    managingTeam: string;

    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    UpdatedAt: string;
}

export default Server;