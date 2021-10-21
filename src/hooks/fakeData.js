import { useEffect, useState } from "react";

const FakeData = () => {
    const [specialist, setSpecialist] = useState([]);

    useEffect(() => {
        fetch("/specialists.json")
            .then(res => res.json())
            .then(data => setSpecialist(data))
    }, []);

    return [specialist]
}
export default FakeData;