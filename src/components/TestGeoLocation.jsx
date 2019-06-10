import React from 'react';

class TestGeoLocation extends React.Component {
    componentDidMount() {
        console.log('hello from amir');
        const options = {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        };
        if ('geolocation' in navigator) {
            console.log('geolocation is enable');
            console.log(navigator.geolocation);
            if ('getCurrentPosition' in navigator.geolocation) {
                console.log('heeeeey navigator have getCurrentPosition');
            } else {
                console.log('sorry getCurrentPosition not exist');
            }
            navigator.geolocation.getCurrentPosition(function(location) {
                console.log('in get current position');
                try {
                    console.log('your lat is ' + location.coords.latitude + ' and your lon is ' + location.coords.longitude);
                } catch (e) {
                    console.log('we have error to access location object');
                }
            }, function (error) {
                console.log('hey we have error to read location from your device');
                console.log(error);
            }, options);
        } else {
            console.log('the geo location api is disable !!!');
        }
    }

    render() {
        return (
            <div>
                test geo location component
            </div>
        );
    }
}

export default TestGeoLocation;
