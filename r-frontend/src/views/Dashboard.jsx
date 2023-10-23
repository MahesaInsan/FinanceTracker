import React from 'react';
import Layout from '../layouts/Layout';
import Statistic from '../components/Statistic';
import Goals from '../components/Goals';
import TransactionHistoryDashboard from '../components/TransactionHistoryDashboard';
import AchievingGoal from '../components/AchievingGoal';

const Dashboard = () => {
    return (
        <Layout>
            <div className='flex flex-col w-full pl-[15%] pr-[15%] gap-20 pt-20'>
                <Statistic />
                <Goals />
                <TransactionHistoryDashboard />
                <div>Achieving goal</div>
                <AchievingGoal />
            </div>
        </Layout>
    );
};

export default Dashboard;
