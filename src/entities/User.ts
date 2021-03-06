import bcrypt from "bcrypt";
import { IsEmail } from "class-validator";
import { 
    Entity, 
    BaseEntity, 
    PrimaryGeneratedColumn, 
    Column, 
    CreateDateColumn, 
    UpdateDateColumn, 
    BeforeInsert, 
    BeforeUpdate, 
} from "typeorm";

const BCRYPT_ROUNDS = 10;

@Entity()
class User extends BaseEntity {

    @PrimaryGeneratedColumn() 
    id: number;

    @Column({
        type: "text",
        nullable: true
    })
    @IsEmail()
    email: string | null;

    @Column({
        type: "text"
    })
    firstName: string;

    @Column({
        type: "text"
    })
    lastName: string;

    @Column({
        type: "text",
        nullable: true
    })
    password: string;
    
    @Column({
        type: "text",
        nullable: true
    })
    phoneNumber: string;
    
    @CreateDateColumn()
    createdAt: string;

    @UpdateDateColumn()
    updatedAt: string;
    
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }
    
    public comparePassword(password: string): Promise<boolean> {
        return bcrypt.compare(password, this.password)
    }

    @BeforeInsert()
    @BeforeUpdate()
    async savePassword() : Promise<void> {
        if (this.password) {
            const hashedPassword = await this.hashPassword(this.password);
            this.password = hashedPassword;
        }
    }
    private hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password, BCRYPT_ROUNDS);
    }
}

export default User;