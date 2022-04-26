import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function Inventory() {

    const [inventory, setInventory] = useState([]);
    // const inventaire = useSelector(state => state.inventaire)

    const fetchData = async () => {
        let data = await fetch('http://127.0.0.1:4000/inventory', {
            headers: {
                "Accept": "application/json"
            },
            method: 'GET'
        })

        // console.log("Status",data.status);
        const json = await data.json();
        setInventory(json)
        // console.log("Inventory", json);
    }

    useEffect(() => {
        fetchData();
    }, []);

    const dispatch = useDispatch();
    dispatch({
        type: "INV",
        payload: inventory
    })

    return (
        <>
            <h4 className="text-center mt-4">Stock actuel</h4>

            <table class="table table-striped">
                <thead>
                    <tr>
                        <td>Produit</td>
                        <td>Quantité</td>
                    </tr>
                </thead>
                <tbody>
                    {inventory.map(obj => {
                        return (
                            <>
                                <tr>
                                    <td>{obj.productName}</td>
                                    <td>{obj.quantity}</td>
                                </tr>
                            </>
                        )
                    })}
                </tbody>
            </table>
            {/* <div className="row mb-4">
                <label htmlFor='produit' className='col-6'>Produit</label>
                <select name="produit" id="produit" className='col-6'>
                    {inventory.map(obj => {
                        return (
                            <>
                                <option value="">{obj.productName}</option>
                            </>
                        )
                    })}
                </select>
            </div> */}
        </>
    )
}
