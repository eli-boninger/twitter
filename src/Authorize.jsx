import axios from 'axios';

const Authorize = () => {
    const handleAuth = async () => {
        axios.get(`${import.meta.env.API_URL}/twitter-auth`);
    };

    return (<button onClick={handleAuth}>Authenticate</button>);
};

export default Authorize;