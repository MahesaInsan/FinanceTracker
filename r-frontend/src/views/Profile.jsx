import React from 'react';
import Layout from '../layouts/Layout';
import YourProfile from '../components/profile/YourProfile';
import EditProfile from '../components/profile/EditProfile';
import Wallet from '../components/transactionComponent/Wallet';
import MostSpending from '../components/profile/MostSpending';

export default function Profile() {
    return (
        <Layout>
            <YourProfile />
            <EditProfile />
            <MostSpending />
            <div className='mx-[8rem] my-[4rem]'>
                <Wallet />
            </div>
        </Layout>
    );
}
 