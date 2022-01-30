export interface Report {
    id: number,
    text: string,
    message_type: {
        id: number,
        name: string
    },
    state: string,
    thumbnail_sq64: string
}
