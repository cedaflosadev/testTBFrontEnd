import React, { useEffect, useState } from 'react';
import './main.css';
import { eventFilesLoading, eventFilesLoadingByName, optionsFilesLoading } from '../../actions/files';
import { useDispatch, useSelector } from 'react-redux';
import Select from 'react-select';

export const MainTable = () => {
    const [allFilesText] = useState('todos los archivos')
    const { files } = useSelector(state => state.files);
    const { options } = useSelector(state => state.options);
    const optionsData = [{ file: allFilesText }]
    options.forEach(element => {
        optionsData.push({ file: element })
    });

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(eventFilesLoading());
        dispatch(optionsFilesLoading());

    }, [dispatch]);

    const handleChange = (e) => {
        
        if (e.file === allFilesText) {
           dispatch(eventFilesLoading());
        }
        else {
           dispatch(eventFilesLoadingByName(e.file))
        }
        
    }

    return (

        <>
            <div className="p-3 text-white bg-danger " role="alert">
                <span className='font-weight-bold'> REACT TEST APP</span>
            </div>

            <div className="container mt-3">
                <Select
                styles={{}}
                    onChange={handleChange}
                    options={optionsData}
                    getOptionLabel={(option) => option.file}
                    getOptionValue={(option) => option.file}
                />
                <div className="row table-resp mt-3" >

                    <table className="table table-striped table-bordered" >
                        <thead >
                            <tr >
                                <th >FileName</th>
                                <th >Text</th>
                                <th >Number</th>
                                <th >Hex</th>
                            </tr>
                        </thead>
                        {
                            files &&
                            <tbody>
                                {files.map(
                                    fileElement => fileElement.lines.map(
                                        (fileDetails, idx) => (
                                            <tr key={idx}>
                                                <td>{fileElement.file}</td>
                                                <td>{fileDetails.text}</td>
                                                <td>{fileDetails.number}</td>
                                                <td>{fileDetails.hex}</td>
                                            </tr>
                                        )
                                    ))
                                }
                            </tbody>
                        }
                    </table >
                </div>
            </div></>

    )
}