import React from 'react';
import { RadioGroup, RadioButton } from 'react-radio-buttons';

export default props => {
    return (
        <RadioGroup onChange={props.onChange} horizontal={false} value={props.model}>
            {
                props.models.map(model => {
                    return (
                        <RadioButton value={model} key={model}>
                            {model}
                        </RadioButton>
                    )
                })
            }
        </RadioGroup>
    );
}
