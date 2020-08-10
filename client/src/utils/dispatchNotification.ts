import { store } from 'react-notifications-component';

type NotificationType = 'danger' | 'success' | 'info' | 'default' | 'warning'

interface NotificationOptions {
    title: string
    message: string
    type: NotificationType
}

const dispatchNotification = (options: NotificationOptions) => {
    console.log(options)
    store.addNotification({
        title: options.title,
        message: options.message,
        type: options.type,
        insert: "top",
        container: "top-right",
        animationIn: ["animated", "slideInRight"],
        animationOut: ["animated", "slideOutRight"],
        dismiss: {
            duration: 5000,
            onScreen: true
        },
    });
};

export default dispatchNotification;