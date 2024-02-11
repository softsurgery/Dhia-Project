import React from "react";
import sumModel from "../models/SumModel";
import { observer } from "mobx-react";

const PlusOperation = observer(() => {
    const [values, setValues] = React.useState({
        num1: 0,
        num2: 0,
    });

    const onChangeValue = (name: string, value: string) => {
        setValues({ ...values, [name]: value });
    }

    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <td><label htmlFor="num1">Number 1</label></td>
                        <td><input type="number" name="num1" value={values.num1} onChange={(e) => onChangeValue(e.target.name, e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td><label htmlFor="num1">Number 2</label></td>
                        <td><input type="number" name="num2" value={values.num2} onChange={(e) => onChangeValue(e.target.name, e.target.value)} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2} style={{ textAlign: "center", paddingTop: "10px" }}>
                            <button onClick={() => sumModel.addUp(values.num1,values.num2)}>Show</button>
                        </td>
                    </tr>
                </tbody>

            </table>
            <p>Result = {sumModel.result}</p>
        </div>
    )
})

export default PlusOperation