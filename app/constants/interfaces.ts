export interface ILogin {
  iin: number;
  password: string;
  remember: false | true;
}
export interface ILoginForget {
  iin: number;
  email: string;
}

export interface IBreadscrumb {
  breadscrumb1?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb2?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb3?: {
    title: string;
    link?: string;
    current?: boolean;
  };
  breadscrumb4?: {
    title: string;
    link?: string;
    current?: boolean;
  };
}

export interface TablePaginationActionsProps {
  count: number;
  page: number;
  rowsPerPage: number;
  onPageChange: (
    event: React.MouseEvent<HTMLButtonElement>,
    newPage: number
  ) => void;
}