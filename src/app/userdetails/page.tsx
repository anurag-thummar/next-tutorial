// app/userdetails/page.tsx or wherever this is in Next.js
"use client";

import React, { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    function getLocation(): void {
      const x = document.getElementById("locationOutput");
      if (!x) return;

      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(success, handleError);
      } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
      }

      function success(position: GeolocationPosition): void {
        console.log(position);
        x.innerHTML = `Latitude: ${position.coords.latitude}<br>Longitude: ${position.coords.longitude}`;
      }

      function handleError(error: GeolocationPositionError): void {
        alert("Sorry, no position available.");
        console.error(error);
      }
    }

    getLocation();
  }, []);

  return (
    <>
      <h1>Get user location</h1>
      <div id="locationOutput">Loading location...</div>
    </>
  );
};

export default Page;
