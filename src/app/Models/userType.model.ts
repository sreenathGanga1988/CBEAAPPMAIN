import { AuditEntity } from "./audit-entity.model";


export class UserType implements AuditEntity {
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
    id!: number;
    name!: string;
    abbreviation!: string;
    description!: string;

    btnString:string="";
    statusString:string="";
      
}
