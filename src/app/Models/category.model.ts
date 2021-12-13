import { AuditEntity } from "./audit-entity.model";


export interface Category extends AuditEntity {
    id: number;
    name: string;
    abbreviation: string;
    btnString:string;

}
