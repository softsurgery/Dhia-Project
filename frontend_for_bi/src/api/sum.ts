import axios from "axios";

export const sum = async (num1: number, num2: number) => {
    try{
        const response = await axios.get(
            `http://localhost:8000/sum/?num1=${num1}&num2=${num2}`
          );
          return response.data.result
    }
    catch(error){
        console.log(error);
        return undefined;
    }
  
};
