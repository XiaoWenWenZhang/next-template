'use client'

import "../styles/header.scss"
import {useState} from "react";
import {Radio, RadioGroup, RadioOption} from '@faststore/ui'


const stepCircleConfig = [
    {
        id: 1,
        title: 'Delivery details',
        status: 'active',
        content: 'Address: Rio de Janeiro',
    },
    {
        id: 2,
        title: 'Shipping and payment',
        status: 'unfinished',
        content: 'Shipping: Standard Shipping',
    },
    {
        id: 3,
        title: 'Review',
        status: 'unfinished',
        content: 'Review Details',
    },
]

export const CheckoutForm = () => {
    const deliveryDetails = <>
        <div style={{
            padding: '15px 15px 10px',
            backgroundColor: 'rgba(223,231,234,.4)',
            borderRadius: '2px',
            border: '1px solid #adb9c3',
            cursor: 'pointer',
            lineHeight: '22px',
        }}>
            <div style={{fontSize: '24px'}}>svdfgv vss</div>
            <div>33463, Pak Nam, Mueang Samut Prakan, Samut Prakan, 10270</div>
            <div>(+66) 242452</div>
            <div>pjoui@afaf.com</div>
        </div>

    </>
    const [option, setOption] = useState('radio1')

    const shippingAndPayment = <>
        <div style={{
            display: 'flex', alignItems: 'center', marginBottom: '20px'
        }} className="checkout-item">
            <Radio style={{
                width: '16px',
                height: '16px',
                color: '011e41',
                marginRight: '10px'
            }
            }/>
            <div style={{fontSize: '1rem', fontWeight: '600', height: '40px', lineHeight: '45px'}}>Standard Shipping
            </div>
            <div style={{
                fontSize: '1rem',
                fontWeight: '600',
                height: '40px',
                lineHeight: '45px',
                marginLeft: 'auto'
            }}>Free
            </div>
        </div>

        <div style={{fontSize: '24px'}}>Payment</div>
        <div style={{display: 'flex', flexDirection: 'column'}}>
            <RadioGroup
                name="radio-group"
                selectedValue={option}
                onChange={(v) => setOption(v.currentTarget.value)}
            >
                <div className="checkout-item">
                    <RadioOption value="radio1" label="Credit/Debit cards">
                        <span style={{marginLeft: '10px'}}>Credit/Debit cards</span>
                    </RadioOption>
                </div>
                <div className="checkout-item">

                    <RadioOption value="radio2" label="Mobile banking/Direct Debit">
                        <span style={{marginLeft: '10px'}}>Mobile banking/Direct Debit</span>
                    </RadioOption>
                </div>
                <div className="checkout-item">

                    <RadioOption value="radio3" label="E-Wallets/QR Promptpay">
                        <span style={{marginLeft: '10px'}}>E-Wallets/QR Promptpay</span>
                    </RadioOption>
                </div>
            </RadioGroup>
        </div>
    </>

    const stepCircleContentConfig = {
        1: deliveryDetails,
        2: shippingAndPayment,
        3: <div>svdfgv vss
            33463, Pak Nam, Mueang Samut Prakan, Samut Prakan, 10270
            (+66) 242452
            pjoui@afaf.com</div>,
    }
    const [config, setConfig] = useState(stepCircleConfig);
    const stepCircle = config.map(item => (
        <li key={item.id} className={`${item.status == 'active' ? 'form-stepper-active' : ''} 
        ${item.status == 'complete' ? 'form-stepper-completed' : ''}
        text-center form-stepper-list`}
            step={item.id}>
            <div className="mx-2">
                    <span className={`form-stepper-circle ${item.status == 'unfinished' ? 'text-muted' : ''}`}>
                        {item.status != 'complete' && <span>{item.id}</span>}
                    </span>
                <div className={`label ${item.status == 'unfinished' ? 'text-muted' : ''}`}>{item.title}</div>
            </div>
        </li>
    ))

    const handleNavigator = (id) => {
        const preStep = config.filter(item => item.id < id).map(item => ({
            ...item,
            status: 'complete',
        }));
        const curStep = config.filter(item => item.id == id).map(item => ({
            ...item,
            status: 'active',
        }));
        const nextStep = config.filter(item => item.id > id).map(item => ({
            ...item,
            status: 'unfinished',
        }));
        setConfig([
            ...preStep,
            ...curStep,
            ...nextStep
        ])
    }


    const stepSubForm = config.map(item => (
        <section key={item.id} id={`step-${item.id}`}
                 className={`form-step ${item.status != 'active' ? 'd-none' : ''}`}>
            <h2 className="font-normal">{item.content}</h2>
            <div>{stepCircleContentConfig[item.id]}</div>
            <div className="mt-3">
                {
                    item.id > 1 &&
                    <button className="button btn-navigate-form-step" type="button" step_number={item.id - 1}
                            onClick={() => handleNavigator(item.id - 1)}>Prev
                    </button>
                }
                {
                    item.id < config.length &&
                    <button className="button btn-navigate-form-step" type="button" step_number={item.id + 1}
                            onClick={() => handleNavigator(item.id + 1)}>Next
                    </button>
                }
                {
                    item.id == config.length &&
                    <button className="button submit-btn" type="submit">Confirm Order</button>
                }
            </div>
        </section>
    ))

    return (
        <div>
            <div id="multi-step-form-container">
                <ul className="form-stepper form-stepper-horizontal text-center mx-auto pl-0">
                    {stepCircle}
                </ul>
                <form id="userAccountSetupForm" name="userAccountSetupForm" encType="multipart/form-data" method="POST">
                    {stepSubForm}
                </form>
            </div>
        </div>
    );
}


