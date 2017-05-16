var app = angular.module("myApp", []);
app.controller('mainlCtrl', function($scope) {
    
});

app.factory('valueFactory', function() {
    return {
        valuesArr: []
    }
});

app.component('inputControl', {  
    templateUrl: 'inputTemplate',
    transclude: true,
    bindings: {
      inputValue: '@'
    },
    controller: function(valueFactory) {
        this.inputValue = '';
        function addValue() {
            if (this.inputValue !== '') {
                valueFactory.valuesArr.push(this.inputValue);
            }
            this.inputValue = '';
        };
        this.addValue = addValue;
    }
});

app.component('outputControl', {
    templateUrl: 'outputTemplate',
    controller: function(valueFactory) {
        this.values = valueFactory.valuesArr;
    }
});
