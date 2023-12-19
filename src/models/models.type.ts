export type Job = {
    by: string;
    id: number;
    score: number;
    time: number;
    title: string;
    type: string;
    url?: string;
    text?: string;
}

export type JobCardProp = {
    job: Job
}
