import { useState , useEffect} from "react";

const useOnlineStatus = () => {
    const [onlineStatus, setOnlineStatus] = useState(true);

    useEffect(() => {

        window.addEventListener("online", (e) => {
            console.log("online");
            setOnlineStatus(true);
        });

        window.addEventListener("offline", (e) => {
            console.log("offline");
            setOnlineStatus(false);
        });

        return(() => {
            window.removeEventListener("online",(e) => {
                console.log("online");
                setOnlineStatus(true);
            });

            window.removeEventListener("offline", (e) => {
                console.log("offline");
                setOnlineStatus(false);
            });
        })


    }, []);

    return onlineStatus;
}

export default useOnlineStatus;