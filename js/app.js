
var app = angular.module('OcupaEscola', ['ngRoute']).controller('MainCtrl',  function($scope, $http) {
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
            name: '#OcupaBalthazar',
            desc: ' Rua Guarani, 209 - Piabeta, Magé | C.E. Professor Alfredo Balthazar',
            src:  'OcupaBalthazar',
            home: 'http://ow.ly/10zNjp'
        },
        {
            name: '#OcupaBangu',
            desc: ' Estrada do Engenho, 442 - Bangu, Rio de Janeiro | C.E. Bangu',
            src:  'OcupaBangu',
            home: '#'
        },
        {
            name: '#OcupaFreitas',
            desc: ' Rua Nélio Chambareli - São Miguel, Queimados | CIEP 335 Joaquim de Freitas, Maricá | C.E. Euclydes Paulo da Silva',
            src:  'OcupaFreitas',
            home: 'http://ow.ly/10zMjY'
        },
        {
            name: '#OcupaBragança',
            desc: ' Rua Marquês Paraná - Vila Canaã, Araruama | CIEP Brizolão 460 Thiophyla Bragança',
            src:  'OcupaBragança',
            home: '#'
        },
        {
            name: '#OcupaHispano',
            desc: ' Rua Venceslau - Méier | C.E. Hispano Brasileiro João Cabral de Melo Neto',
            src:  'OcupaHispano',
            home: '#'
        },
        {
            name: '#OcupaJBM',
            desc: ' Avenida Alberto Lamego, 712 - Parque Califórnia, Campos dos Goytacazes | E.T.E. João Barcelos Martins',
            src:  'OcupaJBM',
            home: 'http://ow.ly/10zNU3'
        },
        {
            name: '#OcupaHerbert',
            desc: ' Rua Barão de Itapagipe, 311 - Rio Comprido, Rio de Janeiro | C.E. Herbert Rebeca de Souza',
            src:  'OcupaHerbert',
            home: 'http://bit.ly/1SK3IWA'
        },
        {
            name: '#OcupaJK',
            desc: ' Rua Jornalista Antônio de Freitas, 75 - Jardim América, Rio de Janeiro | E.T.E. Juscelino Kubitschek de Oliveira',
            src:  'OcupaJK',
            home: 'http://ow.ly/10zN3B'
        },
        {
            name: '#OcupaGiovanetti',
            desc: ' Avenida O, 177 - Açude II, Volta Redonda | CIEP 403 Prof° Maria de Lourdes Giovanetti',
            src:  'OcupaGiovanetti',
            home: '#'
        },
        {
            name: '#OcupaNilo',
            desc: ' Rua Coronel Serrado, 1750 - Praça Zé Garoto, São Gonçalo | C.E. Nilo Peçanha',
            src:  'OcupaNilo',
            home: 'http://ow.ly/10zMKc'
        },
        {
            name: '#OcupaChicoZé',
            desc: ' Rua Simão Luiz da Costa - Ponta Negra, Maricá | C.E. Francisco José do Nascimento',
            src:  'OcupaChicoZe',
            home: 'http://bit.ly/23ATVtK'
        },
        {
            name: '#OcupaCapistrano',
            desc: ' Rua Professora Maria Mendonça Peixoto - Santa Barbara, Niterói | C.E. David Capistrano',
            src:  'OcupaCapistrano',
            home: '#'
        },
        {
            name: '#OcupaEdmundo',
            desc: 'Rua Bernardo Vasconcelos, 425 - Centro, Araruama | C.E. Edmundo Silva',
            src:  'OcupaEdmundo',
            home: '#'
        },
        {
            name: '#OcupaCejopa',
            desc: 'Rua Cora de Alvarenga - Parque Leopoldina, Campos dos Goytacazes | C.E. José do Patrocínio',
            src:  'OcupaCejopa',
            home: '#'
        },
        {
            name: '#OcupaSalim',
            desc: 'Rua da Chita, 419 - Bangu, Rio de Janeiro | C.E. João Salim Miguel',
            src:  'OcupaSalim',
            home: '#'
        },
        {
            name: '#OcupaTonhão',
            desc: 'Rua Maranhão, 530, Lins de Vasconcelos, Rio De Janeiro - RJ - 20720-230 | C.E Antônio Houaiss',
            src:  'OcupaTonhao',
            home: 'http://bit.ly/1q7pA7r'
        },
        {
            name: '#OcupaCepar',
            desc: 'Estrada Caetano Monteiro, 814 - Pendotiba Niterói | C.E Paulo Assis Ribeiro',
            src:  'OcupaCepar',
            home: '#'
        }

    ];

})
    .controller('ApiController', function($scope, $http) {
        $http.get("https://sheetsu.com/apis/v1.0/fd52ca91")
        .success(function(response) {$scope.schools = response;});
})
    .config(['$routeProvider',
      function($routeProvider) {
        $routeProvider.
          when('/mapa', {
            templateUrl: 'partials/mapa.html',
            controller: 'MapCtrl'
          }).
          when('/escola/:nome', {
            templateUrl: 'partials/escolaOcupada.html',
            controller: 'EscolaCtrl'
          }).
          when('/apoie', {
            templateUrl: 'https://docs.google.com/forms/d/1q9-lHsT1XrkBShbgy-28m9fU2x7F1NnIn5l9D08GVg8/viewform?c=0&w=1'
          }).
          otherwise({
            redirectTo: '/'
          });
}]);
