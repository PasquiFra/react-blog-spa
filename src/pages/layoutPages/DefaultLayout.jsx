import Header from "../../layouts/Header"
import Footer from "../../layouts/Footer"
import Alert from "../../components/Alert/Alert"
import { Outlet } from 'react-router-dom';
import { useEffect, useState } from 'react'

const DefaultLayout = () => {

    const [error, setError] = useState(null);

    return (
        <>
            <Header></Header>
            <main className='container'>
                <Outlet />
            </main>
            <Footer></Footer>
            <Alert error={error}></Alert>
        </>
    )
}

export default DefaultLayout