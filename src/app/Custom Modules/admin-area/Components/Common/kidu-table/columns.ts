export class Column {
    columnDef!: string;
    header!: string;   
    colType?: CellType=1;

  }
  export enum CellType {
    Text = 1,
    Button=2,
    Status=3,
    Link=4,
    Right=5,
  }