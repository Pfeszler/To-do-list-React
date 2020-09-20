export const getExampleTasks = async ()  => {
    const response =  await fetch("To-do-list-React/exampleTasks.JSON")

    if (!response.ok) {
        new Error (response.statusText)
    }
    return await response.json()
}