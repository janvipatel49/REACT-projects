import React, { useState } from 'react'

const ProfileDashboard = () => {

    const [profiles, setProfiles] = useState([
        {id:1,name:"janvi patel",city:"Ahmedabad",age:20},
        {id:2,name:"prisha patel",city:"Vadodara",age:21},
        {id:3,name:"saloni patel",city:"Surat",age:24},
        {id:4,name:"khush patel",city:"Rajkot",age:20},
        {id:5,name:"smit Patel",city:"Gandhinagar",age:23},
        {id:6,name:"krish patel",city:"Bhavnagar",age:16},
        {id:7,name:"pal patel",city:"Mehsana",age:19},
    ]);

    const [query, setQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState("");

    const [orderBy, setOrderBy] = useState("");
    const [direction, setDirection] = useState("asc");

    // 🔽 Sorting
    const sortHandler = (key) => {
        const newDirection = orderBy === key && direction === "asc" ? "desc" : "asc";
        setOrderBy(key);
        setDirection(newDirection);
    };

    // ❌ Delete
    const removeProfile = (profileId) => {
        const updatedList = profiles.filter((item) => item.id !== profileId);
        setProfiles(updatedList);
    };

    // 🔍 Filtering
    const filteredList = profiles.filter((item)=>{
        const nameMatch = item.name.toLowerCase().includes(query.toLowerCase());
        const cityMatch = selectedCity === "" ? true : item.city === selectedCity;
        return nameMatch && cityMatch;
    });

    // 🔼 Sorting
    const finalList = [...filteredList].sort((a, b) => {
        if (!orderBy) return 0;

        if (a[orderBy] < b[orderBy]) return direction === "asc" ? -1 : 1;
        if (a[orderBy] > b[orderBy]) return direction === "asc" ? 1 : -1;
        return 0;
    });

    // 🌆 Unique Cities
    const cityOptions = [...new Set(profiles.map(item => item.city))];

  return (
    <div>

        {/* 🔍 Search */}
        <input 
            type="text" 
            placeholder='Search profiles...' 
            value={query} 
            onChange={(e)=>setQuery(e.target.value)} 
        />
       
        {/* 📍 Filter */}
        <select value={selectedCity} onChange={(e)=>setSelectedCity(e.target.value)}>
            <option value="">All Locations</option>
            {
                cityOptions.map((city, i)=>(
                    <option key={i} value={city}>{city}</option>
                ))
            }
        </select>

        {/* 📊 Table */}
        <table border="1">
            <thead>
                <tr>
                    <th onClick={()=>sortHandler("id")}>ID ⬍</th>
                    <th onClick={()=>sortHandler("name")}>Full Name ⬍</th>
                    <th onClick={()=>sortHandler("city")}>Location ⬍</th>
                    <th onClick={()=>sortHandler("age")}>Age ⬍</th>
                    <th>Action</th>
                </tr>
            </thead>

            <tbody>
                {
                    finalList.map((item)=>(
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.name}</td>
                            <td>{item.city}</td>
                            <td>{item.age}</td>
                            <td>
                                <button onClick={()=>removeProfile(item.id)}>
                                    Remove
                                </button>
                            </td>
                        </tr>
                    ))
                }
            </tbody>
        </table>

    </div>
  )
}

export default ProfileDashboard;