import { AuditEntity } from "./audit-entity.model";


export interface Branch extends AuditEntity {
    id: number;
    dpCode: number;
    circleId: number;
    stateId: number | null;
    name: string;
    address1: string;
    address2: string;
    address3: string;
    district: string;
    isRegCompleted: boolean;
    status: string; 
    circle_text: string;
    state_text: string;
}