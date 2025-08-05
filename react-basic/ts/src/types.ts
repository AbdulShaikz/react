type Info = {
    id: number;
    name: string;
    email: string;
}

type AdminInfoList = Info & {
    role: string;
    permissions: string[];
}

export type {Info, AdminInfoList};