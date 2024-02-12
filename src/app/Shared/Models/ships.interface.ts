export interface ShipsResponse {
  vehicles: Vehicles []
}
export interface Vehicles {
  title: string;
  description:string;
  icons : Icons;
  level:string;
  type :Type;
  nation :Nation;
}
export interface Icons {
  large:string;
  medium:string;
}
export interface Type {
  name:string;
  title: string;
  icons: TypeIcons;
}
export interface TypeIcons {
  default:string;
}
export interface Nation {
  name:string;
  title: string;
  color:string;
  icons: NationIcons;
}
export interface NationIcons {
  smal:string;
  medium:string;
  large:string;
}
