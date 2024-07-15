import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";
import {CompanyFieldsStyled, PublicHolidayContainerStyled, WorkingHoursStyled} from "../styles/companySettingsStyles.js";
import ButtonUpload from "../components/buttons/ButtonUpload.jsx";
import ButtonBrand from "../components/buttons/ButtonBrand.jsx";
import {useState} from "react";

export default function CompanyRoute() {


    const [selectedHour, setSelectedHour] = useState('');
    const handleHourChange = (event) => {
        setSelectedHour(event.target.value);
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

                <h3>Public Holidays</h3>
                <ButtonBrand buttonText={"Add Holiday"} iconURL={"/plus-add.svg"}/>

            </PublicHolidayContainerStyled>

        </RouteContentStyled>
    )
}
