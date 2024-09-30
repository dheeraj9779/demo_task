export interface userDetail{
  token:string,
  name:string
}

export interface Users {
  detail: userDetail
  error: string;
  isLoading: boolean;
}
