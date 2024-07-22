import {Calendar as BigCalendar, momentLocalizer, Views} from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import {
    CalendarContainer,
    Controls,
    ControlButton,
    ControlSelect,
    NavButton,
    DateDisplay
} from '../styles/calendarStyles';
import {useState} from 'react';

// Configure moment.js to start weeks on Monday
moment.updateLocale('en', {
    week: {
        dow: 1, // Monday is the first day of the week
    },
});

const localizer = momentLocalizer(moment);

const initialEvents = [];

const CalendarComponent = () => {
    const [events] = useState(initialEvents);
    const [view, setView] = useState(Views.MONTH);
    const [filter, setFilter] = useState('all');
    const [date, setDate] = useState(new Date());

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
                    <option value="sick">Sick Leave</option>
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