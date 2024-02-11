import { action, makeAutoObservable, observable } from "mobx";
import { sum } from "../api/sum";

class SumModel {

    result: number | undefined = 0;

    constructor() {
        makeAutoObservable(this,{
            result: observable,
            addUp: action.bound
        })
    }

    addUp = async (num1: number , num2:number) => {
        const result = await sum(num1, num2);
        this.result = result;
       
    }
}

const sumModel = new SumModel();
export default sumModel;