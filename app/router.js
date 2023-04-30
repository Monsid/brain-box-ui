import EmberRouter from '@ember/routing/router';
import config from 'brain-box-ui/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('brain-box-trivia');
  this.route('ask-chat-gpt');
  this.route('picture-dump');
});
