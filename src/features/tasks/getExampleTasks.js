export const getExampleTasks = async ()  => {
    const response =  await fetch("http://localhost:3000/To-do-list-React/exampleTasks.JSON")

    if (!response.ok) {
        new Error (response.statusText)
    }
    return await response.json()
}