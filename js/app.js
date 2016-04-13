
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
            src:  'OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaNery',
            desc: 'Avenida Santa Cruz, 2 - Humberto Antunes, Mendes | C.E. Doutor João Nery',
            src:  'OcupaNery',
            home: 'http://bit.ly/1q7pZ9X'
        },
        {
            name: '#OcupaMatias',
            desc: 'Rua Conde de Araruama, 439 - Centro, Macaé | C.E Matias Neto',
            src:  'OcupaMatias',
            home: 'http://bit.ly/1UJhlvm'
        },
        {
            name: '#OcupaBacaxá',
            desc: ' Rua Capitão Nunes - Bacaxá, Saquarema | Escola Técnica Estadual Helber Vignoli Muniz',
            src:  '#OcupaBacaxa',
            home: 'http://bit.ly/1SBk1Fn'
        },
        {
            name: '#OcupaClovis',
            desc: 'Avenida dos Democráticos, 271 - Manguinhos | C.E Professor Clovis Monteiro',
            src:  'OcupaClovis',
            home: 'http://bit.ly/1Vac7sn'
        },
        {
            name: '#OcupaIrineu',
            desc: ' Rua Doutor Otávio Ascoli, próximo 694 - Vila Centenário, Duque de Caxias | C.E Irineu Marinho',
            src:  '#OcupaIrineu',
            home: 'http://bit.ly/1XhZVUh'
        },
        {
            name: '#OcupaStuart',
            desc: 'Rua Raul Azevedo, 378 - Senador Camará, Rio de Janeiro | C.E. Stuart Edgar Angel Jone',
            src:  'OcupaStuart',
            home: 'http://bit.ly/1RGQtJQ'
        },
        {
            name: '#OcupaIEPIC',
            desc: ' Travessa Manoel Continentino, 32 - São Domingos, Niterói | Instituto de Educação Professor Ismael Coutinho',
            src:  'OcupaIEPIC',
            home: 'http://bit.ly/1S5FWu2'
        },
        {
            name: '#OcupaGuanabara',
            desc: ' Avenida Lucas Evangelista de Oliveira Franco - Aterrado, Volta Redonda | C.E. Guanabara',
            src:  'OcupaGuanabara',
            home: 'http://bit.ly/1oRbzd2'
        },
        {
            name: '#OcupaParanhos',
            desc: ' Rodovia Amaral Peixoto, 1959, km 97 - Centro, Iguaba Grande | C.E. Francisco de Paula Paranhos',
            src:  'OcupaParanhos',
            home: 'http://bit.ly/1RJtLkh'
        },
        {
            name: '#OcupaAnysio',
            desc: ' Rua Amaral, 26 - Andaraí, Rio de Janeiro | C.E. Chico Anysio',
            src:  'OcupaAnysio',
            home: 'http://bit.ly/23tawzE'
        },
        {
            name: '#OcupaCompositor',
            desc: ' Avenida Dom Hélder Câmara, 1184 - Benfica, Rio de Janeiro | C.E. Compositor Luiz Carlos da Vila',
            src:  'OcupaCompositor',
            home: 'http://bit.ly/1Q1crSk'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaEuclydes',
            desc: 'Rodovia Amaral Peixoto, Lote 1 - São José de Imbassaí, Maricá | C.E. Euclydes Paulo da Silva',
            src:  '#OcupaEuclydes',
            home: 'http://bit.ly/1q7pA7r'
        }
        
    ];

});
