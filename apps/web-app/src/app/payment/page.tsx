'use client'
import Link from "next/link";
import {Button, Checkbox, Form, Input, Label} from '@faststore/ui'

export default async function Page() {

    return (
        <div style={{display: 'flex', flexDirection: 'column',
            marginLeft: '200px'}}>
            <div style={{display: "flex", height: '100vh'}}>
                <div style={{width: '30%', marginRight: '10%'}}>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{marginTop: '20px'}}>Product</div>
                        <h1 style={{textAlign: 'left'}}>$100.00</h1>
                    </div>
                </div>
                <div style={{width: '70%', padding: '50px 100px 50px 100px', borderLeft: '2px sold rgba(223,231,234,.4)',
                    boxShadow: '15px 0 30px 0 rgba(0,0,0,.18)'
                }}>
                    <div style={{ paddingBottom: '15px', fontWeight: 600,
                        borderBottom: '2px solid #dfe7ea', width: '100%'}}>Pay With Card</div>
                    <Form>
                        <div style={{margin: '20px 0'}}>
                            <Label htmlFor="name">
                                Name:
                            </Label>
                            <input
                                style={{padding: '10px', margin: '10px', width: '100%', border:' 2px solid black'}}
                                id="name"
                                placeholder="Enter your name"
                                required
                            />
                        </div>
                        <div style={{margin: '20px 0'}}>
                            <Label htmlFor="email">
                                Card information:
                            </Label>
                            <input
                                style={{padding: '10px', margin: '10px',  width: '100%',
                                    backgroundImage: `url('https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1544px-Mastercard-logo.svg.png')`,
                                    backgroundSize: '39px',
                                    backgroundRepeat: 'no-repeat',
                                    backgroundPosition: 'right',
                                    border:' 2px solid black'
                            }}
                                id="card"
                                placeholder="1234 1234 1234 1234"
                                required
                            />
                        </div>
                        <div>
                            <Label>
                                <Checkbox required />
                                I agree to receive emails from Brand. View our{' '}
                                <a href="/">
                                    Privacy Policy
                                </a>
                                .
                            </Label>
                        </div>

                    </Form>
                    <Link href='/'>
                        <button style={{width: '100%', marginTop: '20px'}} className="button submit-btn">Pay</button>
                    </Link>

                </div>
            </div>

        </div>
    );
}