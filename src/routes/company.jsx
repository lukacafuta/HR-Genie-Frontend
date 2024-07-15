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
import {useDispatch, useSelector} from "react-redux";
import PublicHolidayCard from "../components/PublicHolidayCard.jsx";
import {AddCompanyLogo, ChangeCompanyName, ChangeEndHours, ChangeStartHours} from "../store/slices/CompanySlice.jsx";

PublicHolidaysForm.propTypes = {
    isModalOpen: PropTypes.any,
    closeModal: PropTypes.func
};
export default function CompanyRoute() {
    const dispatch = useDispatch();

    const companyData = useSelector((state) => state.company.companyData);
    const publicHolidays = useSelector((state) => state.company.publicHolidays);
    const companyStartWorkingHours = useSelector((state) => state.company.companyData.companyWorkingHours.start);
    const companyEndWorkingHours = useSelector((state) => state.company.companyData.companyWorkingHours.end);
    // const companyLogo = useSelector((state) => state.company.companyData.companyLogo);

    const [isModalOpen, setIsModalOpen] = useState(false);


    const handleFileSelect = (file) => {
        // This currently only saves the filename
        console.log('Selected file:', file.name);
        dispatch(AddCompanyLogo(file.name))
    };


    const handleStartHourChange = (event) => {
        let newStartHour = event.target.value;
        console.log(newStartHour);
        dispatch(ChangeStartHours(newStartHour));
    };

    const handleEndHourChange = (event) => {
        let newEndHour = event.target.value;
        console.log(event.target.value);
        dispatch(ChangeEndHours(newEndHour));

    };

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
                    <input
                        value={companyData.companyName}
                        type="text"
                        placeholder="Company Name"
                        onChange={(e) => dispatch(ChangeCompanyName(e.target.value))}
                    />
                </div>
                <div>
                    <h3>Company Logo</h3>
                    <ButtonUpload
                        iconURL={"/image-upload.svg"}
                        buttonText={"Upload Image"}
                        onFileSelect={handleFileSelect}


                    />
                </div>

                <WorkingHoursStyled>
                    <h3>Working Hours</h3>
                    <div>
                        <p>Start:</p>
                        <select value={companyStartWorkingHours} onChange={handleStartHourChange}>
                            {[...Array(24).keys()].map(hour => (
                                <option key={hour} value={hour}>
                                    {hour < 10 ? `0${hour}:00` : `${hour}:00`}
                                </option>
                            ))}
                        </select>
                    </div>
                    <div>
                        <p>End:</p>
                        <select value={companyEndWorkingHours} onChange={handleEndHourChange}>
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
