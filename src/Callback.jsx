import { useSearchParams } from "react-router-dom";


export const Callback = () => {
    const [searchParams, _setSearchParams] = useSearchParams();
    return (
        <div>Callback {JSON.stringify(searchParams)}</div>
    );
};