import React from 'react';
import useFetch from './UseFetch';

export default function CustomHooks() {
    const [views] = useFetch('https://661cb6b8e7b95ad7fa6ae32d.mockapi.io/form');

    return (
        <div>
            <table className='table'>
                <thead>
                    <tr>
                       
                        <th>Name</th>
                        <th>Email</th>
                        <th>Pw</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        views.map((item, index) => (
                            <tr key={index}>
                                <td>{item.name}</td>
                                <td>{item.email}</td>
                                <td>{item.pw}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    );
}
