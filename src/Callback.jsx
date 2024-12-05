import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Callback = () => {
    const [searchParams, _setSearchParams] = useSearchParams();
    const state = searchParams.get('state');
    const code = searchParams.get('code');

    useEffect(() => {
        async function getOAuthToken() {

            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/token`, { state, code });
                console.log(res.data);
            } catch (e) {
                console.log(e);
            }

        }
        if (state && code) {
            getOAuthToken();
        }
    }, [state, code]);

    return (
        <div>Callback {JSON.stringify(searchParams)}</div>
    );
};