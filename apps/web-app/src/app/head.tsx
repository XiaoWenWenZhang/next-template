import "../styles/header.scss"

export default function Head() {
    return (
        <header style={{
            position: 'relative',
            height: '65px',
            width: '100%',
            zIndex: 40,
            top: 0,
            transition: '0.6s',
        }}>
            <title>{`test`}</title>
            <nav className="navigation-wrapper"
                 style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, borderBottom: '1px solid #dadada'}}>
                <div className="navigation"
                     style={{
                         display: 'flex',
                         justifyContent: 'flex-end',
                         alignItems: 'center',
                         padding: '0 40px',
                         backgroundColor: '#011e41',
                         height: '40px',
                         color: '#fff'
                     }}>
                    <div>
                        <em style={{
                            display: 'inline-block',
                            width: '15px',
                            height: '20px',
                            marginRight: '10px',
                            verticalAlign: 'bottom',
                            background: "url('https://www.electrolux.co.th/globalassets/icons/register-warranty-icon.svg') no-repeat center"
                        }}></em>
                        Product Registration
                    </div>
                    <div style={{marginLeft: '30px'}}>
                        <em style={{
                            display: 'inline-block',
                            width: '15px',
                            height: '20px',
                            marginRight: '10px',
                            verticalAlign: 'bottom',
                            background: "url('https://www.electrolux.co.th/globalassets/icons/where-to-buy-icon.svg') no-repeat center"
                        }}></em>
                        Where To Buy
                    </div>
                </div>
                <div className='main-navigation'
                     style={{
                         display: 'flex',
                         alignItems: 'center',
                         height: '85px',
                         padding: '8px 40px',
                         backgroundColor: '#fff'
                     }}>
                    <div className="navigation-logo">
                        <img src="https://www.electrolux.co.th/globalassets/settings/electrolux-logo.svg"
                             alt="Electrolux Thailand" width="144" height="35"/>
                    </div>
                    <div style={{margin: '0 20px'}}>
                        Appliances
                    </div>
                    <div>Services</div>
                </div>
                <div className="submenu-navigation">
                    hidden block
                </div>
            </nav>
            <meta name="description" content="test"/>
        </header>
    );
}


