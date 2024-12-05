const Authorize = () => {
    const scopes = ['tweet.read', 'tweet.write', 'users.read'].join('%20');
    const url = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${import.meta.env.VITE_X_CLIENT_ID}&redirect_uri=${encodeURIComponent(import.meta.env.VITE_CALLBACK_URI)}&scope=${scopes}&state=state&code_challenge=challenge&code_challenge_method=plain`;


    return (<a href={url}>Authenticate</a>);
};

export default Authorize;