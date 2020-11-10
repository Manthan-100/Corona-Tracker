import React, { Component, useEffect } from 'react';
import App from "../App"


const url = "https://covid19.mathdro.id/api"

export const fetchData = () => {
    const response =  fetch(url);
    const data = response.json();
    console.log(data);
}