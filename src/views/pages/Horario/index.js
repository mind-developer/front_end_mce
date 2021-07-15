import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Button from "../../../components/Button";

import { Container, Content, Time } from "./styles";

function Agenda() {
  const hours = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const [schedule, setSchedule] = useState([
    {},
    { name: "vinicius", hour: 11 },
    { name: "vinicius", hour: 15 },
  ]);

  const ScheduleUser = () => {
    const newSchedule = hours.map((num) => {
      const result = schedule.find((sc) => sc.hour === num);

      if (result) return result;
      return {};
    });
    setSchedule(newSchedule);
  };

  useEffect(() => {
    ScheduleUser();
  }, []);

  return (
    <Container>
      <header>
        <button>
          <MdChevronLeft size={36} />
        </button>
        <strong>31 maio</strong>
        <button>
          <MdChevronRight size={36} />
        </button>
      </header>
      <ul>
        {schedule?.map((sc, index) =>
          sc.name ? (
            <Content>
              <div>{hours[index]}h</div>
              <Time>
                <strong>Adam Sander</strong>
                <span>(11) 99789-1431</span>
              </Time>
            </Content>
          ) : (
            <Content>
              <div>9h</div>
              <span></span>
            </Content>
          )
        )}
      </ul>
    </Container>
  );
}

export default Agenda;
