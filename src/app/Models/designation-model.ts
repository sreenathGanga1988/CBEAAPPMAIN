import { AuditEntity } from "./audit-entity.model";


export class Designation implements AuditEntity {  
   
    id!: number;
    name!: string;
    description!: string;

    //audit
    isActive: boolean=true;
    createdByUserId!: number | null;
    addedUser!: string;
    createdDate!: string | null;
    modifiedByUserId!: number | null;
    modifiedUser!: string;
    modifiedDate!: string | null;
    isDeleted!: boolean;
    deletedByByUserId!: number | null;
    deletedUser!: string;
    deletedDate!: string | null;


    btnString:string="";

}