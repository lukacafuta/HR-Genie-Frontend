import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";
import {
    CompanyFieldsStyled,
    PublicHolidayContainerStyled,
    PublicHolidaysGridStyled, PublicHolidaysHeaderStyled,
    WorkingHoursStyled
} from "../styles/companySettingsStyles.js";
import ButtonUpload from "../components/buttons/ButtonUpload.jsx";
import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import {useState} from "react";
import * as PropTypes from "prop-types";
import PublicHolidaysForm from "../components/forms/PublicHolidaysForm.jsx";
import {useSelector} from "react-redux";
import PublicHolidayCard from "../components/PublicHolidayCard.jsx";

PublicHolidaysForm.propTypes = {
    isModalOpen: PropTypes.any,
    closeModal: PropTypes.func
};
export default function CompanyRoute() {

    const [selectedHour, setSelectedHour] = useState('');
    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
    };

    const publicHolidays = useSelector((state) => state.company.publicHolidays);

    const [isModalOpen, setIsModalOpen] = useState(false);
    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };


    return (
        <RouteContentStyled>
            <RouteHeadStyled>
                <div><h2>Company Settings</h2>
                    <p>Add something here</p></div>
            </RouteHeadStyled>

            <CompanyFieldsStyled>
                <div>
                    <h3>Company Name</h3>
                    <input type="text" placeholder="Company Name"/>
                </div>
                <div>
                    <h3>Company Logo</h3>
                    <ButtonUpload
                        iconURL={"/image-upload.svg"}
                        buttonText={"Upload Image"}


                    />
                </div>

                <WorkingHoursStyled>
                    <h3>Working Hours</h3>
                    <div>
                        <p>Start:</p>
                        <select value={selectedHour} onChange={handleHourChange}>
                            {[...Array(24).keys()].map(hour => (
                                <option key={hour} value={hour}>
                                    {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>End:</p>
                        <select value={selectedHour} onChange={handleHourChange}>
                            {[...Array(24).keys()].map(hour => (
                                <option key={hour} value={hour}>
                                    {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                                </option>
                            ))}
                        </select>
                    </div>
                </WorkingHoursStyled>
            </CompanyFieldsStyled>
            <PublicHolidayContainerStyled>
                <PublicHolidaysHeaderStyled>
                    <h3>Public Holidays</h3>
                    <ButtonBrand buttonText={"Add Holiday"} iconURL={"/plus-add.svg"} onClick={() => toggleModal()}/>
                </PublicHolidaysHeaderStyled>
                <PublicHolidaysGridStyled>
                    {publicHolidays.map((holiday, i) => <PublicHolidayCard key={i} publicHoliday={holiday}/>)}
                </PublicHolidaysGridStyled>
            </PublicHolidayContainerStyled>

            <PublicHolidaysForm isModalOpen={isModalOpen} closeModal={toggleModal}/>


        </RouteContentStyled>
    )
}
