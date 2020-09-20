export const getExampleTasks = async ()  => {
    const response =  await fetch("exampleTasks.JSON")

    if (!response.ok) {
        new Error (response.statusText)
    }
    return await response.json()
}