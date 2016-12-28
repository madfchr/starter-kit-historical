import { action, observable, map, asMap, extendObservable } from 'mobx';
import { autobind } from 'core-decorators';

/**
 * This store handles network requests.
 */
export default class Network {

  /**
   * Constructor
   * @param {object} Domain store
   */
  constructor({ planets = {}, network }) {
    this.fetch = network.fetch;
    extendObservable(this, planets);
  }

  /**
   * @var {string} API endpoint
   */
  apiUrl = 'http://swapi.co/api/planets';

  /**
   * Fetch all planets
   * @param {Number} Page number
   * @return {Promise}
   */
  fetchAll({ page = 1 } = {}) {
    return this.fetch(`${this.apiUrl}/?page=${page}`);
  }

  /**
   * Fetch planet by id
   * @param {string} Planet Id
   * @return {Promise}
   */
  fetchById(id) {
    return this.fetch(`${this.apiUrl}/${id}`);
  }
}
