import { prRequiredCount } from '../../config';

const messages = [
    "It's not too late to start!",
    'Off to a great start, keep going!',
    "Nice! Now, don't stop!",
    'So close!',
    'Way to go!',
    "Now you're just showing off!",
];

const getResultMessage = prCount => {
    const isShowingOff = prCount > prRequiredCount;
    if (isShowingOff) {
        return messages[5];
    }
    return messages[prCount];
};

export default getResultMessage;
