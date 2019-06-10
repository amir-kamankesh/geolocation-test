import React from 'react';

class TestGeoLocation extends React.Component {
    componentDidMount() {
        console.log('hello from amir');
        if ('geolocation' in navigator) {
            console.log('geolocation is enable');
            alert('the geo location is enable');
            // console.log(navigator.geolocation);
            navigator.geolocation.getCurrentPosition(function(location) {
                console.log('your lat is ' + location.coords.latitude + ' and your lon is ' + location.coords.longitude);
                alert('your lat is ' + location.coords.latitude + ' and your lon is ' + location.coords.longitude);
            }, function (error) {
                console.log('hey we have error to read location from your device');
                console.log(error);
            });
        } else {
            alert('the geo location api is disable !!!');
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
