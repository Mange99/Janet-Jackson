export interface recipes {
  from: number;
  to: number;
  count: number;
  _links: [];
  hits: [];
}
export interface recipe {
  calories: number;
  image: string;
  label: string;
  totalTime: number;
}
