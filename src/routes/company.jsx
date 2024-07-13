import {RouteContentStyled, RouteHeadStyled} from "../styles/routeGeneralStyles.js";
import {CompanyFieldsStyled, WorkingHoursStyled} from "../styles/companySettingsStyles.js";

export default function CompanyRoute() {
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
                    <input type="file" placeholder="Upload Logo"/>
                </div>
                <WorkingHoursStyled>
                    <h3>Working Hours</h3>
                    <div>
                        Start:
                        <input type="time" placeholder="Opening Time"/>
                    </div>
                    <div>
                        End:
                        <input type="time" placeholder="Closing Time"/>
                    </div>
                </WorkingHoursStyled>
            </CompanyFieldsStyled>

        </RouteContentStyled>
    )
}
