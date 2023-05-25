import React from 'react';
import { Dropdown, DropdownButton } from 'react-bootstrap';

const ReviewDropdown = ({ printingMethod, setPrintingMethod }) => {
    return (
        <DropdownButton
            title={printingMethod}
            id="printingMethodDropdown"
            onSelect={eventKey => setPrintingMethod(eventKey)}
        >
            <Dropdown.Item eventKey="screen printing">Screen Printing</Dropdown.Item>
            <Dropdown.Item eventKey="direct-to-film">Direct-to-Film</Dropdown.Item>
            <Dropdown.Item eventKey="direct-to-garment">Direct-to-Garment</Dropdown.Item>
        </DropdownButton>
    );
};

export default ReviewDropdown;