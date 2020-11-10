import { Dispatch, SetStateAction } from 'react';
import fetchGraphQL from './fetchGraphQL';

async function getSelectedSession(token: string, setState: Dispatch<SetStateAction<any>>, setLoading: Dispatch<SetStateAction<boolean>>, query: string) {
    setLoading(true);

    const res: { getOneSession: any } = await fetchGraphQL(token, query);

    if (res === undefined) {
        console.error('ALL SESSIONS RETURNED UNDEFINED');
        return;
    }

    setState(res.getOneSession);

    setLoading(false);
};

export default getSelectedSession;