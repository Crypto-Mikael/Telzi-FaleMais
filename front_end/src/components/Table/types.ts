export default interface TableRowData {
  value: number;
  id_origin_destiny: number;
  origin: {
    description: string;
    id_DDDs: number;
  };
  destiny: {
    description: string;
    id_DDDs: number;
  };
}
