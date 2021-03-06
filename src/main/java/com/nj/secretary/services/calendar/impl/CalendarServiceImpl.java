package com.nj.secretary.services.calendar.impl;

import com.nj.secretary.services.calendar.domain.Calendar;
import com.nj.secretary.services.calendar.repository.CalendarDAO;
import com.nj.secretary.services.calendar.service.CalendarService;
import com.nj.secretary.services.user.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CalendarServiceImpl implements CalendarService {

    @Autowired
    @Qualifier("calendarDAOImpl")
    CalendarDAO calendarDAO;

    @Override
    public void addCalendar(Calendar calendar) {

        calendarDAO.addCalendar(calendar);
    }

    @Override
    public Calendar getCalendar(int calendarId) {

        return calendarDAO.getCalendar(calendarId);
    }

    @Override
    public List<Calendar> getCalendarList(Calendar calendar) {

        return calendarDAO.getCalendarList(calendar);
    }

    @Override
    public void updateCalendar(Calendar calendar) {
        calendarDAO.updateCalendar(calendar);

    }

    @Override
    public void deleteCalendar(int calendarId) {

        calendarDAO.deleteCalendar(calendarId);
    }

    @Override
    public void moveCalendar(Calendar calendar) {

        calendarDAO.moveCalendar(calendar);
    }


}
