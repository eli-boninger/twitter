import axios from 'axios';

const Authorize = () => {
    const handleAuth = async () => {
        const scopes = ['tweet.read', 'tweet.write'].join('%20');
        await axios.get(`https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${import.meta.env.VITE_X_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_CALLBACK_URI)}&scope=${scopes}&state=state&code_challenge=challenge&code_challenge_method=plain`);
    };

    return (<button onClick={handleAuth}>Authenticate</button>);
};

export default Authorize;