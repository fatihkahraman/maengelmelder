export interface Response<T> {
    data: T;
    success: boolean;
    pager: {
        entries_per_page: number,
        current_page: number,
        total_entries: number
    }
}