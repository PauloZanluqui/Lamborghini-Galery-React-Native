import { fetchGetCarData } from "../../api/getCars"
import { CarModel } from "./props"

export const loadCarData = async(id: number, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    const response = await fetchGetCarData(id)

    try{
        if(response != null){
            setCarData(response);
        }
    } catch(error){
        setCarData(null);
        console.log("Erro ao buscar os dados da api: ", error)
    }
}

export const handlePreviousItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null;
    try{
        if(carData && carData?.id > 1){
            response = await fetchGetCarData(carData?.id-1)
        }

        if(response != null){
            setCarData(response);
        }
    } catch(error){
        setCarData(null);
        console.log("Erro ao buscar os dados da api: ", error)
    }
}

export const handleNextItem = async(carData: CarModel | null, setCarData: React.Dispatch<React.SetStateAction<CarModel | null>>) => {
    let response = null;
    try{
        if(carData && carData?.id < 10){
            response = await fetchGetCarData(carData?.id+1)
        }

        if(response != null){
            setCarData(response);
        }
    } catch(error){
        setCarData(null);
        console.log("Erro ao buscar os dados da api: ", error)
    }
}