'use client'

import "../styles/header.scss"
import {useState} from "react";

const stepCircleConfig = [
    {
        id: 1,
        title: 'Delivery details',
        status: 'active',
        content: 'Account Basic Details',
    },
    {
        id: 2,
        title: 'Shipping and payment',
        status: 'unfinished',
        content: 'Social Profiles',
    },
    {
        id: 3,
        title: 'Review',
        status: 'unfinished',
        content: 'Personal Details',
    },
]
export const CheckoutForm = () => {

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
        <section key={item.id} id={`step-${item.id}`} className={`form-step ${item.status != 'active' ? 'd-none' : ''}`}>
            <h2 className="font-normal">{item.content}</h2>
            <div className="mt-3">
                {
                    item.id > 1 && <button className="button btn-navigate-form-step" type="button" step_number={item.id -1}
                                           onClick={() =>handleNavigator(item.id -1)}>Prev
                    </button>
                }
                {
                    item.id < config.length && <button className="button btn-navigate-form-step" type="button" step_number={item.id + 1}
                                                                 onClick={() =>handleNavigator(item.id + 1)}>Next
                    </button>
                }
                {
                    item.id == config.length && <button className="button submit-btn" type="submit">Confirm Order</button>
                }
            </div>
        </section>
    ))

    return (
        <div>
            <h1>Checkout page</h1>
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


