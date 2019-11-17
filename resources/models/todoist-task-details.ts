export interface DueDate {
    recurring: boolean;
    string: string;
    date: string;
}

export interface TodoistTaskDetails {
    id: number;
    project_id: number;
    order: number;
    content: string;
    completed: boolean;
    label_ids: any[];
    priority: number;
    comment_count: number;
    created: Date;
    due: DueDate;
}