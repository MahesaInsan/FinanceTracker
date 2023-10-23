import React from 'react';
import Header from '../components/partial/Header';
import Footer from '../components/partial/Footer';

export default function Layout({ children }) {
    return (
        <html>
            <Header />
            <div>{children}</div>
            <Footer />
        </html>
    );
}
