import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Callback = () => {
    const [searchParams, _setSearchParams] = useSearchParams();
    const state = searchParams.get('state');
    const code = searchParams.get('code');

    useEffect(() => {
        async function getOAuthToken() {
            const params = new URLSearchParams();
            params.append('code', code);
            params.append('client_id', import.meta.env.VITE_X_CLIENT_ID);
            params.append('grant_type', 'authorization_code');
            params.append('redirect_uri', import.meta.env.VITE_CALLBACK_URI);
            params.append('code_verifier', 'challenge');
            const res = await axios.post('https://api.x.com/2/oauth/token', params, { headers: { "Content-Type": "application/x-www-form-urlencoded" } });
            console.log(res.data);
        }
        if (state && code) {
            getOAuthToken();
        }
    }, [state, code]);

    return (
        <div>Callback {JSON.stringify(searchParams)}</div>
    );
};