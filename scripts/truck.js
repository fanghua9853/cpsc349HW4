(function (window){
    'use strict';

    var App = window.App || {};
   
    class Truck {
        constructor(TruckId, db) {
            this.TruckId = TruckId;
            this.db = db;
            console.log('In the truck constructor');
        }
        createOrder(order) {
            console.log('Adding order for ' + order.emailAddress);
            return this.db.add(order.emailAddress, order);
        }
        deliverOrder(customerId){
            console.log('Delivering order for ' + customerId);
            return this.db.remove(customerId);
        }
        printOrders(printFn){
            return this.db.getAll()
                .then(function (orders) {
                    var customerIdArray = Object.keys(orders);
                    console.log('Truck #' + this.TruckId + ' has pending orders:');
                    customerIdArray.forEach(function(id) {
                    console.log(orders[id]);
                    if(printFn){ printFn(orders[id]);}
                }.bind(this));
            }.bind(this));
        }
    }

    App.Truck = Truck;
    window.App = App;

})(window)