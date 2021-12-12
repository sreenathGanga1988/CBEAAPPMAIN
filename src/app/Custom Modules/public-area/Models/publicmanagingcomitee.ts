export interface Publicmanagingcomitee {
    id: number;
    name: string;
    position: string;
    description1: string;
    description2: string;
    imageLocation: string;
    order: number;

}


export interface PublicManagingComiteeDTOList {
  managingComitees: Publicmanagingcomitee[];
}


