import {useState,useEffect} from 'react'
// import na

function AddExpensive() {
    const [CreditAmmount,setCreditAmmount] = useState('')
    const [DebitAmmount,setDebititAmmount] = useState('')
    const [RunningAmmount,setRunningAmmount] = useState(5000)
    const [Discreption,setDiscreption] = useState('')


    const data = [
        {
            Date: new Date(),
            Discreption:Discreption,
            Credit:CreditAmmount,
            Debit:DebitAmmount,
            RunningBalance: RunningAmmount
        }
    ]
    
    
    const add =(e)=>{
        console.log('calling',e);
    }
    
    const handleChange=(e)=>{    
        setCreditAmmount(e.target.value)
        setRunningAmmount(RunningAmmount+CreditAmmount)
    }

    const handleChangeDis=(e)=>{
        setDiscreption(e.target.value)
    }



    const clickHandlerSave =()=>{
        localStorage.setItem('data',JSON.stringify(data))
        console.log('submit');
    }

    
    const clickHandlerCancel =()=>{
        localStorage.setItem('data',JSON.stringify(data))
        console.log('submit');
    }



    return (
        <>
            <div>
                <div>
                    <h3>New Transaction</h3>
                </div>
                <div className={`d-flex`}>
                    <h5>Transacton Type</h5>
                    <div>
                        <div className="dropdown">
                            <button type="button" className="btn btn-primary dropdown-toggle" data-toggle="dropdown">
                                Select Transaction
                            </button>
                            <div className="dropdown-menu">
                                <a className="dropdown-item" href="#">Credit</a>
                                <a className="dropdown-item" href="#">Debit</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='d-flex'>
                    <form onSubmit={add}>
                        <label htmlFor="">Ammount</label>
                        <input type="text"  onChange={handleChange} value={CreditAmmount} />
                        <label htmlFor="">Description</label>
                        <input type="text"  onChange={handleChangeDis} value={Discreption} />
                        <button onClick={clickHandlerSave} type="button" className="btn btn-primary">save</button>
                        <button onClick={clickHandlerCancel} type="button" className="btn btn-secondary">cancel</button>
                    </form>
                </div>
                <div>
                </div>
            </div>
        </>
    )
}

export default AddExpensive