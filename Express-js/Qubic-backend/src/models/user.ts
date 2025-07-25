import { Schema , model , Document } from "mongoose";
import  validator  from "validator";

export enum UserRole {
    ADMIN = "admin",
    AMBASSADOR = "ambassador"
}

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  role: UserRole;
  gender: "male" | "female" | "other";
  profileImage?: string;
  bio?: string;
  phone?: string;
  dob?: Date;
  address?: {
    street?: string;
    city?: string;
    country?: string;
    postalCode?: string;
  };
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    github?: string;
    website?: string;
  };
  score: number;
  isEmailVerified: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userschema = new Schema<IUser>(
    {
        name : {
          type:String,
          required:true
        },
        email:{
          type:String,
          required:true,
          unique:true,
          index:true,
          trim:true,
          lowercase:true,
          validate(value : string){
            if(!validator.isEmail(value)){
              throw new Error("Invalid Email");
            }
          }
        },
        password:{
          type:String,
          required : true,
          minlength : 8,
          maxlength : 16,
          validate(value : string){
            if (!validator.isStrongPassword(value)) {
              throw new Error("Create Strong Password");
            }
          }
        },
        
    }
)