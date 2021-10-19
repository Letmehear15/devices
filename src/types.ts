export type Route = {
  id: number;
  path: string | string[];
  exact: boolean;
  component: React.FC;
};
