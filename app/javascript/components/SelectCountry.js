import React from "react";
import PropTypes from "prop-types";
import Autocomplete  from 'react-autocomplete';

const COUNTRIES = require('../utils/countries');

class SelectCountry extends React.Component {

    render(){
        const { selectedCountry, onSelect, onFilter } = this.props;
        return(
            <div className='countries'>
                <Autocomplete
                    getItemValue={(item) => item.label}
                    items={ COUNTRIES.countries }
                    renderItem={(item, isHighlighted) =>
                        <div style={{ background: isHighlighted ? 'lightgray' : 'white' }} key={item.label}>
                            {item.label}
                        </div>
                    }
                    value={selectedCountry}
                    onChange={(e) => onSelect(e.target.value) }
                    onSelect={(val) => onSelect(val)}
                />

            </div>
        )
    }
}


SelectCountry.propTypes = {
    selectedCountry: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
};

export default SelectCountry;