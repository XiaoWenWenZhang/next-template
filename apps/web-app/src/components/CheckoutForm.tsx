'use client'

import "../styles/header.scss"
import {useState} from "react";
import {Radio, RadioGroup, RadioOption} from '@faststore/ui'
import Link from "next/link";

const deliveryPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartAttachments/shippingData/cd931e6fe5224a93b2864b7e7361ca1d';
const paymentPath = 'https://twworkspace--vtexsgdemostore.myvtex.com/_v/cartAttachments/logisticAndPaymentData/cd931e6fe5224a93b2864b7e7361ca1d';
const deliveryMockData = {
    clearAddressIfPostalCodeNotFound: false,
    selectedAddresses: [
        {
            addressType: "residential",
            receiverName: "receiver name",
            addressId: "c3701fc4c61b4d1b91f67e81415db44d",
            postalCode: "12345-000",
            city: "Rio de Janeiro",
            state: "RJ",
            country: "CN",
            street: "Praia de Botafogo",
            number: "300",
            neighborhood: "Botafogo",
            complement: "3rd floor",
            reference: "Grey building",
            geoCoordinates: [
                -47.924747467041016
            ]
        }
    ]
}
const paymentMockData = {
    "logisticsInfo": [
        {
            "itemIndex": 0,
            "selectedDeliveryChannel": "delivery",
            "selectedSla": "normal"
        }
    ],
    "payments": [
        {
            "paymentSysytem": 1,
            "paymentSystemName": "2C2P",
            "group": "redirect",
            "installments": 3,
            "installmentsInterestRate": 0,
            "installmentsValue": 100,
            "value": 300,
            "referenceValue": 300,
            "hasDefaultBillingAddress": false
        }
    ]
}

const stepCircleConfig = [
    {
        id: 1,
        title: 'Delivery details',
        status: 'active',
        content: 'Address:',
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
        content: '',
    },
]
const deliveryDetails = <>
    <div className="checkout-item-block">
        <div style={{fontSize: '24px'}}>svdfgv vss</div>
        <div>33463, Pak Nam, Mueang Samut Prakan, Samut Prakan, 10270</div>
        <div>(+66) 242452</div>
        <div>pjoui@afaf.com</div>
    </div>

</>

export const CheckoutForm = () => {
    const [option, setOption] = useState('radio1')
    const [address, setAddress] = useState('')

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

    const reviewDetail = <>
        <h1 style={{display: 'flex'}}>Delivery address</h1>
        <div className="checkout-item-block">
            <div style={{fontSize: '24px'}}>svdfgv vss</div>
            <div>{address}</div>
            <div>(+66) 242452</div>
            <div>pjoui@afaf.com</div>
        </div>
        <h1 className="checkout-detail">Shipping</h1>
        <div className="checkout-item-block checkout-detail" >
            <div style={{fontSize: '16px', width: "50%"}}>Method</div>
            <div style={{fontSize: '16px', fontWeight: 600}}>Standard shipping</div>
        </div>
        <h1 className="checkout-detail">Payment</h1>
        <div className="checkout-item-block checkout-detail">
            <div style={{fontSize: '16px', width: "50%"}}>Method</div>
            <div style={{fontSize: '16px', fontWeight: 600}}>Credit/Debit cards</div>
        </div>
    </>

    const stepCircleContentConfig = {
        1: deliveryDetails,
        2: shippingAndPayment,
        3: reviewDetail,
    }
    const [config, setConfig] = useState(stepCircleConfig);
    const stepCircle = config.map(item => (
        <li key={item.id} className={`${item.status == 'active' ? 'form-stepper-active' : ''} 
        ${item.status == 'complete' ? 'form-stepper-completed' : ''}
        text-center form-stepper-list`}
            step={item.id}
            onClick={() => handleNavigator(item.id)}
        >
            <div className="mx-2" style={{cursor: 'pointer'}}>
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

    const submitCheckoutDetails = (id) => {
        if (id == 1) {
            addDeliveryDetails()
        } else {
            addShippingDetails()
        }
    }

    const addDeliveryDetails= () => {
        const body = JSON.stringify(deliveryMockData)
        fetch(deliveryPath, {method: 'POST', body}).then((res) => res.json()).then(data => {
            const deliveryAddress = data.shippingData.address
            const {
                postalCode, complement, neighborhood, street, city, number
            } = deliveryAddress
            const displayAddress = [postalCode, complement, neighborhood, street, city, number].join(', ')
            setAddress(displayAddress)
        }).catch(err => {
            console.log(111, err)
        })
    }

    const addShippingDetails= () => {
        const body = JSON.stringify(paymentMockData)
        fetch(paymentPath, {method: 'POST', body}).then((res) => res.json()).then(data => {
            console.log(data)
        }).catch(err => {
            console.log(111, err)
        })
    }

    const stepSubForm = config.map(item => (
        <section key={item.id} id={`step-${item.id}`}
                 className={`form-step ${item.status != 'active' ? 'd-none' : ''}`}>
            <h2 className="font-normal">{item.content}</h2>
            <div>{stepCircleContentConfig[item.id]}</div>
            <div className="mt-3" >
                {
                    item.id < config.length &&
                    <button style={{width: '100%'}} className="button btn-navigate-form-step" type="button" step_number={item.id + 1}
                            onClick={() => {
                                handleNavigator(item.id + 1);
                                submitCheckoutDetails(item.id);
                            }}>Next
                    </button>
                }
                {
                    item.id == config.length &&
                    <Link href='/payment'>
                    <button style={{width: '100%'}} className="button submit-btn" type="submit">Confirm Order</button>
                    </Link>
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


