export interface Report {
    id: number,
    text: string,
    message_type: {
        id: number,
        name: string
    }
    thumbnail_sq64: string
}
