'use strict';

require('./gallery.scss');

module.exports = ['$log', GalleryController];

function GalleryController($log){
  $log.debug('init galleryCtrl');

  this.title = 'Create a gallery!';
}
