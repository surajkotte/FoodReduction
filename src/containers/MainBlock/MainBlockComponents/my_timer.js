import { useTimer } from 'react-timer-hook';

function MyTimer({ expiryTimestamp,expiryFunction }) {
    const {
    seconds,
    minutes,
    hours,
    days,
    isRunning,
    start,
    pause,
    resume,
    restart,
    } = useTimer({ expiryTimestamp, onExpire: () => {expiryFunction()} });

    return (
        <>
            <span>{hours}</span>:<span>{minutes}</span>:<span>{seconds}</span>
        </>
    );
}

export default MyTimer;