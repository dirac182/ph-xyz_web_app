import { useContext } from "react";
import DataContext from "../context/api_data";

function useDataContext() {
    return useContext(DataContext);
}

export default useDataContext;