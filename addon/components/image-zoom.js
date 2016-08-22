import Ember from 'ember';
import layout from '../templates/components/image-zoom';

const {computed, run, $} = Ember;
const {htmlSafe} = Ember.String;

export default Ember.Component.extend({
  layout,
  classNames: ['image-zoom'],
  showDetail: false,
  isHidden: true,
  windowHeight: null,
  wormholeDest: 'ember-application',


  showThumbnail: computed.not('showDetail'),
  $destImg: computed(function(){
    return $(`#${this.get('wormholeDest')} img`);
  }),

  style: computed('translateYP', function(){
     return htmlSafe(`transform: translateY(${this.get('translateYP')}%)`);
  }),

  imageHeight: computed(function(){
    return this.get('$destImg').height();
  }),

  imageVisibilityPercentage: computed('imageHeight', 'windowHeight', function(){
    return this.get('windowHeight') / this.get('imageHeight');
  }),

  didInsertElement(){
    this.set('windowHeight', $(window).height());
  },

  actions: {
    mouseMove(event){
      if(this.get('showDetail')){
        run.throttle(() => {
          let yP = event.clientY / this.get('windowHeight');
          let imageVisibilityPercentage = this.get('imageVisibilityPercentage');          
          this.set('translateYP', -(yP * (1 - imageVisibilityPercentage) * 100));
        }, 0);
      }
    },
    initialImageTranslate(event){
      run.later(() => {
        this.send('mouseMove', event);
        this.set('isHidden', false);
      }, 500);
    },
    toggle(prop){
      this.toggleProperty(prop);
    }
  }
});

