
var invoice = angular.module('invoice',[]);

invoice.controller('calculateInvoice', function calculateInvoice($scope){
    $scope.calculate = function(){
        switch($scope.currency){
            case 'USD':
                $scope.usdAmt = $scope.cost * $scope.quantity;
                $scope.inrAmt = $scope.cost * $scope.quantity*60;
                $scope.euroAmt = $scope.cost * $scope.quantity*0.85;
                break;
            case 'INR':
                $scope.usdAmt = ($scope.cost * $scope.quantity)/60;
                $scope.inrAmt = $scope.cost * $scope.quantity;
                $scope.euroAmt = ($scope.cost * $scope.quantity)/70;
                break;
            case 'EURO':
                $scope.usdAmt = $scope.cost * $scope.quantity*1.16;
                $scope.inrAmt = $scope.cost * $scope.quantity*70;
                $scope.eurAmt = $scope.cost * $scope.quantity;
                break;
            default:
                $scope.usdAmt = 0;
                $scope.inrAmt = 0;
                $scope.euroAmt = 0;
        }
        
    }
});