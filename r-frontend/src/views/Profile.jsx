import React from 'react';
import Layout from '../layouts/Layout';
import YourProfile from '../components/profile/YourProfile';
import EditProfile from '../components/profile/EditProfile';

export default function Profile() {
    return (
        <Layout>
            <YourProfile />
            <EditProfile />
        </Layout>
    );
}
