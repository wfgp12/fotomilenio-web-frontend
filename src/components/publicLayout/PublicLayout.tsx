import React from 'react';
import './PublicLayout.scss'

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className='PublicLayout'>
            <div className='PublicLayout__content'>
                {children}
            </div>
            <div className='PublicLayout__logo-container'>
                <img src="src\assets\images\logo-fotomilenio.png" alt="Logo fotomilenio" />
            </div>
        </div>
    )
}

export default PublicLayout