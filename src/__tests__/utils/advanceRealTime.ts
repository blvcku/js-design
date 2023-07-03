import { act } from '@testing-library/react';

const advanceRealTime = async (duration: number) =>
    // In some cases the fake timers are not working
    // so we have to wait in real time for changes
    // DISCLAIMER - use only in extreme cases
    act(async () => {
        await new Promise((resolve) => setTimeout(resolve, duration));
    });

export default advanceRealTime;
