export interface IImage {
    title: string
    description: string
    image: Blob
}

export interface IImageResponse {
    title: string,
    description: string,
    public_id: string,
    imgUrl: string,
    id: string
}

export interface IImageResponseCard {
    title: string,
    description: string,
    imgUrl: string
}