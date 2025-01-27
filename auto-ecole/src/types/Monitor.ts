import { AutoEcoleIdName } from "./AutoEcole";

export type Monitor = {
    _id: string;
    name: string;
};

export type ReviewMonitor = {
    stars: number;
    comment: string;
    name?: string;
    _id?: string;
};

export type ReviewsMonitor = {
    map(arg0: (review: any, index: any) => React.JSX.Element): React.ReactNode;
    reviews: ReviewMonitor[];
};

export type MonitorInfos = {
    autoEcole : AutoEcoleIdName;
    monitor: {
        monitors: Monitor[];
    }
    reviews: {
        comment: string;
        rate?: number;
        creatorId: string;
        date: string;
        _id: string;
    }[];
};