import React from 'react'
import './PricingTable.css'

export const PricingTable = () => {
    return (
        <div className='pricing-table-page'>
            <h1 className='mt-32 text-3xl'>Plans & Pricing</h1>
            <p className='mt-10 text-center'>Startup Framework is free forever — you only pay </p>
            <p className='text-center'>for custom domain hosting or to export your site.</p>
            <div className='plan-pricing'>
                <div className='plan'>
                    <h3 className='text-xl mt-10 text-left ml-20'>Starter</h3>
                   <h1 className='text-3xl mt-6 text-left ml-20 mb-6'>9.99&#36;</h1>
                    <p>2 GB of space</p>
                    <p>14 days of backups</p>
                    <p>Social integrations</p>
                    <p>Client billing</p>
                    <p>Remote access</p>
                    <p>Custom domain</p>
                    <p>24 hours support</p>
                    <p>Admin tools</p>
                    <p>Collaboration tools</p>
                    <p>User management</p>
                    <p>Get Started</p>
                    <button>Get Started</button>
                </div>
                <div className='plan'>
                    <h3 className='text-xl mt-10 text-left ml-20'>Professional</h3>
                    <h1 className='text-3xl mt-6 text-left ml-20 mb-6'>19.99&#36;</h1>
                    <p>2 GB of space</p>
                    <p>14 days of backups</p>
                    <p>Social integrations</p>
                    <p>Client billing</p>
                    <p>Remote access</p>
                    <p>Custom domain</p>
                    <p>24 hours support</p>
                    <p>Admin tools</p>
                    <p>Collaboration tools</p>
                    <p>User management</p>
                    <p>Get Started</p>
                    <button className='bg-pink-700'>Get Started</button>

                </div>
                <div className='plan'>
                    <h3 className='text-xl mt-10 text-left ml-20'>Team</h3>
                    <h1 className='text-3xl mt-6 text-left ml-20 mb-6'>49.99&#36;</h1>
                    <p>2 GB of space</p>
                    <p>14 days of backups</p>
                    <p>Social integrations</p>
                    <p>Client billing</p>
                    <p>Remote access</p>
                    <p>Custom domain</p>
                    <p>24 hours support</p>
                    <p>Admin tools</p>
                    <p>Collaboration tools</p>
                    <p>User management</p>
                    <p>Get Started</p>
                    <button>Get Started</button>
                </div>
            </div>
        </div>
    )
}
