
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.escolas = [
        {
            name: 'OcupaCairu',
            desc: '#OcupaCairu',
            src: 'https://www.facebook.com/OcupaCairu/',
            home: 'https://www.facebook.com/OcupaCairu/'
        },
        {
            name: '#OCUPA-JBM',
            desc: '#OCUPA-JBM',
            src: 'https://www.facebook.com/OCUPA-JBM-210806322632120',
            home: 'https://www.facebook.com/OCUPA-JBM-210806322632120'
        },
        {
            name: '#OcupaMendes',
            desc: 'Rua Pio Dutra, 353 - Freguesia, Ilha do Governador | C.E. Prefeito Mendes de Morae',
            src: 'http://bit.ly/1Vaa1IX',
            home: 'http://bit.ly/1Vaa1IX'
        },{
            name: '#OcupaGomes',
            desc: 'Rua São Maurício, 87 - Penha, Rio de Janeiro | C.E. Gomes Freire de Andra',
            src: 'http://bit.ly/1UJduOW',
            home: 'http://bit.ly/1UJduOW'
        }
    ];

});
