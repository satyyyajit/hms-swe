'use client';

import { useState } from 'react';

const setMenu = () => {
    const [menu, setMenu] = useState({});
    const [day, setDay] = useState('Monday');
    const [mealType, setMealType] = useState('breakfast');
    const [vegDish, setVegDish] = useState('');
    const [nonVegDish, setNonVegDish] = useState('');
    
    const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    const mealTypes = ['breakfast', 'lunch', 'snacks', 'dinner'];

    const addMenuItem = () => {
        setMenu(prevMenu => ({
            ...prevMenu,
            [day]: {
                ...prevMenu[day],
                [mealType]: { veg: vegDish, nonVeg: nonVegDish }
            }
        }));
        setVegDish('');
        setNonVegDish('');
    };

    return (
        <div className="flex flex-col items-center justify-center p-6">
            <h1 className="text-3xl font-semibold mb-6">Mess Menu Management</h1>
            
            <div className="mb-4 w-full max-w-md p-4 bg-gray-100 rounded-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Add Menu Item</h2>
                <select className="w-full p-2 mb-2 border rounded-lg" value={day} onChange={(e) => setDay(e.target.value)}>
                    {days.map(d => <option key={d} value={d}>{d}</option>)}
                </select>
                <select className="w-full p-2 mb-2 border rounded-lg" value={mealType} onChange={(e) => setMealType(e.target.value)}>
                    {mealTypes.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
                <input 
                    type="text" 
                    placeholder="Veg Dish" 
                    value={vegDish} 
                    onChange={(e) => setVegDish(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <input 
                    type="text" 
                    placeholder="Non-Veg Dish" 
                    value={nonVegDish} 
                    onChange={(e) => setNonVegDish(e.target.value)}
                    className="w-full p-2 mb-2 border rounded-lg"
                />
                <button 
                    onClick={addMenuItem}
                    className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 w-full"
                >
                    Add to Menu
                </button>
            </div>
            
            <div className="w-full mt-10">
                <h2 className="text-xl font-semibold mb-4">Current Menu</h2>
                {days.map(d => (
                    <div key={d} className="mb-4 p-4 border rounded-lg bg-blue-50">
                        <h3 className="text-lg font-bold text-gray-800 ">{d}</h3>
                        {mealTypes.map(m => (
                            menu[d] && menu[d][m] ? (
                                <div key={m} className="mt-2">
                                    <h4 className="text-md font-medium capitalize">{m}</h4>
                                    <p className="text-green-500"><strong>Veg:</strong> {menu[d][m].veg}</p>
                                    <p className="text-red-500"><strong>Non-Veg:</strong> {menu[d][m].nonVeg}</p>
                                </div>
                            ) : null
                        ))}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default setMenu;