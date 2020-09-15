import React, { useState, useEffect } from 'react';
import './AssetType.css';

const AssetTypes = () => {

    const [assetTypes, setAssetTypes] = useState([]);

    const url = "http://localhost:3000/asset/getAssetTypes";

    useEffect(() => {
        fetchAssetTypes();
    }, [url])

    const fetchAssetTypes = () => {
        fetch(url)
            .then(data => data.json())
            .then(data =>
                setAssetTypes(data)
            )
            .catch(error => console.log(error))
    }

    return (<div>
        <table id="assets">
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    assetTypes.map(assetType =>

                        <tr key={assetType.id}>
                            <td>{assetType.id}</td>
                            <td>{assetType.type}</td>
                        </tr>

                    )}
            </tbody>
        </table>
    </div>)
}

export default AssetTypes;