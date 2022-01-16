export const GET_ONE_IMAGE = async (id: string) => {
    try {
        const image = await fetch(`http://localhost:8000/images/get/${id}`)
        const imageJson = await image.json()
        return imageJson
    } catch (error) {
        console.error(error)
    }
}