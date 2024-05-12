class LocationModel {
    constructor() {
        this.location = {lat: 0, lng : 0};
    }

    setLocation(lat,long){
        this.location = {lat,long}
    }

    getLocation(lat,long){
        return this.location
    }


}

module.exports = LocationModel;