import { useSelector } from "react-redux"
import { selectLoadingStatus } from "../../tasksSlice"

export const useLoadingStatus = () => {
    const loadingStatus = useSelector(selectLoadingStatus);
    const loading = loadingStatus === "loading" ? true : false
    const failed = loadingStatus === "failed" ? true : false

    const loadingText = () => {
        switch (loadingStatus) {
            case "loading":
                return "Ładowanie..."
            case "failed":
                return "Coś poszło nie tak, przeładuj stronę i spróbuj ponownie"
            default:
                return "Pobierz przykładowe zadania"

        }
    }

    return {loadingText, loading, failed}
}