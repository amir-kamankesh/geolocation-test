import React from 'react';

class TestGeoLocation extends React.Component {
    componentDidMount() {
        if ('geolocation' in navigator) {
            alert('the geo location is enable');
            console.log(navigator.geolocation);
            navigator.geolocation.getCurrentPosition((location) => {
                console.log(location);
                alert('your lat is ' + location.coords.latitude.toString() + ' and your lon is ' + location.coords.longitude.toString());
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
