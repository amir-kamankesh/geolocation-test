import React from 'react';

class TestGeoLocation extends React.Component {
    componentDidMount() {
        if ('geolocation' in navigator) {
            alert('the geo location is enable');
            console.log(navigator.geolocation);
            navigator.geolocation.getCurrentPosition(function(location) {
                console.log(location);
                alert('your lat is ' + location.coords.latitude.toString() + ' and your lon is ' + location.coords.longitude.toString());
            }, function (error) {
                console.log(error);
            });
        } else {
            alert('the geo location api is disable !!');
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
