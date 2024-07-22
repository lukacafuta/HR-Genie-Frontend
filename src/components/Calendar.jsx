import {Calendar as BigCalendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {api} from "../common/api.js";
import {
    CalendarContainer,
    Controls,
    ControlButton,
    ControlSelect,
    NavButton,
    DateDisplay
} from '../styles/calendarStyles';
import {useState, useEffect} from 'react';
import {useSelector} from "react-redux";

// Configure moment.js to start weeks on Monday
moment.updateLocale('en', {
    week: {
        dow: 1, // Monday is the first day of the week
    },
});

const localizer = momentLocalizer(moment);

// mapping object for user-friendly labels
const reasonLabels = {
    vacation: "Vacation",
    sick_leave: "Sick Leave",
    training: "Training",
    holiday: "Holiday"
};


const CalendarComponent = () => {
    const [events, setEvents] = useState([]);
    const [view, setView] = useState(Views.MONTH);
    const [filter, setFilter] = useState('all');
    const [date, setDate] = useState(new Date());

    const accessToken = useSelector((state) => state.user.accessToken);

    useEffect(() => {
        api.setAuthToken(accessToken);

        api.get('/absences/')
            .then(response => {
                const absences = response.data.map(absence => ({
                    id: absence.id,
                    title: `${reasonLabels[absence.reason]}: ${absence.requester}`,
                    start: new Date(absence.startDt),
                    end: new Date(absence.endDt),
                    type: absence.reason.toLowerCase()
                }));
                console.log('Mapped absences data:', absences); // log the mapped response data
                setEvents(absences);
            })
            .catch(error => {
                console.error('Error fetching absences:', error);
            });
    }, [accessToken]);

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleNavigate = (direction) => {
        let newDate = new Date(date);
        if (view === Views.DAY) {
            newDate.setDate(date.getDate() + (direction === 'prev' ? -1 : 1));
        } else if (view === Views.WEEK) {
            newDate.setDate(date.getDate() + (direction === 'prev' ? -7 : 7));
        } else if (view === Views.MONTH) {
            newDate.setMonth(date.getMonth() + (direction === 'prev' ? -1 : 1));
        }
        setDate(newDate);
    };

    const filteredEvents = events.filter(event => filter === 'all' || event.type === filter);

    const formattedDate = moment(date).format(view === Views.MONTH ? 'MMMM YYYY' : 'dddd, MMMM Do YYYY');

    return (
        <CalendarContainer>
            <DateDisplay>{formattedDate}</DateDisplay>
            <Controls>
                <ControlSelect onChange={handleFilterChange} value={filter}>
                    <option value="all">All Calendars</option>
                    <option value="vacation">Vacation</option>
                    <option value="sick_leave">Sick Leave</option>
                    <option value="training">Training</option>
                    <option value="holiday">Holiday</option>
                </ControlSelect>
                <div>
                    <ControlButton onClick={() => setView(Views.DAY)}>Day</ControlButton>
                    <ControlButton onClick={() => setView(Views.WEEK)}>Week</ControlButton>
                    <ControlButton onClick={() => setView(Views.MONTH)}>Month</ControlButton>
                </div>
                <div>
                    <NavButton onClick={() => handleNavigate('prev')}>Previous</NavButton>
                    <NavButton onClick={() => handleNavigate('next')}>Next</NavButton>
                </div>
            </Controls>
            <BigCalendar
                localizer={localizer}
                events={filteredEvents}
                startAccessor="start"
                endAccessor="end"
                style={{height: '70vh', width: '100%'}}
                views={[Views.DAY, Views.WEEK, Views.MONTH]}
                view={view}
                onView={setView}
                date={date}
                onNavigate={setDate}
                toolbar={false} // Disable the default toolbar to remove duplicate buttons
            />
        </CalendarContainer>
    );
};

export default CalendarComponent;