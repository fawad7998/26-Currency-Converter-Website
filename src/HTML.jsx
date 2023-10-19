import React from 'react'

const HTML = () => {
    return (

        <div className='counter-comtainer'>
            <div className='text-box'>
                <div className='inputarea'>
                    <div className='navbar-container'>
                        <h2>CURRENCY CONVERTER</h2>
                    </div>

                    <div className='from'>
                        <input type={'number'} placeholder='enter amount' value={fromAmount} onChange={(e) => {
                            setAmount(e.target.value)
                            setAmountInFromCurrency(true)
                        }} />
                        <select value={from} onChange={(e) => { setFrom(e.target.value) }}>
                            {currencyOptions.map(item => (
                                <option value={item} key={item + Math.random()} >{item}</option>
                            ))}
                        </select>
                    </div>

                    <h1>=</h1>

                    <div className='to'>
                        <input type={'number'} placeholder='enter amount' value={toAmount} onChange={(e) => {
                            setAmount(e.target.value)
                            setAmountInFromCurrency(false)
                        }} />
                        <select value={to} onChange={(e) => {
                            setTo(e.target.value)
                        }}>
                            {currencyOptions.map(item => (
                                <option key={item + Math.random()} value={item}>{item}</option>
                            ))}
                        </select>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default HTML
