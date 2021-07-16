import React, { useState, useEffect, useMemo } from "react";

import { MdNotifications } from "react-icons/md";
import Profile from "../../../../assets/profile.jpeg";
import api from "../../../../services/api";

import { parseISO, formatDistance } from "date-fns";
import pt from "date-fns/locale/pt";

// import api from "~/services/api";

import {
  Container,
  Badge,
  NotificationList,
  Scroll,
  Notification,
  ProfileImg,
} from "./styles";
import { useHistory } from "react-router-dom";

export default function Notifications() {
  const [visible, setVisible] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const history = useHistory();

  const hasUnread = useMemo(
    () => !!notifications.find((notification) => notification.read === false),
    [notifications]
  );

  useEffect(() => {
    async function loadNotifications() {
      const response = await api.get("/notifications");

      const data = response.data.map((notification) => ({
        ...notification,
        timeDistance: formatDistance(
          parseISO(notification.createdAt),
          new Date(),
          { addSuffix: true, locale: pt }
        ),
      }));

      setNotifications(data);
    }

    loadNotifications();
  }, []);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  async function handleMarkAsRead(id) {
    await api.put(`/notifications/${id}`);

    setNotifications(
      notifications.map((notification) =>
        notification._id === id ? { ...notification, read: true } : notification
      )
    );
    handleToggleVisible();
    history.push("/dashboard");
  }

  return (
    <Container>
      <NotificationList visible={visible}>
        <Scroll>
          {notifications.map((notification) => (
            <Notification
              key={notification._id}
              unread={!notification.read}
              onClick={() => {
                handleToggleVisible();
                history.push("/dashboard");
              }}
            >
              <p>{notification.content}</p>
              <time>{notification.timeDistance}</time>
              {!notification.read && (
                <button
                  type="button"
                  onClick={() => handleMarkAsRead(notification._id)}
                >
                  Marcar como lida
                </button>
              )}
            </Notification>
          ))}
        </Scroll>
      </NotificationList>

      <Badge hasUnread={hasUnread}>
        <button onClick={handleToggleVisible}>
          <ProfileImg src={Profile} />
        </button>
        <div>
          <button onClick={() => history.push("/dashboard/profile")}>
            <strong>Adam Sander</strong>
            <span>Meu Perfil</span>
          </button>
        </div>
      </Badge>
    </Container>
  );
}
