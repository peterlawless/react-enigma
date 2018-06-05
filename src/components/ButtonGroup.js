import React from 'react';

export default props => {
    return (
        <div className="button-group">
            {
                props.models.map(model => {
                    const modelInUse = props.model === model;
                    return (
                        <div
                            key={model}
                            onClick={() => {
                                if (!modelInUse) { props.handleClick( model ) }
                            }}
                            className={ modelInUse ? 'selected' : ''}
                        >
                            {model}
                        </div>
                    );
                })
            }
        </div>
    );
}
