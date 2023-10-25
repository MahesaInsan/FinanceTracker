import React from 'react';
import Header from '../components/partial/Header';
import Footer from '../components/partial/Footer';
import AddButton from '../components/layoutComponent/AddButton';

export default function Layout({ children }) {
    return (
        <div>
            <Header />
            <AddButton />
            <div>{children}</div>
            <Footer />
        </div>
    );
}
