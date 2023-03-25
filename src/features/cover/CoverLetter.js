import React, { useEffect } from 'react'


import Screen from '../../components/Screen';
import Loader from '../../components/Loader';
import useResume from '../../hooks/useResume';

const CoverLetter = () => {
    const { loading, fetchResume } = useResume();

    useEffect(() => {
        fetchResume()
    }, [])

    return (
        <Screen>
            <Loader loading={loading}>
                <div>CoverLetter</div>
            </Loader>
        </Screen>
    )
}

export default CoverLetter