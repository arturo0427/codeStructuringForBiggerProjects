import EventEmitter from './EventEmitter';

export default class Resources extends EventEmitter {
  constructor(sources) {
    super();
    this.sources = sources;

    console.log('sources', this.sources);
  }
}
