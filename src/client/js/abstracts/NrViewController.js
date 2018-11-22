import NrComponentController from "./NrComponentController";

/**
 *
 * @abstract
 */
class NrViewController extends NrComponentController {

  /**
   *
   * @param name {string} Name of concrete class
   * @param $injector {$injector}
   * @param $element {$element}
   * @param $attrs {$attrs}
   * @param $scope {$scope}
   * @protected
   * @ngInject
   */
  constructor (name, $injector, $element, $attrs, $scope) {
    super(name, $injector, $element, $attrs, $scope);

    /**
     *
     * @member {$state}
     */
    this.$state = $injector.get('$state');

  }

}

export default NrViewController;
