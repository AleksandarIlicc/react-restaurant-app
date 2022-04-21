/* eslint-disable no-unused-vars */
import React from 'react';
import { FaLocationArrow } from 'react-icons/fa';

const SideBar = ({ handleCheck, establishItem, featuresItem, openMap }) => {
    return (
        <div className='restaurants__sidebar'>
            <div className='map--container'>
                <button className='button__map' onClick={openMap}><FaLocationArrow className='button__map--loc' /><span>View</span></button>
            </div>

            <div className='type__establishment' onChange={(e) => handleCheck(e)}>
                {
                    establishItem.map((item, i) => {
                        const uppercaseName = item[0].toUpperCase() + item.slice(1);

                        return (
                            <div className='input__box' key={i}>
                                <input type='checkbox' id={item} value={item} className='input__checkbox' />
                                <label htmlFor={item}>{uppercaseName}</label>
                            </div>
                        )
                    })
                }
            </div>

            <span className='line'></span>

            <div className='type__features' onChange={(e) => handleCheck(e)}>
                {
                    featuresItem.map((item, i) => {
                        const uppercaseName = item[0].toUpperCase() + item.slice(1);

                        return (
                            <div className='input__box' key={i}>
                                <input type='checkbox' id={item} value={item} className='input__checkbox' />
                                <label htmlFor={item}>{uppercaseName}</label>
                            </div>
                        )
                    })
                }
            </div>

            <span className='line'></span>
        </div >
    )
}

export default SideBar;