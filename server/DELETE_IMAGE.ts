export const DELETE_IMAGE = async (public_id: string) => {
    try {
        const res = await fetch(`http://localhost:8000/images/delete/${public_id}`, {
            method: 'DELETE'
        })
        const resJson = await res.json()
        return resJson
    } catch (error) {
        console.log(error)
    }
}