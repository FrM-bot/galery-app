export const GET_IMAGES = async () => {
    try {
        const images = await fetch('http://localhost:8000/images/get')
        const imagesJson = await images.json()
        console.log(imagesJson)
        return imagesJson
    } catch (error) {
        console.error(error)
    }
}