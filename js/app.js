
var app = angular.module('demo', []).controller('DemoCtrl', function($scope) {
    $scope.escolas = [
        {
            name: '#OcupaMendes',
            desc: 'Rua Pio Dutra, 353 - Freguesia, Ilha do Governador | C.E. Prefeito Mendes de Morae',
            src:  'OcupaMendes',
            home: 'http://bit.ly/1Vaa1IX'
        },
        {
            name: '#OcupaGomes',
            desc: 'Rua São Maurício, 87 - Penha, Rio de Janeiro | C.E. Gomes Freire de Andra',
            src:  'OcupaGomes',
            home: 'http://bit.ly/1UJduOW'
        },
        {
            name: '#OcupaHL',
            desc: 'Rua Cuba, 320 - Penha, Rio de Janeiro | C.E. Heitor Lira',
            src:  'OcupaHL',
            home: 'http://bit.ly/1UJduOW'
        },
        {
            name: '#OcupaCairu',
            desc: 'Rua Soares, 95 - Méier, Rio de Janeiro | C.E. Visconde de Cairú',
            src:  'OcupaCairu',
            home: 'http://bit.ly/1UJduOW'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        }
    ];

});
