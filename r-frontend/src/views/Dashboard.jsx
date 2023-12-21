import React from 'react';
import Layout from '../layouts/Layout';
import Statistic from '../components/dashboard/Statistic';
import Goals from '../components/dashboard/Goals';
import TransactionHistoryDashboard from '../components/dashboard/TransactionHistoryDashboard';
import AchievingGoal from '../components/dashboard/AchievingGoal';
import AddButton from '../components/layoutComponent/AddButton';

const Dashboard = () => {
    return (
        <Layout>
            <div className='flex flex-col w-full px-[5%] lg:px-[15%] gap-20'>
                <AddButton />
                <Statistic />
                <Goals />
                <TransactionHistoryDashboard />
                <AchievingGoal />
            </div>
        </Layout>
    );
};

export default Dashboard;
