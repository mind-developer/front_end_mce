import React, { useEffect, useMemo, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  format,
  subDays,
  addDays,
  setHours,
  setMinutes,
  setSeconds,
  isBefore,
  isEqual,
  parseISO,
} from "date-fns";
import { utcToZonedTime } from "date-fns-tz";
import pt from "date-fns/locale/pt";

import { Container, Content, Time, ButtonSecundary } from "./styles";
import api from "../../../services/api";

function Agenda() {
  const range = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [schedule, setSchedule] = useState([]);
  const [date, setDate] = useState(new Date());

  const dateFormatted = useMemo(
    () => format(date, "d 'de' MMMM", { locale: pt }),
    [date]
  );

  useEffect(() => {
    async function loadSchedule() {
      const response = await api.get("/schedule", { params: { date } });

      const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;

      const data = range.map((hour) => {
        const checkDate = setSeconds(setMinutes(setHours(date, hour), 0), 0);
        const compareDate = utcToZonedTime(checkDate, timezone);
        // console.log(checkDate, compareDate);

        return {
          time: `${hour}:00h`,
          past: isBefore(compareDate, new Date()),
          appointment: response.data.find(
            (a) => a.date.split("T")[1]?.split(":")[0] == hour
          ),
        };
      });

      setSchedule(data);
    }

    loadSchedule();
  }, [date]);

  function handlePrevDay() {
    setDate(subDays(date, 1));
  }

  function handleNextDay() {
    setDate(addDays(date, 1));
  }
  return (
    <Container>
      <header>
        <button type="button" onClick={handlePrevDay}>
          <MdChevronLeft size={36} />
        </button>
        <strong>{dateFormatted}</strong>
        <button type="button" onClick={handleNextDay}>
          <MdChevronRight size={36} />
        </button>
      </header>
      <ul>
        {schedule?.map((time, index) => (
          <Content>
            <div>{range[index]}h</div>
            <Time>
              {time.appointment ? (
                <>
                  {" "}
                  <ButtonSecundary isActive={false}>Disponivel</ButtonSecundary>
                  <ButtonSecundary isActive>
                    N??o disponivel
                  </ButtonSecundary>{" "}
                </>
              ) : (
                <>
                  {" "}
                  <ButtonSecundary isActive>Disponivel</ButtonSecundary>
                  <ButtonSecundary isActive={false}>
                    N??o disponivel
                  </ButtonSecundary>
                </>
              )}
            </Time>
          </Content>
        ))}
      </ul>
    </Container>
  );
}

export default Agenda;
