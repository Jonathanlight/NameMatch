angular.module('app.routes', ['ionic'])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  
.state('launch.home', {
    url: '/home',
    views: {
      'home': {
        templateUrl: 'templates/homeNameMatch.html'
      }
    }
  })

  .state('launch.playBoy', {
    url: '/boy',
    views: {
      'boy': {
        templateUrl: 'templates/playBoy.html',
        controller: 'playBoyCtrl'
      }
    }
  })

  .state('launch.playGirl', {
    url: '/girl',
    views: {
      'girl': {
        templateUrl: 'templates/playGirl.html',
        controller: 'playGirlCtrl'
      }
    }
  })

  .state('launch', {
    url: '/homing',
    templateUrl: 'templates/launch.html',
    abstract:true
  })

$urlRouterProvider.otherwise('/homing/home')

});