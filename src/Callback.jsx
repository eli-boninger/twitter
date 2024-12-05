import axios from "axios";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export const Callback = () => {
    const [searchParams, _setSearchParams] = useSearchParams();

    const state = searchParams.get('state');
    const code = searchParams.get('code');

    const tweet = async () => {
        const token = sessionStorage.getItem("access_token");
        if (!token) {
            console.error("Unauthorized");
        } else {
            const res = await axios.post('https://api.x.com/2/tweets', { text: "Hi!" }, { headers: { Authorization: `Bearer ${token}` } });
            console.log(res.data);
        }
    };

    useEffect(() => {
        async function getOAuthToken() {

            try {
                const res = await axios.post(`${import.meta.env.VITE_API_URL}/token`, { state, code });
                sessionStorage.setItem('access_token', res.data.access_token);
            } catch (e) {
                console.log(e);
            }

        }
        if (state && code) {
            getOAuthToken();
        }
    }, [state, code]);

    return (
        <>
            <div>Callback</div>
            <button onClick={tweet}>Tweet "Hi!"</button>
        </>

    );
};