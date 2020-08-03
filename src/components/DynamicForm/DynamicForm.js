import React from 'react';
import { useDispatch } from 'react-redux';
import FormControl from './FormControl';

import { postFlight } from '../../actions';

const DynamicForm = ({ title, url, model, firstRow, secondRow, thirdRow }) => {
    let form_title = title || "Dynamic Form";
    const dispatch = useDispatch();
    let obj = {};

    const handleSubmit = (e) => {
        e.preventDefault();

        dispatch(postFlight(url, obj, title));
    }
    const handleReset = (e) => {
        e.preventDefault();
    }
    const onControl = (key, value) => {
        obj[key] = value;
    };
    const arrangeFields = () => {
        let nextRow = firstRow;
        let list = [];
        while (model.length > 0) {
            list.push(model.splice(0, nextRow));
            if (nextRow > 1) {
                if (secondRow) {
                    nextRow = secondRow;
                    secondRow = false;
                } else {
                    if (thirdRow) {
                        nextRow = thirdRow;
                        thirdRow = false;
                    } else {
                        nextRow--;
                    }
                }
            }
        }
        return list;
    }
    const renderControls = () => {
        return arrangeFields().map((line, key) =>
            <FormControl
                id={key}
                key={key}
                line={line}
                onControl={onControl}
            />
        );
    }
    return (
        <div>
            <h3>{form_title}</h3>
            <form className="row">
                <div className="container">
                    {renderControls()}
                </div>
                <div className="container">
                    <button onClick={(e) => handleSubmit(e)} className="btn btn-primary" style={{ marginRight: 20 }}>Submit</button>
                    <button onClick={handleReset} className="btn btn-primary">Reset</button>
                </div>
            </form>
        </div>
    );
}
export default DynamicForm;

