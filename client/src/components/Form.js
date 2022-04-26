import React, { useState } from 'react'
import { useSelector } from 'react-redux'

const Form = () => {

    const inventaire = useSelector(state => state.inventaire)
    const [upadateProd, setUpdateProd] = useState({
        recorded: "",
        productId: 0,
        productName: "",
        quantity: 0,
        direction: ""
    })
    // let item = {produt,quantite}

    const handleQuantite = (e) => {
        const newProd = {...upadateProd}
        newProd.quantity = e.target.value;
    
        setUpdateProd(newProd)
        // console.log("new",newProd);
    }

    const handleProd = (e) => {
        const newProd = {...upadateProd}
        newProd.productName = e.target.value;
    
        setUpdateProd(newProd)
        // console.log("Produit selected",newProd);
    }

    function getTime() {
        const newProd = {...upadateProd}
        newProd.recorded = new Date().toJSON();
        setUpdateProd(newProd)
        console.log("Date:",newProd.recorded);
    }

    const AjouterProduit2 = () => {
        
        const newProd = {...upadateProd}
        newProd.direction = 'in';
        newProd.recorded = new Date().toJSON();
        setUpdateProd(newProd)

        // console.log("NewProde in AjouterProd:",upadateProd);
    }

    const RetirerProduit = () => {
        const newProd = {...upadateProd}
        newProd.direction = 'out';
        newProd.recorded = new Date().toJSON();
        setUpdateProd(newProd)
    }

    const AjouterProduit = async () => {
        let data = await fetch('http://127.0.0.1:4000/moves', {
            headers: {
                "Content-type": "application/json"
            },
            method: 'POST',
            body: JSON.stringify(upadateProd)
        })

        const json = await data.json();
        console.log("ajout", json.inventory);

    }
    

    console.log("updaeProd:",upadateProd);

    const handleClick = () => {
        // force a re-render
        this.forceUpdate();
    };


    return (
        <>
            <form action="">
                <fieldset className='form-group Myborder p-3'>
                    <legend className='float-none w-auto'>Nouveau mouvement</legend>
                    <div className="row mb-4">
                        <label htmlFor='produit' className='col-6'>Produit</label>
                        <select 
                            name="produit" 
                            id="produit" 
                            className='col-6'
                            onChange={(e) => handleProd(e)}>
                            {inventaire.map(obj => {
                                return (
                                    <>
                                        <option value={obj.productName}>{obj.productName}</option>
                                    </>
                                )
                            })}
                        </select>
                    </div>
                    <div className="row">
                        <label htmlFor='quantite' className='col-6'>Quantité</label>
                        <input
                            value={upadateProd.quantity}
                            onChange={(e) => handleQuantite(e)}
                            type="number"
                            name="quantite"
                            id="quantite"
                            className='col-6' />
                    </div>
                    <div className="row mt-3">
                        <div className="col-6"></div>
                        <div className="col-6 d-flex justify-content-between">
                            <button onClick={AjouterProduit2} type='button' className="btn btn-primary">Ajouter au stock</button>
                            <button onClick={RetirerProduit} type='button' className="btn btn-primary">Retirer du stock</button>
                            <button className='btn btn-primary' onClick={AjouterProduit}>Refresh</button>
                        </div>
                    </div>
                </fieldset>
            </form>
        </>
    )
}

export default Form