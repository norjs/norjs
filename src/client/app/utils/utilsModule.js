import angular from 'angular';
import compileUtilsModule from './compile/compileUtilsModule';

export default angular.module(
  "norjs.app.utils"
  , [
    compileUtilsModule

    // Keep in the same format, continue above with: , fooServiceModule
  ])
  .name;
