import { useState, useEffect } from "react";
import { getRooms } from "../services/getRooms";

export function MainPage() {
    const [allRooms, setAllRooms] = useState([]);

    useEffect(() => {
        const fetchRooms = async () => {
            const data = await getRooms();
            setAllRooms(data);
        }
        fetchRooms();
    }, []);

    return (
        <div className="main-page">
            <h1>Главная</h1>
            <div className="room-container">
            {allRooms.map((room) => (
                <div key={room.room_number} className="room">
                    <span>Номер: {room.room_number}</span>
                    <span>Статус: {room.status}</span>
                    <span>{room.price}₽</span>
                </div>
            ))}    
            </div>
            
        </div>
    );
}